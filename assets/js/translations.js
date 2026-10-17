const TRANSLATIONS = {
  en: {
    nav: {
      work: "Work",
      services: "Services",
      process: "Process",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      start: "Start a project",
      whatsapp: "WhatsApp",
      language: "Language",
    },
    hero: {
      eyebrow: "INDEPENDENT WEB STUDIO · PALAKKAD, KERALA",
      headline: "Good businesses deserve better websites.",
      subhead:
        "NeuroPixel designs and builds thoughtful, fast, modern websites that help businesses make a stronger impression online.",
      primary: "Let's build your website",
      secondary: "Explore our work",
      detail: "Thoughtful design. Clean development. Real-world usefulness.",
      location: "Palakkad, Kerala, India",
    },
    work: {
      heading: "Selected Work",
      subhead:
        "A curated sample of websites designed and built by NeuroPixel. Concept projects are labelled as such.",
      concept: "Concept project",
      view: "View project",
      items: [
        {
          title: "Malabar Spice House",
          category: "Restaurant",
          type: "Business website",
          desc:
            "A restaurant website with a full menu, opening hours, location map, and WhatsApp table-booking enquiry.",
          image: "mockup-restaurant.svg",
          alt: "Malabar Spice House restaurant website preview",
          concept: true,
        },
        {
          title: "Kerala Electronics",
          category: "Retail",
          type: "Product catalogue",
          desc:
            "A product catalogue for a local electronics store, with categories, specifications, and WhatsApp enquiry per product.",
          image: "mockup-retail.svg",
          alt: "Kerala Electronics product catalogue preview",
          concept: true,
        },
        {
          title: "Palakkad Dental Clinic",
          category: "Healthcare",
          type: "Professional services",
          desc:
            "A clean, trustworthy clinic website with services, patient information, appointment booking, and contact details.",
          image: "mockup-clinic.svg",
          alt: "Palakkad Dental Clinic website preview",
          concept: true,
        },
        {
          title: "The Roasted Bean",
          category: "Café",
          type: "Boutique website",
          desc:
            "A visually distinctive café website with seasonal menu, story section, and location details.",
          image: "mockup-cafe.svg",
          alt: "The Roasted Bean café website preview",
          concept: true,
        },
      ],
    },
    services: {
      heading: "Services",
      subhead:
        "Website design and development for businesses in Palakkad, Kerala, and beyond.",
      items: [
        {
          num: "01",
          title: "Business Websites",
          desc:
            "Professional websites that explain what your business does, showcase your services, and make it easy for customers to contact you.",
          who: "Shops, clinics, restaurants, and local service providers.",
        },
        {
          num: "02",
          title: "Landing Pages",
          desc:
            "Focused pages for specific services, campaigns, promotions, and business goals.",
          who: "Product launches, offers, and campaign landing pages.",
        },
        {
          num: "03",
          title: "Product Catalogues",
          desc:
            "Organized online catalogues that help customers browse your products and enquire about availability.",
          who: "Retailers, boutiques, and stores with product ranges.",
        },
        {
          num: "04",
          title: "Website Management",
          desc:
            "Keep your website updated with agreed content changes, maintenance, improvements, and ongoing technical care.",
          who: "Businesses that want a reliable website without managing it themselves.",
        },
        {
          num: "05",
          title: "Website Security",
          desc:
            "Practical website security measures, including secure configuration, HTTPS where applicable, dependency updates, and protection against common risks.",
          who: "Business websites that handle customer data and online enquiries.",
        },
        {
          num: "06",
          title: "Custom Web Development",
          desc:
            "Additional functionality and tailored improvements based on the actual needs of your business.",
          who: "Businesses needing features beyond standard website packages.",
        },
      ],
    },
    why: {
      heading: "A website should do more than exist.",
      subhead:
        "It should explain what you offer, make your business look credible, and give customers a clear next step.",
      items: [
        {
          title: "Design tailored to the business",
          desc:
            "Every website is designed around your business, your customers, and your goals.",
        },
        {
          title: "Direct communication",
          desc:
            "You work directly with the developer building your website, not an account manager.",
        },
        {
          title: "Mobile-first development",
          desc:
            "Websites are built for phones first, then desktops, so your customers have a good experience everywhere.",
        },
        {
          title: "Performance-conscious implementation",
          desc:
            "Lightweight code, optimized images, and fast-loading pages help your website rank and convert.",
        },
        {
          title: "Clear scope and pricing",
          desc:
            "You know what is included and what it costs before work begins. No hidden charges.",
        },
        {
          title: "Practical support after launch",
          desc:
            "Updates, maintenance, and security help are available once your website is live.",
        },
      ],
    },
    process: {
      heading: "Working Process",
      subhead:
        "A simple four-stage process from first conversation to a live website. Timelines depend on scope, content readiness, and revisions.",
      steps: [
        {
          num: "01",
          title: "Discover",
          desc:
            "Understand the business, audience, goals, content, and required features.",
        },
        {
          num: "02",
          title: "Design",
          desc:
            "Create a visual direction tailored to the business and its customers.",
        },
        {
          num: "03",
          title: "Build",
          desc:
            "Develop the website, implement functionality, and test it across screen sizes.",
        },
        {
          num: "04",
          title: "Launch",
          desc:
            "Publish the approved website, verify the deployment, and complete the agreed handover.",
        },
      ],
    },
    pricing: {
      heading: "Transparent Pricing",
      subhead:
        "Three packages for different stages of business growth. Exact prices depend on your project scope. Contact NeuroPixel for a clear quote.",
      note:
        "Pricing depends on your project scope. Contact NeuroPixel for a clear quote.",
      packages: [
        {
          name: "Essential",
          desc:
            "For businesses that need a professional online starting point.",
          includes: [
            "A compact business website",
            "Essential business information",
            "Services or product overview",
            "Mobile-responsive layout",
            "WhatsApp contact integration",
            "Basic on-page SEO",
            "Performance and accessibility checks",
          ],
          cta: "Enquire about Essential",
        },
        {
          name: "Professional",
          desc:
            "For businesses that need a more distinctive and detailed website.",
          includes: [
            "Custom visual direction",
            "Additional pages or sections as agreed",
            "Enhanced project-specific design",
            "Contact form where appropriate",
            "Expanded service or product information",
            "Technical SEO fundamentals",
            "Analytics integration if requested and correctly configured",
          ],
          cta: "Enquire about Professional",
        },
        {
          name: "Custom",
          desc:
            "For businesses that need more specialized functionality.",
          includes: [
            "Product catalogues",
            "Custom interactive features",
            "Additional integrations",
            "Content migration",
            "Specialized layouts",
            "Ongoing maintenance options",
            "More extensive technical requirements",
          ],
          cta: "Enquire about Custom",
        },
      ],
    },
    about: {
      heading: "Small studio. Serious attention to detail.",
      subhead:
        "NeuroPixel is an independent web development studio based in Palakkad, Kerala, focused on building thoughtful websites for businesses that want a stronger online presence.",
      items: [
        {
          title: "Direct working relationship",
          desc:
            "You work directly with the developer. No account managers, no handoffs to junior staff.",
        },
        {
          title: "Attention to the specific business",
          desc:
            "Every design and development decision is made for your business and your customers.",
        },
        {
          title: "Practical solutions",
          desc:
            "Usable, maintainable websites without unnecessary complexity.",
        },
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      subhead:
        "Common questions about working with NeuroPixel on your website project.",
      items: [
        {
          q: "What kinds of businesses do you work with?",
          a:
            "Local businesses of all kinds: shops, restaurants, cafés, clinics, retailers, professionals, and service providers.",
        },
        {
          q: "How much does a website cost?",
          a:
            "Pricing depends on the project scope. Essential, Professional, and Custom packages are available. Contact NeuroPixel for a clear quote.",
        },
        {
          q: "How long does a website take?",
          a:
            "Timelines depend on scope, content readiness, revisions, and project requirements. No guaranteed delivery dates.",
        },
        {
          q: "Will the website work on mobile?",
          a:
            "Yes. Every website is built mobile-first and tested across screen sizes.",
        },
        {
          q: "Can you update my existing website?",
          a:
            "Yes. Website management and maintenance services include agreed content changes and improvements.",
        },
        {
          q: "Can you create a product catalogue?",
          a:
            "Yes. Organized online catalogues help customers browse your products and enquire about availability.",
        },
        {
          q: "Do you provide website maintenance?",
          a:
            "Yes. Ongoing technical care, updates, and maintenance are available based on the agreed agreement.",
        },
        {
          q: "Can you help secure my website?",
          a:
            "Yes. Practical security measures including secure configuration, HTTPS where applicable, and protection against common risks.",
        },
        {
          q: "Will I own my website?",
          a:
            "Ownership of source code, domain, third-party assets, hosting, and ongoing services should be agreed upon before work begins.",
        },
        {
          q: "How do I get started?",
          a:
            "Send a WhatsApp message or fill in the contact form. Tell me about your business and what you need.",
        },
      ],
    },
    contact: {
      heading: "Have a business in mind? Let's build something good.",
      subhead:
        "Tell me a little about your business and what you need. We'll discuss a practical direction for your website.",
      whatsapp: "WhatsApp",
      email: "Email",
      location: "Palakkad, Kerala, India",
      form: {
        title: "Project Enquiry",
        name: "Your name",
        business: "Business name",
        type: "Type of website or service",
        message: "Brief project description",
        contact: "Preferred contact method",
        contact_options: ["WhatsApp", "Email"],
        submit: "Send enquiry via WhatsApp",
        emailAlt: "Or email directly",
        success:
          "Your enquiry is ready to send via WhatsApp. Please open WhatsApp and send the message.",
        error: "Please fill in the required fields correctly.",
        required: "This field is required.",
      },
    },
    footer: {
      brand: "NeuroPixel",
      desc:
        "Independent web design and development studio based in Palakkad, Kerala, India.",
      rights: "All rights reserved.",
      contact: "Contact",
      whatsapp: "WhatsApp",
      email: "Email",
    },
  },
  ml: {
    nav: {
      work: "പ്രവർത്തനങ്ങൾ",
      services: "സേവനങ്ങൾ",
      process: "പ്രക്രിയ",
      pricing: "നിരക്ക്",
      about: "കുറിച്ച്",
      contact: "ബന്ധപ്പെടുക",
      start: "പുതിയ പദ്ധതി തുടങ്ങുക",
      whatsapp: "WhatsApp",
      language: "ഭാഷ",
    },
    hero: {
      eyebrow: "സ്വതന്ത്ര വെബ് സ്റ്റുഡിയോ · പാലക്കാട്, കേരളം",
      headline: "നല്ല ബിസിനസ്സുകൾക്ക് മികച്ച വെബ്‌സൈറ്റുകൾ ആവശ്യമാണ്.",
      subhead:
        "നിങ്ങളുടെ ബിസിനസ്സിന് ഓൺലൈനിൽ ശക്തമായ സാന്നിധ്യം സൃഷ്ടിക്കാൻ NeuroPixel ചിന്താപരവും വേഗതയുള്ളതുമായ ആധുനിക വെബ്‌സൈറ്റുകൾ രൂപകൽപ്പന ചെയ്ത് നിർമ്മിക്കുന്നു.",
      primary: "നിങ്ങളുടെ വെബ്‌സൈറ്റ് നമുക്ക് നിർമ്മിക്കാം",
      secondary: "ഞാദers പ്രവർത്തനങ്ങൾ കാണുക",
      detail: "ചിന്താപരമായ രൂപകൽപ്പന. ശരിയായ വികസനം. യഥാർത്ഥ പ്രയോജനം.",
      location: "പാലക്കാട്, കേരളം, ഇന്ത്യ",
    },
    work: {
      heading: "തിരഞ്ഞെടുത്ത പ്രവർത്തനങ്ങൾ",
      subhead:
        "NeuroPixel രൂപകൽപ്പന ചെയ്ത് നിർമ്മിച്ച വെബ്‌സൈറ്റുകളുടെ ഒരു മാതൃക. ആശയ പദ്ധതികൾ അങ്ങനെ തന്നെ സൂചിപ്പിച്ചിരിക്കുന്നു.",
      concept: "ആശയ പദ്ധതി",
      view: "പദ്ധതി കാണുക",
      items: [
        {
          title: "Malabar Spice House",
          category: "റസ്റ്റുറന്റ്",
          type: "ബിസിനസ് വെബ്‌സൈറ്റ്",
          desc:
            "മെനു, തുറക്കുന്ന സമയം, ലൊക്കേഷൻ മാപ്പ്, WhatsApp ടേബിൾ ബുക്കിംഗ് അന്വേഷണം ഉള്ള റസ്റ്റുറന്റ് വെബ്‌സൈറ്റ്.",
          image: "mockup-restaurant.svg",
          alt: "Malabar Spice House റസ്റ്റുറന്റ് വെബ്‌സൈറ്റ് പ്രിവ്യൂ",
          concept: true,
        },
        {
          title: "Kerala Electronics",
          category: "റETAIL",
          type: "ഉൽപ്പന്ന കാറ്റലോഗ്",
          desc:
            "വിഭാഗങ്ങൾ, സ്പെസിഫിക്കേഷനുകൾ, ഓരോ ഉൽപ്പന്നത്തിനും WhatsApp അന്വേഷണം ഉള്ള ഇലക്ട്രോണിക് സ്റ്റോർ കാറ്റലോഗ്.",
          image: "mockup-retail.svg",
          alt: "Kerala Electronics ഉൽപ്പന്ന കാറ്റലോഗ് പ്രിവ്യൂ",
          concept: true,
        },
        {
          title: "Palakkad Dental Clinic",
          category: "ആരോഗ്യം",
          type: "പ്രൊഫഷണൽ സേവനം",
          desc:
            "സേവനങ്ങൾ, രോഗി വിവരങ്ങൾ, അപ്പോയിന്റ്മെന്റ് ബുക്കിംഗ്, ബന്ധpitzo വിവരങ്ങൾ ഉള്ള ക്ലിനിക് വെബ്‌സൈറ്റ്.",
          image: "mockup-clinic.svg",
          alt: "Palakkad Dental Clinic വെബ്‌സൈറ്റ് പ്രിവ്യൂ",
          concept: true,
        },
        {
          title: "The Roasted Bean",
          category: "കേഫേ",
          type: "ബുട്ടിഖ് വെബ്‌സൈറ്റ്",
          desc:
            "കാലിക മെനു, കഥ വിഭാഗം, ലൊക്കേഷൻ വിവരങ്ങൾ ഉള്ള ദൃശ്യദൃഷ്ടിക്ക് ആകർഷകമായ കേഫേ വെബ്‌സൈറ്റ്.",
          image: "mockup-cafe.svg",
          alt: "The Roasted Bean കേഫേ വെബ്‌സൈറ്റ് പ്രിവ്യൂ",
          concept: true,
        },
      ],
    },
    services: {
      heading: "സേവനങ്ങൾ",
      subhead:
        "പാലക്കാട്, കേരളത്തിലെ ബിസിനസ്സുകൾക്കായി വെബ്‌സൈറ്റ് രൂപകൽപ്പനയും വികസനവും.",
      items: [
        {
          num: "01",
          title: "ബിസിനസ് വെബ്‌സൈറ്റുകൾ",
          desc:
            "നിങ്ങളുടെ ബിസിനസ്സ് എന്ത് ചെയ്യുന്നു എന്ന് വിശദീകരിക്കുകയും, സേവനങ്ങൾ പ്രദർശിപ്പിക്കുകയും, ഉപഭോക്താക്കൾക്ക് ബന്ധപ്പെടാൻ എളുപ്പമാക്കുകയും ചെയ്യുന്ന പ്രോഫഷണൽ വെബ്‌സൈറ്റുകൾ.",
          who: "കടകൾ, ക്ലിനിക്കുകൾ, റെസ്റ്റുറന്റുകൾ, പ്രാദേശിക സേവന ദാതാക്കൾ.",
        },
        {
          num: "02",
          title: "ലാൻഡിംഗ് പേജുകൾ",
          desc:
            "പ്രത്യേക സേവനങ്ങൾ, കാമ്പെയ്‌നുകൾ, പ്രൊമോഷനുകൾ, ബിസിനസ് ലക്ഷ്യങ്ങൾ എന്നിവയ്ക്കായുള്ള ഏകാഗ്ര പേജുകൾ.",
          who: "ഉൽപ്പನ್ನ প্রচാരം, ഓഫറുകൾ, കാമ്പെയ്ൻ ലാൻഡിംഗ് പേജുകൾ.",
        },
        {
          num: "03",
          title: "ഉൽപ്പന്ന കാറ്റലോഗുകൾ",
          desc:
            "ഉപഭോക്താക്കൾക്ക് ഉൽപ്പന്നങ്ങൾ ബ്രൗസ് ചെയ്യാനും ലഭ്യതയെക്കുറിച്ച് അന്വേഷിക്കാനും സഹായിക്കുന്ന ക്രമീകരിച്ച ഓൺലൈൻ കാറ്റലോഗുകൾ.",
          who: "ഉൽപ്പന്ന ശ്രേണിയുള്ള റീട്ടെയ്‌ലർമാർ, ബுடികുകൾ, കടകൾ.",
        },
        {
          num: "04",
          title: "വെബ്‌സൈറ്റ് മാനേജ്‌മെന്റ്",
          desc:
            "ഒത്ത-Assent ഉള്ള ഉള്ളടക്ക മാറ്റങ്ങൾ, മെയിന്റനൻസ്, മെച്ചപ്പെടുത്തലുകൾ, നിരന്തര സാങ്കേതിക പരിചരണം എന്നിവയിലൂടെ വെബ്‌സൈറ്റ് അപ്‌ഡേറ്റാക്കി വെക്കാം.",
          who: "സ്വयं مال서를 ചെയ്യാതെ വിശ്വസനീയമായ വെബ്‌സൈറ്റ് ആഗ്രഹിക്കുന്ന ബിസിനസ്സുകൾ.",
        },
        {
          num: "05",
          title: "വെബ്‌സൈറ്റ് സുരക്ഷ",
          desc:
            "സുരക്ഷിതമായ കോൺഫിഗറേഷൻ, où അനുയോജ്യമെങ്കിൽ HTTPS, ഡിപെൻഡൻസി അപ്‌ഡേറ്റുകൾ, സാധാരണ അപകടങ്ങളിൽനിന്നുള്ള സംരക്ഷണം എന്നിവ ഉൾപ്പെടുത്തിയ പ്രായോഗിക വെബ്‌സൈറ്റ് സുരക്ഷാ നടപടികൾ.",
          who: "ഉപഭോക്താക്കളുടെ ഡാറ്റയും ഓൺലൈൻ അന്വേഷണങ്ങളും കൈകാര്യം ചെയ്യുന്ന ബിസിനസ് വെബ്‌സൈറ്റുകൾ.",
        },
        {
          num: "06",
          title: "കസ്റ്റം വെബ് വികസനം",
          desc:
            "നിങ്ങളുടെ ബിസിനസ്സിന്റെ യഥാർത്ഥ ആവശ്യങ്ങളെ അടിസ്ഥാനമാക്കിയുള്ള അധിക ചứcനകൾ, സമർപ്പിത മെച്ചപ്പെടുത്തലുകൾ.",
          who: "സ്റ്റാൻഡേർഡ് വെബ്‌സൈറ്റ് പാക്കേജുകൾക്ക് പുറത്തുള്ള ച��നകൾ ആവശ്യമുള്ള ബിസിനസ്സുകൾ.",
        },
      ],
    },
    why: {
      heading: "ഒരു വെബ്‌സൈറ്റ് നിലനിൽക്കുക മാത്രം മതി അല്ല.",
      subhead:
        "അത് നിങ്ങൾ നൽകുന്നതെന്തെന്ന് വിശദീകരിക്കണം, നിങ്ങളുടെ ബിസിനസ്സിന് വിശ്വാസ്യത നൽകണം, ഉപഭോക്താക്കൾക്ക് വ്യക്തമായ അടുത്ത ഘട്ടം നൽകണം.",
      items: [
        {
          title: "ബിസിനസ്സിന് അനുയോജ്യമായ രൂപകൽപ്പന",
          desc:
            "ഓരോ വെബ്‌സൈറ്റും നിങ്ങളുടെ ബിസിനസ്സിന്, ഉപഭോക്താക്കൾക്ക്, ലക്ഷ്യങ്ങൾക്ക് ചുറ്റും രൂപകൽപ്പന ചെയ്തിരിക്കുന്നു.",
        },
        {
          title: "നേരിട്ടുള്ള ബന്ധം",
          desc:
            "അക്കൗണ്ട് മാനേജർമാരല്ല, നിങ്ങളുടെ വെബ്‌സൈറ്റ് നിർമ്മിക്കുന്ന ഡെവലപ്പറുമായി നേരിട്ട് പ്രവർത്തിക്കാം.",
        },
        {
          title: "മൊബൈൽ-ഫസ്റ്റ് വികസനം",
          desc:
            "വെബ്‌സൈറ്റുകൾ ആദ്യം ഫോണുകൾക്കായി നിർമ്മിക്ക österreichische പിന്നെ ഡെസ്‌ക്‌ടോപ്പുകൾക്കായി, അപ്പോൾ എവിടെയും ഉപഭോക്താക്കൾക്ക് നല്ല അനുഭവം ലഭിക്കും.",
        },
        {
          title: "പെർഫോമൻസ്-conscious നടപ്പിലാക്കൽ",
          desc:
            "ലഘuserdata കോഡ്, ഒപ്റ്റിമൈസ് ചെയ്ത ചിത്രങ്ങൾ, വേഗത്തിൽ ലോഡ് ചെയ്യുന്ന പേജുകൾ നിങ്ങളുടെ വെബ്‌സൈറ്റിന് റാങ്കും കൺവേർഷനും നൽകാൻ സഹായിക്കും.",
        },
        {
          title: "വ്യക്തമായ സ്കോപ്പും നിരക്കും",
          desc:
            "പ്രവർത്തനം തുടങ്ങുന്നതിന് മുമ്പ് എന്താണ് ഉൾപ്പെട്ടിരിക്കുന്നതും എത്ര ചിലവ് വരും എന്ന് നിങ്ങൾക്ക് അറിയാം. രഹസ്യ ചിലവുകൾ ഇല്ല.",
        },
        {
          title: "ലോഞ്ച് കഴിഞ്ഞ് പ്രായോഗിക സഹായം",
          desc:
            "നിങ്ങളുടെ വെബ്‌സൈറ്റ് ലൈവ് ആയ ശേഷം അപ്‌ഡേറ്റുകൾ, മെയിന്റനൻസ്, സുരക്ഷാ സഹായം എന്നിവ ലഭ്യമാണ്.",
        },
      ],
    },
    process: {
      heading: "പ്രവർത്തന രീതി",
      subhead:
        "ആദ്യ സംഭാഷണത്തിൽ മുതൽ ലൈവ് വെബ്‌സൈറ്റ് വരെയുള്ള ലളിതമായ നാല് ഘട്ട രീതി. സ്കോപ്പ്, ഉള്ളടക്ക തയ്യാറെടുപ്പ്, മാറ്റങ്ങൾ എന്നിവയെ ആശ്രയിച്ചിരിക്കുന്നു കാല പരിധി.",
      steps: [
        {
          num: "01",
          title: "പഠനം (Discover)",
          desc:
            "ബിസിനസ്സ്, പ്രേക്ഷകർ, ലക്ഷ്യങ്ങൾ, ഉള്ളടക്കം, ആവശ്യമായ ച funciónകൾ മനസ്സിലാക്കാം.",
        },
        {
          num: "02",
          title: "രൂപകൽപ്പന (Design)",
          desc:
            "ബിസിനസ്സിന് അതിന്റെ ഉപഭോക്താക്കൾക്ക് അനുയോജ്യമായ ഒരു ദൃശ്യദിശ സൃഷ്ടിക്കാം.",
        },
        {
          num: "03",
          title: "നിർമ്മാണം (Build)",
          desc:
            "വെബ്‌സൈറ്റ് വികസിപ്പിക്കുക, funció നടപ്പിലാക്കുക, വിവിധ സ്‌ക്രീൻ വലിപ്പത്തിൽ പരിശോധിക്കുക.",
        },
        {
          num: "04",
          title: "ലോഞ്ച് (Launch)",
          desc:
            "അനുവദിക്കപ്പെട്ട വെബ്‌സൈറ്റ് പ്രസിദ്ധീകരിക്കുക, വിന്യാസം പരിശോധിക്കുക, ഒത്ത-Assent കൈമാറ്റം പൂർത്തിയാക്കുക.",
        },
      ],
    },
    pricing: {
      heading: "വ്യക്തമായ നിരക്ക്",
      subhead:
        "ബിസിനസ് വളര്ച്ചയുടെ വിവിധ ഘട്ടങ്ങൾക്കായി മൂന്ന് പാക്കേജുകൾ. കൃത്യമായ നിരക്ക് നിങ്ങളുടെ പദ്ധതിയുടെ സ്കോപ്പിനെ ആശ്രയിച്ചിരിക്കുന്നു. ഒരു വ്യക്തമായ quotation-ക്കായി NeuroPixel-യെ ബന്ധപ്പെടുക.",
      note:
        "നിരക്ക് നിങ്ങളുടെ പദ്ധതിയുടെ സ്കോപ്പിനെ ആശ്രയിച്ചിരിക്കുന്നു. ഒരു വ്യക്തമായ quotation-ക്കായി NeuroPixel-യെ ബന്ധപ്പെടുക.",
      packages: [
        {
          name: "Essential",
          desc:
            "ഒരു പ്രോഫഷണൽ ഓൺലাইন തുടക്ക പോയിന്റ് ആവശ്യമുള്ള ബിസിനസ്സുകൾക്ക്.",
          includes: [
            "ഒരു കോംപാക്റ്റ് ബിസിനസ് വെബ്‌സൈറ്റ്",
            "അവശ്യമായ ബിസിനസ് വിവരങ്ങൾ",
            "സേവനോ ഉൽപ്പന്ന അവലോകനം",
            "മൊബൈൽ-റെസ്‌പോൺസീവ് ലേഔട്ട്",
            "WhatsApp ബന്ധpunten സംയോജനം",
            "അടിസ്ഥാന ഓൺ-പേജ് SEO",
            "പെർഫോമൻസും ആക്സസിബിലിറ്റി പരിശോധനയും",
          ],
          cta: "Essential-നെക്കുറിച്ച് അന്വേഷിക്കുക",
        },
        {
          name: "Professional",
          desc:
            "കൂടുതൽ വ്യത്യസ്തവും വിശദവുമായ വെബ്‌സൈറ്റ് ആവശ്യമുള്ള ബിസിനസ്സുകൾക്ക്.",
          includes: [
            "കസ്റ്റം ദൃശ്യദിശ",
            "ഒപ്പിട്ടിട്ടുള്ള അധിക പേജുകളോ വിഭാഗങ്ങളോ",
            "പദ്ധതി-നിഷ്പക്ഷമായ മെച്ചപ്പെട്ട രൂപകൽപ്പന",
            "അനുയോജ്യമായിടത്ത് ബന്ധപെടൽ ഫോം",
            "വ്യാപ്തമായ സേവനോ ഉൽപ്പന്ന വിവരങ്ങൾ",
            "സാങ്കേതിക SEO അടിസ്ഥാനങ്ങൾ",
            "അഭ്യർത്ഥിച്ചിട്ട് കൃത്യമായി കോൺഫിഗർ ചെയ്തിട്ടുള്ള ആനലിറ്റിക് സംയോജനം",
          ],
          cta: "Professional-നെക്കുറിച്ച് അന്വേഷിക്കുക",
        },
        {
          name: "Custom",
          desc:
            "കൂടുതൽ പ്രത്യേകതയുള്ള ചứcനകൾ ആവശ്യമുള്ള ബിസിനസ്സുകൾക്ക്.",
          includes: [
            "ഉൽപ്പന്ന കാറ്റലോഗുകൾ",
            "കസ്റ്റം ഇന്ററാക്ടീവ് ച��നകൾ",
            "അധിക ഇന്റഗ്രേഷനുകൾ",
            "ഉള്ളടക്ക മൈഗ്രേഷൻ",
            "പ്രത്യേക ലേഔട്ടുകൾ",
            "നിരന്തര മെയിന്റനൻസ് ഓപ്ഷനുകൾ",
            "കൂടുതൽ വിപുലമായ സാങ്കേതിക ആവശ്യങ്ങൾ",
          ],
          cta: "Custom-നെക്കുറിച്ച് അന്വേഷിക്കുക",
        },
      ],
    },
    about: {
      heading: "ചെറിയ സ്റ്റുഡിയോ. വിശദാംശങ്ങളിലേക്ക് ഗൗരവമായ ശ്രദ്ധ.",
      subhead:
        "NeuroPixel ഒരു സ്വതന്ത്ര വെബ് വികസന സ്റ്റുഡിയോ ആണ്. പാലക്കാട്, കേരളത്തിൽ അധിഷ്ഠിതമായ ഇത്, ഓൺലൈൻ സാന്നിധ്യം ശക്തമാക്കാൻ ആഗ്രഹിക്കുന്ന ബിസിനസ്സുകൾക്കായി ചിന്താപൂര്‍വ്വമായ വെബ്‌സൈറ്റുകൾ നിർമ്മിക്കുന്നതിൽ ശ്രദ്ധാലു आहे.",
      items: [
        {
          title: "നേരിട്ടുള്ള പ്രവർത്തന ബന്ധം",
          desc:
            "നിങ്ങൾ ഡെവലപ്പറുമായി നേരിട്ട് പ്രവർത്തിക്കാം. അക്കൗണ്ട് മാനേജർമാർ ഇല്ല, കനिष्ठ ജീവനക്കാരിലേക്ക് കൈമാറ്റം ഇല്ല.",
        },
        {
          title: "പ്രത്യേക ബിസിനസ്സിലേക്ക് ശ്രദ്ധ",
          desc:
            "ഓരോ രൂപകൽപ്പന തീരുമാനവും വികസന തീരുമാനവും നിങ്ങളുടെ ബിസിനസ്സിനും ഉപഭോക്താക്കൾക്കുമായി നിർണ്ണയിക്കപ്പെടുന്നു.",
        },
        {
          title: "പ്രായോഗിക പരിഹാരങ്ങൾ",
          desc:
            "അനാവശ്യമായ സങ്കീർണ്ണതയില്ലാത്ത Upayogikkavunna maintainable വെബ്‌സൈറ്റുകൾ.",
        },
      ],
    },
    faq: {
      heading: "സാധാരണം ചോദിക്കുന്ന ചോദ്യങ്ങൾ",
      subhead:
        "NeuroPixel- உடன் നിങ്ങളുടെ വെബ്‌സൈറ്റ് പദ്ധതിയെക്കുറിച്ചുള്ള സാധാരണ ചോദ്യങ്ങൾ.",
      items: [
        {
          q: "ഏത പ്രാദേശിക ബിസിനസ്സുകൾക്ക് നിങ്ങൾ പ്രവർത്തിക്കും?",
          a:
            "എല്ല പ്രാദേശിക ബിസിനസ്സുകൾ: കടകൾ, റെസ്റ്റുറന്റുകൾ, കഫേകൾ, ക്ലിനിക്കുകൾ, റീട്ടെയ്‌ലർമാർ, പ്രൊഫഷണലുകൾ, സേവന ദാതാക്കൾ.",
        },
        {
          q: "ഒരു വെബ്‌സൈറ്റിന് എത്ര ചിലവ്?",
          a:
            "നിരക്ക് പദ്ധതിയുടെ സ്കോപ്പിനെ ആശ്രയിച്ചിരിക്കുന്നു. Essential, Professional, Custom പാക്കേജുകൾ ലഭ്യമാണ്. ഒരു വ്യക്തമായ quotation-ക്കായി NeuroPixel-യെ ബന്ധപ്പെടുക.",
        },
        {
          q: "ഒരു വെബ്‌സൈറ്റിന് എത്ര സമയം?",
          a:
            "സമയം സ്കോപ്പ്, ഉള്ളടക്ക തയ്യാറെടുപ്പ്, മാറ്റങ്ങൾ, പദ്ധതി ആവശ്യങ്ങൾ എന്നിവയെ ആശ്രയിച്ചിരിക്കുന്നു. ഉറപ്പുനൽകാത്ത കൈമാറ്റ തീയതികൾ ഇല്ല.",
        },
        {
          q: "വെബ്‌സൈറ്റ് മൊബൈലിൽ പ്രവർത്തിക്കുമോ?",
          a:
            "അതെ. ഓരോ വെബ്‌സൈറ്റും മൊബൈൽ-ഫസ്റ്റ് ആയി നിർമ്മിക്കുകയും വിവിധ സ്‌ക്രീൻ വലിപ്പത്തിൽ പരിശോധിക്കുകയും ചെയ്യുന്നു.",
        },
        {
          q: "എന്റെ നിലവിലുള്ള വെബ്‌സൈറ്റ് അപ്‌ഡേറ്റ് ചെയ്യാൻ കഴിയുമോ?",
          a:
            "അതെ. വെബ്‌സൈറ്റ് മാനേജ്‌മെന്റ്, മെയിന്റനൻസ് സേവനങ്ങൾ ഒത്ത-Assent ഉള്ള ഉള്ളടക്ക മാറ്റങ്ങളും മെച്ചപ്പെടുത്തലുകളും ഉൾപ്പെടുന്നു.",
        },
        {
          q: "ഉൽപ്പന്ന കാറ്റലോഗ് സൃഷ്ടിക്കാൻ കഴിയുമോ?",
          a:
            "അതെ. ക്രമീകരിച്ച ഓൺലൈൻ കാറ്റലോഗുകൾ ഉപഭോക്താക്കൾക്ക് ഉൽപ്പന്നങ്ങൾ ബ്രൗസ് ചെയ്യാനും ലഭ്യതയെക്കുറിച്ച് അന്വേഷിക്കാനും സഹായിക്കുന്നു.",
        },
        {
          q: "വെബ്‌സൈറ്റ് മെയിന്റനൻസ് നൽകുന്നു?",
          a:
            "അതെ. നിരന്തര സാങ്കേതിക പരിചരണം, അപ്‌ഡേറ്റുകൾ, മെയിന്റനൻസ് ഒത്ത-Assent കരാറിൻ ಕೆಳಗೆ ലഭ്യമാണ്.",
        },
        {
          q: "എന്റെ വെബ്‌സൈറ്റ് സുരക്ഷിതമാക്കാൻ സഹായിക്കാൻ കഴിയുമോ?",
          a:
            "അതെ. സുരക്ഷിതമായ കോൺഫിഗറേഷൻ, gdzie അനുയോജ്യമെങ്കിൽ HTTPS, സാധാരണ അപകടങ്ങളിൽനിന്നുള്ള സംരക്ഷണം എന്നിവ ഉൾപ്പെടുന്ന പ്രായോഗിക സുരക്ഷാ നടപടികൾ.",
        },
        {
          q: "എന്റെ വെബ്‌സൈറ്റ് എന്‍്റെ സ്വന്തമായിരിക്കും?",
          a:
            "സോഴ്സ് കോഡ്, ഡൊമൈൻ, മൂന്നാം കടം assets, ഹോസ്റ്റിംഗ്, നിരന്തര സേവനങ്ങൾ എന്നിവയുടെ ഉടമസ്ഥത പ്രവർത്തനം തുടങ്ങുന്നതിന് മുമ്പ് ഒത്ത-Assent ചെയ്യേണ്ടതാണ്.",
        },
        {
          q: "എങ്ങനെ തുടങ്ങാം?",
          a:
            "WhatsApp സന്ദേശം അയക്കുക അല്ലെങ്കിൽ ബന്ധപെടൽ ഫോം പൂര്ത്തിയാക്കുക. നിങ്ങളുടെ ബിസിനസ്സ് കുറിച്ച് എന്ത് ആവശ്യമെന്ന് അറിയിക്കുക.",
        },
      ],
    },
    contact: {
      heading: "ഒരു ബിസിനസ്സ് മനസ്സിലുണ്ട്? ഒന്നuppert സൃഷ്ടിക്കാം.",
      subhead:
        "നിങ്ങളുടെ ബിസിനസ്സ് കുറിച്ചും ആവശ്യത്തിനെ കുറിച്ചും കുറച്ച് പറയുക. നമ്മൾ ഒരു പ്രായോഗിക ദിശ ചർച്ച ചെയ്യും.",
      whatsapp: "WhatsApp",
      email: "Email",
      location: "പാലക്കാട്, കേരളം, ഇന്ത്യ",
      form: {
        title: "പദ്ധതി അന്വേഷണം",
        name: "നിങ്ങളുടെ പേര്",
        business: "ബിസിനസ് പേര്",
        type: "വെബ്‌സൈറ്റ് അല്ലെങ്കിൽ സേവനത്തിന്റെ തരം",
        message: "ചുരുക്കമായ പദ്ധതി വിശദീകരണം",
        contact: "ഇഷ്ടപ്പെട്ട ബന്ധപെടൽ രീതി",
        contact_options: ["WhatsApp", "Email"],
        submit: "WhatsApp വഴി അന്വേഷണം അയക്കുക",
        emailAlt: "അല്ലെങ്കിൽ ഇമെയിലിലൂടെ നേരിട്ട്",
        success: "നിങ്ങളുടെ അന്വേഷണം WhatsApp വഴി അയക്കാൻ തയ്യാറാണ്. WhatsApp തുറന്ന് സന്ദേശം അയക്കുക.",
        error: "അവശ്യമായ മൈദാനുകൾ കൃത്യമായി പൂര്ത്തിയാക്കുക.",
        required: "ഈ മൈദാനം ആവശ്യമാണ്.",
      },
    },
    footer: {
      brand: "NeuroPixel",
      desc: "പാലക്കാട്, കേരളം, ഇന്ത്യയിൽ അധിഷ്ഠിതമായ സ്വതന്ത്ര വെബ് രൂപകൽപ്പനയും വികസനവുംയ്ക്കുന്ന സ്റ്റുഡിയോ.",
      rights: "എല്ലാവക അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.",
      contact: "ബന്ധപ്പെടുക",
      whatsapp: "WhatsApp",
      email: "Email",
    },
  },
};

export { TRANSLATIONS };
