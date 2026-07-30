(() => {
  'use strict';

  // Keep the official ESG24 lockup readable and introduce more human,
  // real-world photography without changing the established brand system.
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

    .hero-brand,.brand-stage{position:relative}
    .hero-real-photo{position:absolute;z-index:1;right:-2px;top:22px;width:min(76%,390px);aspect-ratio:4/3;border-radius:34px;overflow:hidden;border:1px solid rgba(255,255,255,.2);box-shadow:0 38px 90px rgba(0,20,16,.34);animation:esgPhotoFloat 7s ease-in-out infinite}
    .hero-real-photo:after{content:"";position:absolute;inset:0;background:linear-gradient(145deg,rgba(6,62,54,.08),rgba(6,62,54,.02) 42%,rgba(4,33,28,.35))}
    .hero-real-photo img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block;transform:scale(1.025);transition:transform .8s cubic-bezier(.2,.7,.2,1)}
    .hero-brand:hover .hero-real-photo img{transform:scale(1.07)}
    .brand-card{z-index:3!important;transform:translate(-44px,54px) rotate(-2deg)!important}
    .hero-brand:hover .brand-card{transform:translate(-40px,47px) rotate(0deg)!important}
    .float-card{z-index:5!important}

    .testimonial-card{grid-template-columns:90px minmax(0,1fr) 230px 150px!important;gap:34px!important}
    .testimonial-real-photo{position:relative;justify-self:end;width:100%;max-width:230px;align-self:end}
    .testimonial-real-photo:before{content:"";position:absolute;width:112px;height:112px;right:-18px;bottom:-18px;border-radius:50%;background:rgba(105,215,174,.16);filter:blur(2px)}
    .testimonial-real-photo img{position:relative;z-index:1;width:100%;aspect-ratio:1/1.08;object-fit:cover;object-position:center top;border-radius:28px;border:1px solid rgba(255,255,255,.14);box-shadow:0 26px 65px rgba(0,0,0,.32);display:block;transition:transform .5s ease,box-shadow .5s ease}
    .testimonial-real-photo:hover img{transform:translateY(-7px);box-shadow:0 34px 80px rgba(0,0,0,.38)}

    .founder-image{position:relative}
    .founder-image:after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,transparent 55%,rgba(5,49,41,.16));mix-blend-mode:multiply}
    .founder-image img{transition:transform .8s cubic-bezier(.2,.75,.2,1)}
    .founder-wrap:hover .founder-image img{transform:scale(1.035)}

    @keyframes esgPhotoFloat{0%,100%{transform:translateY(0) rotate(.35deg)}50%{transform:translateY(-10px) rotate(-.35deg)}}

    @media(max-width:1080px){
      .hero-real-photo{right:10px;top:30px;width:min(72%,350px)}
      .brand-card{transform:translate(-20px,56px) rotate(-2deg)!important}
      .hero-brand:hover .brand-card{transform:translate(-18px,50px) rotate(0deg)!important}
      .testimonial-card{grid-template-columns:70px minmax(0,1fr) 210px!important}
      .testimonial-seal{grid-column:2;justify-self:start;margin-top:5px}
    }
    @media(max-width:850px){
      .site-header .brand{min-width:120px}
      .site-header .brand img{width:120px!important;height:66px!important}
      .hero-brand{min-height:500px!important}
      .hero-real-photo{inset:24px 20px auto 20px;width:auto;aspect-ratio:4/3;border-radius:28px}
      .brand-card{width:min(84%,360px)!important;transform:translate(0,104px) rotate(-1.5deg)!important}
      .hero-brand:hover .brand-card{transform:translate(0,97px) rotate(0deg)!important}
      .testimonial-card{grid-template-columns:1fr!important;gap:24px!important}
      .testimonial-card .quote-mark{display:none}
      .testimonial-real-photo{justify-self:start;max-width:280px}
      .testimonial-seal{grid-column:auto;justify-self:start}
    }
    @media(max-width:600px){
      .site-header .brand{min-width:106px}
      .site-header .brand img{width:106px!important;height:59px!important}
      .footer-brand img{width:150px!important;height:83px!important}
      .site-footer{padding-top:58px}
      .hero-brand{min-height:420px!important}
      .brand-stage{min-height:400px!important}
      .hero-real-photo{inset:8px 2px auto 2px;border-radius:23px}
      .brand-card{width:min(90%,320px)!important;padding:24px 22px 18px!important;transform:translate(0,88px) rotate(-1deg)!important}
      .hero-brand:hover .brand-card{transform:translate(0,83px) rotate(0deg)!important}
      .brand-card-footer{margin-top:16px!important;padding-top:14px!important}
      .brand-card-footer strong{font-size:16px!important}
      .testimonial-real-photo{max-width:230px}
    }
    @media(prefers-reduced-motion:reduce){.hero-real-photo{animation:none}.hero-real-photo img,.testimonial-real-photo img,.founder-image img{transition:none!important}}
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

  const heroStage = $('.brand-stage');
  if (heroStage && !$('.hero-real-photo', heroStage)) {
    const photo = document.createElement('figure');
    photo.className = 'hero-real-photo';
    photo.setAttribute('aria-label', 'Giuseppe Perla, persönlicher Ansprechpartner bei ESG24');
    photo.innerHTML = '<img src="https://www.esg24.com/wp-content/uploads/2020/07/PHOTO-2020-07-18-16-00-31.jpg" alt="Giuseppe Perla im persönlichen Beratungsgespräch" width="720" height="900" decoding="async">';
    heroStage.prepend(photo);
  }

  const testimonialCard = $('.testimonial-card');
  if (testimonialCard && !$('.testimonial-real-photo', testimonialCard)) {
    const photo = document.createElement('figure');
    photo.className = 'testimonial-real-photo';
    photo.innerHTML = '<img src="https://www.esg24.com/wp-content/uploads/2021/10/testimonial-person-1%402x.png" alt="Kundin von ESG24" width="600" height="650" loading="lazy" decoding="async">';
    const seal = $('.testimonial-seal', testimonialCard);
    testimonialCard.insertBefore(photo, seal || null);
  }

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

  $$('img').forEach(image => image.addEventListener('error', () => {
    if (image.closest('.hero-real-photo,.testimonial-real-photo')) image.closest('figure')?.remove();
  }, { once: true }));

  const founderImg = $('.founder-image img');
  founderImg?.addEventListener('error', () => {
    const fallback = founderImg.dataset.fallback;
    if (fallback && founderImg.src !== fallback) founderImg.src = fallback;
  });

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();