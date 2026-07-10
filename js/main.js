/* =====================================================================
   MARGIN & SPINE - main.js
   Lightweight vanilla JS, no libraries.
   Handles: header/scroll progress, scrollspy nav, mobile menu,
   scroll reveals, animated counters, hero book tilt,
   and the inquiry form.
   ===================================================================== */

(function(){
  'use strict';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- header, scroll progress, scrollspy ---- */
  var header = document.getElementById('siteHeader'), progress = document.getElementById('progress');
  function onScroll(){
    var y = window.scrollY || document.documentElement.scrollTop;
    header.classList.toggle('scrolled', y > 24);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive:true }); onScroll();

  var navItems = document.querySelectorAll('.navlinks a.nav-item');
  var spyTargets = [];
  navItems.forEach(function(a){
    var id = a.getAttribute('href');
    if(id && id.charAt(0) === '#'){ var el = document.querySelector(id); if(el) spyTargets.push({ link:a, el:el }); }
  });
  var spy = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        navItems.forEach(function(a){ a.classList.remove('active'); });
        var hit = spyTargets.find(function(t){ return t.el === en.target; });
        if(hit) hit.link.classList.add('active');
      }
    });
  }, { rootMargin:'-40% 0px -55% 0px' });
  spyTargets.forEach(function(t){ spy.observe(t.el); });

  /* ---- mobile menu ---- */
  var toggle = document.getElementById('menuToggle'), navlinks = document.getElementById('navlinks');
  toggle.addEventListener('click', function(){
    var open = navlinks.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  navlinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      navlinks.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
    });
  });

  /* ---- reveal on scroll + counters + section animations ---- */
  function runCounters(scope){
    (scope.querySelectorAll ? scope.querySelectorAll('.count') : []).forEach(function(el){
      if(el.dataset.done) return; el.dataset.done = '1';
      var to = parseInt(el.dataset.to, 10) || 0;
      if(reduceMotion){ el.textContent = to; return; }
      var dur = 1400, start = performance.now();
      (function tick(now){
        var t = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(to * (1 - Math.pow(1 - t, 3)));
        if(t < 1) requestAnimationFrame(tick);
      })(start);
    });
  }
  var reveals = document.querySelectorAll('.reveal');
  if(reduceMotion){
    reveals.forEach(function(el){ el.classList.add('in'); }); runCounters(document);
  }else{
    var ro = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('in'); runCounters(en.target); ro.unobserve(en.target); }
      });
    }, { threshold:0.12, rootMargin:'0px 0px -40px 0px' });
    reveals.forEach(function(el){ ro.observe(el); });
    runCounters(document.querySelector('.hero') || document);
  }

  /* ---- hero book tilt ---- */
  var book = document.getElementById('heroBook');
  if(book && !reduceMotion && window.matchMedia('(pointer:fine)').matches){
    var stage = book.closest('.hero-stage');
    stage.addEventListener('pointermove', function(e){
      var r = stage.getBoundingClientRect();
      var dx = (e.clientX - r.left) / r.width - .5, dy = (e.clientY - r.top) / r.height - .5;
      book.style.transform = 'rotateX(' + (7 - dy*9) + 'deg) rotateY(' + (-30 + dx*14) + 'deg)';
    });
    stage.addEventListener('pointerleave', function(){ book.style.transform = 'rotateX(7deg) rotateY(-30deg)'; });
  }

  /* ---- inquiry form ----
     FORM BACKEND: no code change needed here.
     - If the <form> in index.html has an action attribute (e.g. a
       Formspree endpoint) or data-netlify="true", this handler only
       validates and then lets the browser submit for real.
     - With no backend configured, it shows the local success message
       so the site still feels complete while in preview. */
  var form = document.getElementById('inquiryForm'), success = document.getElementById('formSuccess'), formCard = document.getElementById('formCard');
  if(form){
    form.addEventListener('submit', function(e){
      var name = document.getElementById('name'), email = document.getElementById('email');
      if(!name.value.trim() || !email.value.trim() || !email.checkValidity()){
        e.preventDefault();
        var bad = !name.value.trim() ? name : email;
        bad.focus(); bad.style.borderBottomColor = '#9c4a3c'; return;
      }
      var hasBackend = form.getAttribute('action') || form.hasAttribute('data-netlify');
      if(hasBackend) return; /* valid + backend configured -> real submit */
      e.preventDefault();    /* demo mode: local success message only */
      formCard.style.display = 'none';
      success.classList.add('show');
      success.scrollIntoView({ behavior:'smooth', block:'center' });
    });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
