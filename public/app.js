(() => {
  'use strict';

  const polish = document.createElement('style');
  polish.dataset.esg24FinalPolish = 'true';
  polish.textContent = `
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

    /* Hero: photography leads; the brand card supports it instead of hiding it. */
    .hero-brand,.brand-stage{position:relative}
    .brand-stage{isolation:isolate}
    .hero-real-photo{position:absolute;z-index:1;inset:4px 0 72px 34px;margin:0;border-radius:36px;overflow:hidden;border:1px solid rgba(255,255,255,.18);box-shadow:0 38px 90px rgba(0,20,16,.34);background:#164c41}
    .hero-real-photo:before{content:"";position:absolute;z-index:2;inset:0;background:linear-gradient(125deg,rgba(3,44,37,.04) 28%,rgba(3,44,37,.2) 72%,rgba(3,34,29,.54))}
    .hero-real-photo:after{content:"Nachhaltig wohnen";position:absolute;z-index:3;right:18px;top:18px;padding:9px 13px;border:1px solid rgba(255,255,255,.3);border-radius:999px;background:rgba(5,65,55,.58);backdrop-filter:blur(10px);color:#fff;font-size:9px;font-weight:850;letter-spacing:.08em;text-transform:uppercase}
    .hero-real-photo img{width:100%;height:100%;object-fit:cover;object-position:center 52%;display:block;transform:scale(1.035);animation:esgKenBurns 14s ease-in-out infinite alternate;will-change:transform}
    .brand-card{position:absolute!important;z-index:4!important;left:0!important;bottom:18px!important;width:292px!important;padding:23px 24px 17px!important;border-radius:25px!important;transform:rotate(-1.8deg)!important;background:rgba(250,253,250,.96)!important;backdrop-filter:blur(14px)!important;box-shadow:0 28px 70px rgba(0,22,17,.34)!important}
    .hero-brand:hover .brand-card{transform:translateY(-5px) rotate(0deg)!important}
    .brand-card .brand-full-logo{width:min(100%,205px)!important}
    .brand-card-footer{margin-top:14px!important;padding-top:12px!important}
    .brand-card-footer strong{font-size:15px!important}
    .float-card{z-index:6!important;transition:transform .35s ease,box-shadow .35s ease!important}
    .float-card:hover{transform:translateY(-6px)!important;box-shadow:0 25px 55px rgba(0,24,19,.34)!important}
    .float-energy{left:9px!important;top:54px!important}
    .float-property{right:-8px!important;bottom:82px!important}

    /* Real-estate section: use a real property image instead of a generic illustration. */
    .property-visual{min-height:360px;background:#d8e6dd}
    .property-visual>.property-photo{width:100%;height:100%;min-height:360px;object-fit:cover;object-position:center;display:block;transform:scale(1.01);transition:transform .9s cubic-bezier(.2,.7,.2,1),filter .5s ease}
    .property-panel:hover .property-photo{transform:scale(1.055);filter:saturate(1.06) contrast(1.02)}
    .property-visual:after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(7,84,72,.02) 45%,rgba(7,65,55,.42));z-index:1}
    .property-tag{z-index:2!important;backdrop-filter:blur(9px)}
    .property-panel{overflow:hidden;transition:transform .45s cubic-bezier(.2,.75,.2,1),box-shadow .45s ease}
    .property-panel:hover{transform:translateY(-8px);box-shadow:0 36px 95px rgba(16,49,42,.2)}

    /* The quote does not use a random/person-unverified portrait. */
    .testimonial-card{grid-template-columns:90px minmax(0,1fr) 170px!important;gap:46px!important}
    .testimonial-real-photo{display:none!important}
    .testimonial-seal{position:relative;overflow:visible;animation:esgPulse 4.5s ease-in-out infinite}
    .testimonial-seal:before{content:"";position:absolute;inset:-18px;border:1px solid rgba(105,215,174,.15);border-radius:50%;animation:esgRing 4.5s ease-out infinite}
    .testimonial blockquote{position:relative}
    .testimonial blockquote:after{content:"";display:block;width:74px;height:2px;margin-top:24px;background:linear-gradient(90deg,var(--mint),transparent);transform-origin:left;animation:esgLine 3.4s ease-in-out infinite alternate}

    /* More motion and depth without making the site feel gimmicky. */
    .benefit-card,.expertise-grid article,.property-action,.choice,.contact-links a{will-change:transform;transition:transform .36s cubic-bezier(.2,.75,.2,1),box-shadow .36s ease,border-color .3s ease,background .3s ease}
    .benefit-card:hover{transform:translateY(-10px) rotate(.25deg)!important;box-shadow:0 28px 75px rgba(16,49,42,.16)!important}
    .expertise-grid article:hover{transform:translateY(-5px);position:relative;z-index:2;box-shadow:0 22px 50px rgba(0,0,0,.2)}
    .property-action:hover,.choice:hover{transform:translateY(-4px)}
    .hero-services article{transition:background .3s ease,transform .3s ease}
    .hero-services article:hover{background:rgba(105,215,174,.09);transform:translateY(-2px)}
    .stats-grid>div{position:relative;overflow:hidden}
    .stats-grid>div:after{content:"";position:absolute;inset:0 auto 0 -70%;width:45%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent);transform:skewX(-18deg);animation:esgShine 7s ease-in-out infinite}
    .stats-grid>div:nth-child(2):after{animation-delay:1.1s}.stats-grid>div:nth-child(3):after{animation-delay:2.2s}

    .reveal{opacity:0;transform:translateY(32px);filter:blur(5px);transition:opacity .85s ease,transform .85s cubic-bezier(.18,.8,.22,1),filter .85s ease;transition-delay:var(--delay,0ms)}
    .reveal.reveal-left{transform:translateX(-42px)}
    .reveal.reveal-right{transform:translateX(42px)}
    .reveal.reveal-scale{transform:scale(.955)}
    .reveal.in-view{opacity:1;transform:none;filter:none}
    .motion-stagger>*{opacity:0;transform:translateY(22px);transition:opacity .62s ease,transform .62s cubic-bezier(.2,.75,.2,1);transition-delay:calc(var(--item-index,0) * 70ms)}
    .motion-stagger.in-view>*{opacity:1;transform:none}

    @keyframes esgKenBurns{0%{transform:scale(1.035) translate3d(0,0,0)}100%{transform:scale(1.095) translate3d(-1.2%,.7%,0)}}
    @keyframes esgPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.035)}}
    @keyframes esgRing{0%{transform:scale(.84);opacity:0}35%{opacity:.7}100%{transform:scale(1.18);opacity:0}}
    @keyframes esgLine{from{transform:scaleX(.55);opacity:.55}to{transform:scaleX(1);opacity:1}}
    @keyframes esgShine{0%,52%{left:-70%}68%,100%{left:145%}}

    @media(max-width:1080px){
      .hero-real-photo{inset:4px 10px 76px 10px}
      .brand-card{left:18px!important;bottom:22px!important;width:270px!important}
      .float-energy{left:-3px!important}.float-property{right:0!important}
      .testimonial-card{grid-template-columns:70px minmax(0,1fr) 145px!important;gap:28px!important}
    }
    @media(max-width:850px){
      .site-header .brand{min-width:120px}
      .site-header .brand img{width:120px!important;height:66px!important}
      .hero-brand{min-height:520px!important}
      .brand-stage{min-height:500px!important}
      .hero-real-photo{inset:0 8px 90px 8px;border-radius:29px}
      .brand-card{left:50%!important;bottom:20px!important;width:min(82%,315px)!important;transform:translateX(-50%) rotate(-1deg)!important}
      .hero-brand:hover .brand-card{transform:translateX(-50%) translateY(-4px) rotate(0)!important}
      .float-energy{left:2px!important;top:35px!important}.float-property{right:2px!important;bottom:98px!important}
      .testimonial-card{grid-template-columns:1fr 130px!important;gap:24px!important}
      .testimonial-card .quote-mark{display:none}
      .property-visual,.property-visual>.property-photo{min-height:320px}
    }
    @media(max-width:600px){
      .site-header .brand{min-width:106px}
      .site-header .brand img{width:106px!important;height:59px!important}
      .footer-brand img{width:150px!important;height:83px!important}
      .site-footer{padding-top:58px}
      .hero-brand{min-height:430px!important}
      .brand-stage{min-height:420px!important}
      .hero-real-photo{inset:0 0 88px;border-radius:23px}
      .hero-real-photo:after{right:10px;top:10px;font-size:7px;padding:7px 9px}
      .brand-card{bottom:16px!important;width:min(88%,292px)!important;padding:19px 20px 14px!important}
      .brand-card .brand-full-logo{width:170px!important}
      .float-card{font-size:8px!important;padding:8px 10px!important}
      .float-card>span{width:27px!important;height:27px!important}
      .float-energy{top:24px!important}.float-property{bottom:96px!important}
      .testimonial-card{grid-template-columns:1fr!important}.testimonial-seal{justify-self:start;width:118px!important;height:118px!important}
      .reveal.reveal-left,.reveal.reveal-right{transform:translateY(28px)}
      .hero-orb,.hero-lines{max-width:100vw}
      .experience-badge{right:0!important}
      .property-visual,.property-visual>.property-photo{min-height:260px}
    }
    @media(prefers-reduced-motion:reduce){
      .hero-real-photo img,.testimonial-seal,.testimonial-seal:before,.testimonial blockquote:after,.stats-grid>div:after{animation:none!important}
      .reveal,.motion-stagger>*{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}
    }
  `;
  document.head.appendChild(polish);

  const $ = (selector, scope = document) => scope?.querySelector(selector);
  const $$ = (selector, scope = document) => [...(scope?.querySelectorAll(selector) || [])];

  const header = $('.site-header');
  const menuToggle = $('.menu-toggle');
  const mobileMenu = $('#mobile-menu');
  const dialog = $('#check-dialog');
  const form = $('#smart-form');
  const toast = $('.toast');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const aboutHeading = $('#ueber-uns .about-copy h2');
  if (aboutHeading) aboutHeading.innerHTML = 'Persönliche Beratung beginnt mit <em>Zuhören.</em>';

  const HERO_PHOTO = 'https://images.unsplash.com/photo-1775686332316-8e1ce04d10d7?auto=format&fit=crop&fm=jpg&q=82&w=1800';
  const PROPERTY_PHOTO = 'https://images.unsplash.com/photo-1773754532196-014342510e64?auto=format&fit=crop&fm=jpg&q=82&w=1800';

  // Remove the previous narrow testimonial portrait: it was not compositionally useful
  // and the public source does not establish that it depicts the quoted customer.
  $('.testimonial-real-photo')?.remove();

  const heroStage = $('.brand-stage');
  if (heroStage) {
    $('.hero-real-photo', heroStage)?.remove();
    const photo = document.createElement('figure');
    photo.className = 'hero-real-photo';
    photo.innerHTML = `<img src="${HERO_PHOTO}" alt="Modernes energieeffizientes Wohnhaus mit Solaranlage" width="1800" height="1200" decoding="async" fetchpriority="high">`;
    heroStage.prepend(photo);
  }

  const propertyVisual = $('.property-visual');
  if (propertyVisual) {
    const svg = $('svg', propertyVisual);
    if (svg) {
      const image = document.createElement('img');
      image.className = 'property-photo';
      image.src = PROPERTY_PHOTO;
      image.alt = 'Hochwertig präsentierter Wohnraum für den Immobilienverkauf';
      image.width = 1800;
      image.height = 1200;
      image.loading = 'lazy';
      image.decoding = 'async';
      svg.replaceWith(image);
    }
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

  // Give each major block a distinct entrance direction and stagger dense grids.
  const revealItems = $$('.reveal');
  revealItems.forEach((el, index) => {
    if (el.closest('.hero')) el.classList.add(index % 2 ? 'reveal-right' : 'reveal-left');
    else if (el.matches('.property-panel,.founder-wrap,.smart-form')) el.classList.add('reveal-right');
    else if (el.matches('.property-copy,.about-copy,.quickcheck-copy')) el.classList.add('reveal-left');
    else if (index % 4 === 0) el.classList.add('reveal-scale');
  });

  ['.benefit-grid', '.expertise-grid', '.hero-services', '.stats-grid', '.property-actions'].forEach(selector => {
    const grid = $(selector);
    if (!grid) return;
    grid.classList.add('motion-stagger');
    [...grid.children].forEach((child, index) => child.style.setProperty('--item-index', index));
  });

  const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -35px' })
    : null;

  [...revealItems, ...$$('.motion-stagger')].forEach(el => {
    el.style.setProperty('--delay', `${el.dataset.delay || 0}ms`);
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('in-view');
  });

  // Count the proof points once they become visible.
  const animateNumber = element => {
    const original = element.textContent.trim();
    const numeric = Number(original.replace(/[^0-9]/g, ''));
    if (!numeric || reduceMotion) return;
    const suffix = original.includes('%') ? '%' : original.includes('+') ? '+' : '';
    const usesThousands = original.includes('.') && numeric >= 1000;
    const start = performance.now();
    const duration = 1300;
    const frame = now => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numeric * eased);
      element.textContent = `${usesThousands ? current.toLocaleString('de-DE') : current}${suffix}`;
      if (progress < 1) requestAnimationFrame(frame);
      else element.textContent = original;
    };
    requestAnimationFrame(frame);
  };

  const stats = $$('.stats-grid strong');
  if ('IntersectionObserver' in window && stats.length) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      stats.forEach(animateNumber);
      observer.disconnect();
    }, { threshold: 0.45 });
    statsObserver.observe($('.stats-grid'));
  }

  // Subtle pointer parallax for the two visual anchors.
  if (!reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    $$('.hero-real-photo,.property-panel').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty('--mx', x.toFixed(3));
        card.style.setProperty('--my', y.toFixed(3));
        if (card.classList.contains('property-panel')) card.style.transform = `perspective(900px) rotateY(${x * 2.4}deg) rotateX(${-y * 2.4}deg) translateY(-5px)`;
      });
      card.addEventListener('pointerleave', () => {
        if (card.classList.contains('property-panel')) card.style.transform = '';
      });
    });
  }

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
    if (image.closest('.hero-real-photo')) image.closest('figure')?.remove();
    if (image.classList.contains('property-photo')) image.remove();
  }, { once: true }));

  const founderImg = $('.founder-image img');
  founderImg?.addEventListener('error', () => {
    const fallback = founderImg.dataset.fallback;
    if (fallback && founderImg.src !== fallback) founderImg.src = fallback;
  });

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
