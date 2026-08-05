(() => {
  'use strict';

  const $ = (selector, scope = document) => scope?.querySelector(selector);
  const $$ = (selector, scope = document) => [...(scope?.querySelectorAll(selector) || [])];
  const header = $('.site-header');
  const menuToggle = $('.menu-toggle');
  const mobileMenu = $('#mobile-menu');
  const form = $('#contact-form');
  const toast = $('.toast');
  const cookieDialog = $('#cookie-dialog');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  const revealObserver = !reduceMotion && 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -45px' })
    : null;

  $$('.reveal,.motion-stagger').forEach(el => {
    el.style.setProperty('--delay', `${el.dataset.delay || 0}ms`);
    $$(':scope > *', el).forEach((child, index) => child.style.setProperty('--item-index', index));
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('in-view');
  });

  const counters = $$('[data-counter]');
  const countObserver = !reduceMotion && 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = Number(el.dataset.counter || 0);
          const suffix = el.dataset.suffix || '';
          const duration = 1200;
          const start = performance.now();
          const tick = now => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = `${Math.round(target * eased).toLocaleString('de-DE')}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      }, { threshold: 0.6 })
    : null;
  counters.forEach(el => countObserver ? countObserver.observe(el) : null);

  const selectIntent = intent => {
    const radio = $$('input[name="intent"]', form).find(input => input.value === intent);
    if (radio) radio.checked = true;
    $('#kontakt')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(() => $('[name="name"]', form)?.focus({ preventScroll: true }), reduceMotion ? 0 : 500);
  };

  $$('.js-select-intent').forEach(button => {
    button.addEventListener('click', () => selectIntent(button.dataset.intent || 'Allgemeine Beratung'));
  });

  const formData = () => Object.fromEntries(new FormData(form).entries());
  const message = () => {
    const data = formData();
    return [
      'Hallo ESG24, ich möchte mich unverbindlich beraten lassen.',
      '',
      `Thema: ${data.intent || '-'}`,
      `Bevorzugter Kontakt: ${data.preferredContact || '-'}`,
      `PLZ: ${data.postalCode || '-'}`,
      `Nachricht: ${data.details || '-'}`,
      '',
      `Name: ${data.name || '-'}`,
      `Kontakt: ${data.contact || '-'}`
    ].join('\n');
  };

  const validate = () => {
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
    if (!validate()) return;
    const url = `https://wa.me/4917645742334?text=${encodeURIComponent(message())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    showToast('WhatsApp wird geöffnet …');
  });

  $('[data-send-email]', form)?.addEventListener('click', () => {
    if (!validate()) return;
    const data = formData();
    const subject = `ESG24 Anfrage: ${data.intent || 'Beratung'}`;
    window.location.href = `mailto:info@esg24.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message())}`;
  });

  $$('[data-cookie-settings]').forEach(button => button.addEventListener('click', () => {
    if (cookieDialog?.showModal) {
      cookieDialog.showModal();
      document.body.classList.add('dialog-open');
    }
  }));
  $('.cookie-close')?.addEventListener('click', () => cookieDialog.close());
  $('.cookie-save')?.addEventListener('click', () => {
    localStorage.setItem('esg24-cookie-settings', 'essential-only');
    cookieDialog?.close();
    showToast('Cookie-Einstellungen gespeichert.');
  });
  cookieDialog?.addEventListener('click', event => {
    if (event.target === cookieDialog) cookieDialog.close();
  });
  cookieDialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.hidden = false;
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => { toast.hidden = true; }, 2600);
  }

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
