/* ==========================================================================
   NEUROPIXEL — Main JS
   Mobile menu, FAQ accordion, contact form → WhatsApp
   ========================================================================== */

(function () {
  'use strict';

  var WA_BASE = 'https://wa.me/919495050785';

  function waLink(text) {
    return WA_BASE + '?text=' + encodeURIComponent(text);
  }

  /* -------------------------------------------------------
     MOBILE MENU
     ------------------------------------------------------- */
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  function openMenu() {
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close menu');
    mobileMenu.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    mobileMenu.hidden = true;
    document.body.style.overflow = '';
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      if (menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on nav link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !mobileMenu.hidden) {
        closeMenu();
        menuToggle.focus();
      }
    });

    // Close on resize to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024 && !mobileMenu.hidden) {
        closeMenu();
      }
    });
  }

  /* -------------------------------------------------------
     FAQ ACCORDION
     ------------------------------------------------------- */
  document.querySelectorAll('.faq-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var panelId = btn.getAttribute('aria-controls');
      var panel = document.getElementById(panelId);

      // Close all
      document.querySelectorAll('.faq-trigger').forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        var p = document.getElementById(b.getAttribute('aria-controls'));
        if (p) p.hidden = true;
      });

      // Open if wasn't open
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
      }
    });
  });

  /* -------------------------------------------------------
     CONTACT FORM → WHATSAPP
     ------------------------------------------------------- */
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');

    function setError(id, msg, inputId) {
      var el = document.getElementById(id);
      if (el) el.textContent = msg || '';
      var input = inputId ? document.getElementById(inputId) : null;
      if (input) {
        if (msg) input.setAttribute('aria-invalid', 'true');
        else input.removeAttribute('aria-invalid');
      }
    }

    function clearErrors() {
      setError('err-name', '', 'cf-name');
      setError('err-message', '', 'cf-message');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      var name = document.getElementById('cf-name').value.trim();
      var business = document.getElementById('cf-business').value.trim();
      var type = document.getElementById('cf-type').value;
      var message = document.getElementById('cf-message').value.trim();
      var contactEl = form.querySelector('input[name="contact"]:checked');
      var contact = contactEl ? contactEl.value : 'whatsapp';

      var valid = true;

      if (!name) {
        setError('err-name', 'Please enter your name.', 'cf-name');
        valid = false;
      }
      if (message.length < 10) {
        setError('err-message', 'Please provide at least 10 characters describing your project.', 'cf-message');
        valid = false;
      }

      if (!valid) {
        // Focus first error
        if (!name) document.getElementById('cf-name').focus();
        else document.getElementById('cf-message').focus();
        return;
      }

      // Build message
      var lines = [
        '*Website Enquiry — NeuroPixel*',
        '',
        'Name: ' + name,
      ];
      if (business) lines.push('Business: ' + business);
      lines.push('Service: ' + type);
      lines.push('Preferred contact: ' + contact);
      lines.push('');
      lines.push('Message:');
      lines.push(message);

      var url = waLink(lines.join('\n'));

      try {
        var win = window.open(url, '_blank', 'noopener');
        if (!win) throw new Error('popup blocked');

        status.textContent = 'Your enquiry is ready in WhatsApp. Please press Send in WhatsApp to complete your enquiry. Your form details are preserved below if you need to edit and try again.';
        status.className = 'form-status visible';

        // Do NOT reset the form — preserve user data
      } catch (err) {
        status.textContent = 'Unable to open WhatsApp. Please email ajmalsworkshop@gmail.com directly, or call +91 94950 50785.';
        status.className = 'form-status visible';
      }
    });
  }

  /* -------------------------------------------------------
     SMOOTH SCROLL OFFSET for sticky header
     ------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      var header = document.querySelector('.site-header');
      var offset = header ? header.offsetHeight + 16 : 80;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
      // Update URL without jump
      history.pushState(null, '', targetId);
    });
  });

})();
