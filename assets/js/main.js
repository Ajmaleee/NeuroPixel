import { TRANSLATIONS } from "./translations.js";

/* ==========================================================================
   NeuroPixel — Main Application Logic
   Language switching, mobile menu, content rendering, contact form.
   ========================================================================== */

const state = {
  lang: localStorage.getItem("np-lang") || "en",
};

const sel = (s) => document.querySelector(s);
const selAll = (s) => Array.from(document.querySelectorAll(s));

/* --- Helpers --- */
const t = (path) => {
  const parts = path.split(".");
  let obj = TRANSLATIONS[state.lang];
  for (const p of parts) {
    if (!obj || typeof obj[p] === "undefined") return undefined;
    obj = obj[p];
  }
  return obj;
};

const setAttrByI18n = () => {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ml" ? "ltr" : "ltr";

  // Elements with data-i18n
  selAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (value !== undefined) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = value;
      } else {
        el.textContent = value;
      }
    }
  });

  // Select options with data-i18n-opt
  selAll("option[data-i18n-opt]").forEach((el) => {
    const value = t(el.dataset.i18nOpt);
    if (value !== undefined) el.textContent = value;
  });

  // Lang toggle pressed state
  const toggle = sel("#lang-toggle");
  if (toggle) toggle.setAttribute("aria-pressed", state.lang === "ml");

  // Update WhatsApp hrefs with correct text per language
  updateWhatsAppLinks();

  localStorage.setItem("np-lang", state.lang);
};

const whatsappBase = "https://wa.me/919495050785";

const waText = (text) => `${whatsappBase}?text=${encodeURIComponent(text)}`;

const updateWhatsAppLinks = () => {
  const general = sel('a[href*="wa.me"][href*="getting"]');
  const website = sel('a[href*="wa.me"][href*="discuss"]');
  const pricing = sel('a[href*="wa.me"][href*="packages"]');

  if (state.lang === "ml") {
    if (general) general.href = waText("ഹായ് NeuroPixel, ഞാൻ എന്റെ ബിസിനസ്സിന് വെബ്‌സൈറ്റ് ആവശ്യമാണ്.");
    if (website) website.href = waText("ഹായ് NeuroPixel, ഞാൻ ഒരു ബിസിനസ് വെബ്‌സൈറ്റ് സംബന്ധിച്ച ചർച്ച നടത്താൻ ആഗ്രഹിക്കുന്നു.");
    if (pricing) pricing.href = waText("ഹായ് NeuroPixel, നിങ്ങളുടെ വെബ്‌സൈറ്റ് പാക്കേജുകൾ എന്നെ അറിയിക്കുക.");
  } else {
    if (general) general.href = waText("Hi NeuroPixel, I'm interested in getting a website for my business.");
    if (website) website.href = waText("Hi NeuroPixel, I'd like to discuss a business website.");
    if (pricing) pricing.href = waText("Hi NeuroPixel, I'd like to know about your website packages.");
  }
};

/* --- Content rendering --- */
const renderSection = (id, key, renderer) => {
  const container = sel(`#${id}`);
  const data = t(key);
  if (!container || !data) return;
  container.innerHTML = data.map(renderer).join("");
};

const renderWork = () => {
  const container = sel("#work-grid");
  const data = t("work.items");
  if (!container || !data) return;
  container.innerHTML = data.map((p, i) => {
    const conceptLabel = p.concept ? `<span class="work-label">${t(`work.concept`)}</span>` : "";
    const link = p.url
      ? `<a class="work-link" href="${p.url}" rel="noopener" data-i18n="work.view">View project<span aria-hidden="true"> →</span></a>`
      : `<span class="work-link" style="color:var(--color-text-muted);border-bottom-color:transparent;">${t("work.concept")}</span>`;
    return `
      <article class="work-card" style="${i % 2 === 0 ? "flex-direction: row-reverse;" : ""}">
        <div class="work-visual" style="order: ${i % 2 === 0 ? 2 : 1};">
          <img src="/assets/images/${p.image}" alt="${p.alt || p.title}" width="560" height="360" loading="lazy">
        </div>
        <div style="order: ${i % 2 === 0 ? 1 : 2}; display:flex; flex-direction:column; justify-content:center;">
          ${conceptLabel}
          <h3>${p.title}</h3>
          <div class="work-meta">${p.category} · ${p.type}</div>
          <p>${p.desc}</p>
          ${link}
        </div>
      </article>
    `;
  }).join("");
};

const renderServices = () => {
  const container = sel("#services-list");
  const data = t("services.items");
  if (!container || !data) return;
  container.innerHTML = data.map((s, i) => `
    <div class="service-row">
      <div class="service-number">${s.num}</div>
      <div class="service-content">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="service-who">${s.who}</div>
      </div>
      <div class="service-cta">
        <a class="service-link" href="${waText(`Hi NeuroPixel, I'd like to enquire about your ${s.title.toLowerCase()} service.`)}" rel="noopener">
          <span data-i18n="contact.form.submit">Send enquiry via WhatsApp</span><span aria-hidden="true"> →</span>
        </a>
      </div>
    </div>
  `).join("");
};

const renderWhy = () => {
  const container = sel("#why-list");
  const data = t("why.items");
  if (!container || !data) return;
  container.innerHTML = data.map((item) => `
    <div class="why-item">
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    </div>
  `).join("");
};

const renderProcess = () => {
  const container = sel("#process-timeline");
  const data = t("process.steps");
  if (!container || !data) return;
  container.innerHTML = data.map((step) => `
    <div class="process-step">
      <span class="step-number">${step.num}</span>
      <h3>${step.title}</h3>
      <p>${step.desc}</p>
    </div>
  `).join("");
};

const renderPricing = () => {
  const container = sel("#pricing-grid");
  const data = t("pricing.packages");
  if (!container || !data) return;
  container.innerHTML = data.map((pkg, i) => {
    const includes = pkg.includes.map((it) => `<li>${it}</li>`).join("");
    return `
      <div class="package${i === 1 ? " package--featured" : ""}">
        <h3 class="package-name">${pkg.name}</h3>
        <p class="package-desc">${pkg.desc}</p>
        <ul class="package-list">${includes}</ul>
        <a class="btn btn-primary package-cta" href="${waText(`Hi NeuroPixel, I'd like to know about your ${pkg.name} website package.`)}" rel="noopener">${pkg.cta}</a>
        <a class="package-email" href="mailto:ajmalsworkshop@gmail.com?subject=Pricing%20Enquiry%20-%20${pkg.name}%20Package" rel="noopener">Email about ${pkg.name}</a>
      </div>
    `;
  }).join("");
};

const renderAbout = () => {
  const container = sel("#about-list");
  const data = t("about.items");
  if (!container || !data) return;
  container.innerHTML = data.map((item) => `
    <div class="about-item">
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    </div>
  `).join("");
};

const renderFAQ = () => {
  const container = sel("#faq-list");
  const data = t("faq.items");
  if (!container || !data) return;
  container.innerHTML = data.map((item, i) => `
    <div class="faq-item">
      <button class="faq-button" id="faq-btn-${i}" aria-expanded="false" aria-controls="faq-panel-${i}">
        ${item.q}
        <svg class="faq-icon" viewBox="0 0 12 12" aria-hidden="true">
          <path d="m3 4 3 3 3-3" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
      <div class="faq-panel" id="faq-panel-${i}" hidden>
        <p>${item.a}</p>
      </div>
    </div>
  `).join("");
};

const renderAll = () => {
  renderWork();
  renderServices();
  renderWhy();
  renderProcess();
  renderPricing();
  renderAbout();
  renderFAQ();
  updateWhatsAppLinks();
};

/* --- Mobile menu --- */
const initMobileMenu = () => {
  const btn = sel("#menu-btn");
  const menu = sel("#mobile-menu");
  if (!btn || !menu) return;

  const closeMenu = () => {
    btn.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  };

  const openMenu = () => {
    btn.setAttribute("aria-expanded", "true");
    menu.hidden = false;
  };

  btn.addEventListener("click", () => {
    if (btn.getAttribute("aria-expanded") === "true") closeMenu();
    else openMenu();
  });

  selAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) closeMenu();
  });
};

/* --- FAQ accordion --- */
const initFAQ = () => {
  selAll(".faq-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const panel = sel(`#${btn.getAttribute("aria-controls")}`);
      const icon = btn.querySelector(".faq-icon");

      // Close all
      selAll(".faq-button").forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        sel(`#${b.getAttribute("aria-controls")}`).hidden = true;
      });

      if (!expanded) {
        btn.setAttribute("aria-expanded", "true");
        panel.hidden = false;
      }
    });
  });
};

/* --- Contact form --- */
const initForm = () => {
  const form = sel("#enquiry-form");
  if (!form) return;

  const showMessage = (el, text, type) => {
    el.textContent = text;
    el.className = `form-message visible ${type}`;
  };

  const clearErrors = () => {
    selAll(".field-error").forEach((e) => e.classList.remove("visible"));
    selAll("input, select, textarea").forEach((el) => {
      el.setAttribute("aria-invalid", "false");
    });
  };

  const showError = (id, msg) => {
    const el = sel(`#${id}`);
    if (el) {
      el.textContent = msg;
      el.classList.add("visible");
    }
    const input = sel(`#${id.replace("error-", "")}`);
    if (input) input.setAttribute("aria-invalid", "true");
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const formData = new FormData(form);
    const name = formData.get("name").toString().trim();
    const business = formData.get("business").toString().trim();
    const type = formData.get("type").toString();
    const message = formData.get("message").toString().trim();
    const contact = formData.get("contact").toString();

    let valid = true;
    if (!name) {
      showError("error-name", t("form.required") || "This field is required.");
      valid = false;
    }
    if (!message || message.length < 10) {
      showError("error-message", t("form.required") || "This field is required.");
      valid = false;
    }

    if (!valid) return;

    const lines = [
      `*New Website Enquiry — NeuroPixel*`,
      ``,
      `*Name:* ${name}`,
      business ? `*Business:* ${business}` : "",
      `*Service:* ${type}`,
      `*Preferred contact:* ${contact}`,
      ``,
      `*Message:*`,
      message,
      ``,
      `_Sent from neuroPixel website enquiry form._`,
    ].filter(Boolean).join("%0A");

    const waUrl = waText(lines);
    const output = sel("#form-message-output");

    try {
      window.open(waUrl, "_blank");
      showMessage(
        output,
        t("contact.form.success") || "Your enquiry is ready to send via WhatsApp. Please open WhatsApp and send the message.",
        "success"
      );
      form.reset();
    } catch (err) {
      showMessage(
        output,
        "Unable to open WhatsApp. Please copy your details and message us directly at 919495050785.",
        "error"
      );
    }
  });
};

/* --- Language toggle --- */
const initLangToggle = () => {
  const btn = sel("#lang-toggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    state.lang = state.lang === "en" ? "ml" : "en";
    setAttrByI18n();
    renderAll();
    initFAQ();
  });
};

/* --- Init --- */
document.addEventListener("DOMContentLoaded", () => {
  setAttrByI18n();
  renderAll();
  initMobileMenu();
  initFAQ();
  initForm();
  initLangToggle();
});
