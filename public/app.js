(() => {
  'use strict';

  // Keep the official ESG24 lockup readable in compact header/footer spaces.
  const brandPolish = document.createElement('style');
  brandPolish.dataset.esg24BrandPolish = 'true';
  brandPolish.textContent = `
    .site-header .brand{line-height:0;min-width:136px}
    .site-header .brand img{display:block;width:136px!important;height:75px!important;max-width:none!important;object-fit:cover!important;object-position:top center!important}
    .contact-brand img,.brand-full-logo{height:auto!important;object-fit:contain!important}
    .contact-brand img{width:min(100%,270px)!important;filter:drop-shadow(0 14px 30px rgba(5,61,51,.12))}
    .footer-main{align-items:start}
    .footer-brand{max-width:310px}
    .footer-brand img{display:block;width:164px!important;height:91px!important;max-width:none!important;object-fit:cover!important;object-position:top center!important;filter:brightness(0) invert(1)!important;opacity:.96!important;margin:0 0 18px}
    .footer-brand p{margin:0;max-width:290px;color:rgba(255,255,255,.54);font-size:12px;line-height:1.75}
    .footer-col strong{color:#fff;font-size:11px;margin-bottom:10px}
    .footer-col a,.footer-col span{color:rgba(255,255,255,.6);font-size:12px;line-height:1.6}
    .footer-bottom{padding-top:22px;color:rgba(255,255,255,.43)}
    :focus-visible{outline:3px solid rgba(105,215,174,.72);outline-offset:3px}
    @media(max-width:850px){
      .site-header .brand{min-width:120px}
      .site-header .brand img{width:120px!important;height:66px!important}
    }
    @media(max-width:600px){
      .site-header .brand{min-width:106px}
      .site-header .brand img{width:106px!important;height:59px!important}
      .footer-brand img{width:150px!important;height:83px!important}
      .site-footer{padding-top:58px}
    }
  `;
  document.head.appendChild(brandPolish);

  const $ = (selector, scope = document) => scope?.querySelector(selector);
  const $$ = (selector, scope = document) => [...(scope?.querySelectorAll(selector) || [])];

  const header = $('.site-header');
  const menuToggle = $('.menu-toggle');
  const mobileMenu = $('#mobile-menu');
  const dialog = $('#check-dialog');
  const form = $('#smart-form');
  const toast = $('.toast');

  const aboutHeading = $('#ueber-uns .about-copy h2');
  if (aboutHeading) aboutHeading.innerHTML = 'Persönliche Beratung beginnt mit <em>Zuhören.</em>';

  const setHeader = () => header?.classList.toggle('scrolled', window.scrollY > 18);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    mobileMenu.hidden = open;
  });

  $$('#mobile-menu a').forEach(link => link.addEventListener('click', () => {
    mobileMenu.hidden = true;
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -35px' })
    : null;

  $$('.reveal').forEach(el => {
    el.style.setProperty('--delay', `${el.dataset.delay || 0}ms`);
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('in-view');
  });

  const radioForIntent = intent =>
    $$('input[name="intent"]', form).find(input => input.value === intent);

  const selectIntent = intent => {
    const radio = radioForIntent(intent);
    if (radio) radio.checked = true;
  };

  const openCheck = intent => {
    if (!dialog?.showModal) {
      if (intent) selectIntent(intent);
      $('#check')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (intent) dialog.dataset.intent = intent;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  };

  $$('.js-open-check').forEach(button => {
    button.addEventListener('click', () => openCheck(button.dataset.intent));
  });

  $('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));

  $$('[data-dialog-intent]').forEach(button => {
    button.addEventListener('click', () => {
      selectIntent(button.dataset.dialogIntent);
      dialog.close();
      $('#check')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  let step = 1;
  const updateStep = next => {
    step = Math.max(1, Math.min(3, next));
    $$('.form-step', form).forEach(panel => {
      const active = Number(panel.dataset.step) === step;
      panel.hidden = !active;
      panel.classList.toggle('active', active);
    });
    $('.form-progress span', form)?.style.setProperty('--progress', `${(step / 3) * 100}%`);
  };

  $$('.next-step', form).forEach(button =>
    button.addEventListener('click', () => updateStep(step + 1))
  );
  $$('.back-step', form).forEach(button =>
    button.addEventListener('click', () => updateStep(step - 1))
  );

  const getFormData = () => Object.fromEntries(new FormData(form).entries());

  const buildMessage = () => {
    const data = getFormData();
    return [
      'Hallo ESG24, ich interessiere mich für eine Beratung.',
      '',
      `Anliegen: ${data.intent || '-'}`,
      `Kundentyp: ${data.customerType || '-'}`,
      `PLZ: ${data.postalCode || '-'}`,
      `Details: ${data.details || '-'}`,
      '',
      `Name: ${data.name || '-'}`,
      `Kontakt: ${data.contact || '-'}`
    ].join('\n');
  };

  const validateFinal = () => {
    const name = $('[name="name"]', form);
    const contact = $('[name="contact"]', form);
    const consent = $('[name="consent"]', form);
    if (!name?.value.trim()) return name?.reportValidity();
    if (!contact?.value.trim()) return contact?.reportValidity();
    if (!consent?.checked) return consent?.reportValidity();
    return true;
  };

  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!validateFinal()) return;
    const url = `https://wa.me/4917645742334?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    showToast('WhatsApp wird geöffnet …');
  });

  $('[data-send="email"]', form)?.addEventListener('click', () => {
    if (!validateFinal()) return;
    const data = getFormData();
    const subject = `ESG24 Anfrage: ${data.intent || 'Beratung'}`;
    window.location.href =
      `mailto:info@esg24.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`;
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => { toast.hidden = true; }, 2600);
  }

  const founderImg = $('.founder-image img');
  founderImg?.addEventListener('error', () => {
    const fallback = founderImg.dataset.fallback;
    if (fallback && founderImg.src !== fallback) founderImg.src = fallback;
  });

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
