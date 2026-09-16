(() => {
  'use strict';

  const layoutFixesHref = './layout-fixes.css';
  if (!document.querySelector(`link[href="${layoutFixesHref}"]`)) {
    const layoutFixes = document.createElement('link');
    layoutFixes.rel = 'stylesheet';
    layoutFixes.href = layoutFixesHref;
    document.head.appendChild(layoutFixes);
  }

  const $ = (selector, scope = document) => scope?.querySelector(selector);
  const $$ = (selector, scope = document) => [...(scope?.querySelectorAll(selector) || [])];
  const header = $('.site-header');
  const menuToggle = $('.menu-toggle');
  const mobileMenu = $('#mobile-menu');
  const form = $('#contact-form');
  const toast = $('.toast');
  const cookieDialog = $('#cookie-dialog');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const heroPortrait = $('.hero-person .person-photo img');
  if (heroPortrait) {
    heroPortrait.src = './WhatsApp%20Image%202026-09-16%20at%2018.58.56.jpeg';
    heroPortrait.removeAttribute('srcset');
    heroPortrait.style.objectPosition = 'center center';
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

  const categoryForIntent = intent => {
    const values = $$('input[name="intent"]', form).map(input => input.value);
    if (values.includes(intent)) return intent;
    if (/Strom/i.test(intent)) return 'Strom';
    if (/Gas/i.test(intent)) return 'Gas';
    if (/Gewerbe.*Lieferstellen/i.test(intent)) return 'Gewerbe / mehrere Lieferstellen';
    if (/Energieoptimierung/i.test(intent)) return 'Allgemeine Beratung';
    if (/Kapitalanlage/i.test(intent)) return 'Kapitalanlage';
    if (/Gewerbeimmobil/i.test(intent)) return 'Gewerbeimmobilie';
    if (/Off-Market|Immobilienverkauf/i.test(intent)) return 'Immobilienverkauf';
    if (/Immobilienberatung/i.test(intent)) return 'Allgemeine Beratung';
    if (/Immobiliensuche/i.test(intent)) return 'Immobiliensuche';
    if (/Energieausweis/i.test(intent)) return 'Energieausweis';
    if (/Photovoltaik|Solaranlage/i.test(intent)) return 'Photovoltaik / Solaranlage';
    if (/Energetische Modernisierung/i.test(intent)) return 'Energetische Modernisierung';
    return 'Allgemeine Beratung';
  };

  const selectIntent = intent => {
    if (!form) return;
    const category = categoryForIntent(intent);
    const radio = $$('input[name="intent"]', form).find(input => input.value === category);
    if (radio) radio.checked = true;
    const detail = $('[name="selectedDetail"]', form);
    if (detail) detail.value = intent;
    $('#kontakt')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(() => $('[name="name"]', form)?.focus({ preventScroll: true }), reduceMotion ? 0 : 500);
  };

  $$('.js-select-intent').forEach(button => {
    button.addEventListener('click', () => selectIntent(button.dataset.intent || 'Allgemeine Beratung'));
  });

  const mountHeroImmoweltBadge = () => {
    const heroPerson = $('.hero-person');
    if (!heroPerson || $('.hero-immowelt-badge', heroPerson)) return;

    const badge = document.createElement('a');
    badge.className = 'hero-immowelt-badge';
    badge.href = 'https://immowelt.de/profil/16637856';
    badge.target = '_blank';
    badge.rel = 'noopener';
    badge.title = 'Partnerschaft mit AVIV Germany GmbH';
    badge.setAttribute('aria-label', 'Immowelt-Partner ESG24 – Profil bei immowelt öffnen');
    badge.innerHTML = '<img src="https://immowelt.de/app_themes/global_rwd/image/logo/partner-awards/partneraward_partner.svg" alt="Immowelt-Partner ESG24" width="175" height="175">';
    heroPerson.appendChild(badge);
  };
  mountHeroImmoweltBadge();

  const updateAboutCopy = () => {
    const aboutCopy = $('.about-copy');
    if (!aboutCopy) return;

    const heading = $('h2', aboutCopy);
    if (heading) heading.innerHTML = 'Persönliche Beratung beginnt mit <em>Zuhören.</em>';

    const existingParagraphs = $$(':scope > p', aboutCopy);
    existingParagraphs.forEach(paragraph => paragraph.remove());

    const signals = $('.about-signals', aboutCopy);
    const paragraphs = [
      'Mein Name ist Giuseppe Perla und ich bin Gründer und persönlicher Ansprechpartner von ESG24. Seit über zwölf Jahren begleite ich Privatkunden, Gewerbekunden und Unternehmen in den Bereichen Energieoptimierung und Immobilien.',
      'Was mir dabei besonders wichtig ist: Ich möchte verstehen, was mein Kunde wirklich braucht. Denn keine Situation ist gleich – weder bei einem Energievertrag noch beim Verkauf, beim Kauf oder bei der Suche nach einer Immobilie.',
      'Bei ESG24 bekommen Sie deshalb keine Beratung von der Stange. Ich nehme mir Zeit für Ihr Anliegen, bespreche die Möglichkeiten verständlich mit Ihnen und begleite Sie persönlich bei den nächsten Schritten.',
      'Ich weiß aus eigener Erfahrung, wie viel Verantwortung und Arbeit hinter einem Unternehmen steckt. Deshalb nehme ich die Anliegen meiner Kunden ernst, höre genau zu und kümmere mich darum mit der gleichen Sorgfalt, als wäre es mein eigenes Unternehmen.'
    ];

    paragraphs.forEach(text => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      aboutCopy.insertBefore(paragraph, signals || null);
    });
  };
  updateAboutCopy();

  const formData = () => Object.fromEntries(new FormData(form).entries());
  const message = () => {
    const data = formData();
    const topic = data.selectedDetail || data.intent || '-';
    return [
      'Hallo ESG24, ich möchte mich unverbindlich beraten lassen.',
      '',
      `Thema: ${topic}`,
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
    const subject = `ESG24 Anfrage: ${data.selectedDetail || data.intent || 'Beratung'}`;
    window.location.href = `mailto:info@esg24.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message())}`;
  });

  $$('[data-cookie-settings]').forEach(button => button.addEventListener('click', () => {
    if (cookieDialog?.showModal) {
      cookieDialog.showModal();
      document.body.classList.add('dialog-open');
    }
  }));
  $('.cookie-close')?.addEventListener('click', () => cookieDialog?.close());
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
