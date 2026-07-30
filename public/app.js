(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const header = $('.site-header');
  const menuToggle = $('.menu-toggle');
  const mobileMenu = $('#mobile-menu');
  const dialog = $('#check-dialog');
  const form = $('#smart-form');
  const toast = $('.toast');

  const setHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
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

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  $$('.reveal').forEach(el => {
    el.style.setProperty('--delay', `${el.dataset.delay || 0}ms`);
    revealObserver.observe(el);
  });

  const switchTabs = $$('.switch-tab');
  switchTabs.forEach(tab => tab.addEventListener('click', () => {
    const target = tab.dataset.panel;
    switchTabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    $$('[data-panel-content]').forEach(panel => {
      const active = panel.dataset.panelContent === target;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });
  }));

  const radioForIntent = intent => $$('input[name="intent"]', form).find(input => input.value === intent);

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

  $$('.js-open-check').forEach(button => button.addEventListener('click', () => openCheck(button.dataset.intent)));

  $('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));

  $$('[data-dialog-intent]').forEach(button => button.addEventListener('click', () => {
    const intent = button.dataset.dialogIntent;
    selectIntent(intent);
    dialog.close();
    $('#check')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

  let step = 1;
  const updateStep = next => {
    step = Math.max(1, Math.min(3, next));
    $$('.form-step', form).forEach(panel => {
      const active = Number(panel.dataset.step) === step;
      panel.hidden = !active;
      panel.classList.toggle('active', active);
    });
    const progress = $('.form-progress span', form);
    progress?.style.setProperty('--progress', `${(step / 3) * 100}%`);
  };

  $$('.next-step', form).forEach(button => button.addEventListener('click', () => updateStep(step + 1)));
  $$('.back-step', form).forEach(button => button.addEventListener('click', () => updateStep(step - 1)));

  const getFormData = () => {
    const data = new FormData(form);
    return Object.fromEntries(data.entries());
  };

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
    if (!name.value.trim()) return name.reportValidity();
    if (!contact.value.trim()) return contact.reportValidity();
    if (!consent.checked) return consent.reportValidity();
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
    const url = `mailto:info@esg24.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`;
    window.location.href = url;
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => { toast.hidden = true; }, 2600);
  }

  const founderImg = $('.founder-image img');
  founderImg?.addEventListener('error', () => { founderImg.style.display = 'none'; });

  $('#year').textContent = new Date().getFullYear();
})();
