const translations = {
  en: {
    nav_work: "WORK",
    nav_about: "ABOUT",
    nav_experience: "EXPERIENCE",
    nav_contact: "CONTACT",
    hero_eyebrow: "Creative Visual & Graphic Designer",
    hero_body: "I create flexible visual systems for social media, campaigns, and digital content.",
    hero_cta: "VIEW SELECTED WORK",
    download_cv: "DOWNLOAD CV ↘",
    availability: "OPEN FOR FREELANCE & PROJECT COLLABORATION",
    tagline: "LET'S VISUALIZE YOUR IMAGINATION.",
    work_title: "PROJECTS<br>THAT SPEAK.",
    work_desc: "Selected projects across travel, beauty, marketing, and educational content.",
    view_project: "VIEW PROJECT",
    close_project: "CLOSE PROJECT",
    project_overview: "PROJECT OVERVIEW",

    azka_category: "Social Media & Campaign Design",
    azka_intro: "Visual content developed for an Umrah travel brand, focused on clear promotional communication, campaign materials, and consistent social media visuals.",
    azka_overview: "During this project, I worked on visual materials for social media and campaign needs. The focus was on clean hierarchy, easy-to-scan content, and visuals that can adapt to different promotional messages.",

    skin_category: "Social Media & Content Design",
    skin_intro: "Social media and promotional content for a beauty-oriented brand with a cleaner and more polished visual direction.",
    skin_overview: "The visual approach focused on keeping promotional information easy to understand while maintaining a clean, beauty-oriented look across content.",

    waseela_category: "Marketing & Campaign Design",
    waseela_intro: "Flexible campaign and marketing visuals created for digital communication needs and client-specific visual direction.",
    waseela_overview: "I created adaptable marketing visuals that could follow different campaign directions while still remaining clear, structured, and easy for audiences to read.",

    rq_category: "Content Design & Short Video",
    rq_intro: "Ongoing content creation covering graphic design and short-form video for educational and institutional communication.",
    rq_overview: "The work combines recurring social content, event communication, and short-form media while adapting the visual tone to institutional needs.",

    about_title: "I DESIGN TO<br>MAKE IDEAS<br>EASIER TO SEE.",
    about_body: "I'm Malik, a graphic designer focused on social media and content design. I like clean layouts, structured frames, and flexible visual systems that adapt to each client's needs.",
    portrait_note: "PORTRAIT PLACEHOLDER — READY TO REPLACE",

    contact_title: "LET'S<br>WORK<br>TOGETHER.",
    contact_body: "Have a project in mind? Let's turn your ideas into clear, engaging visuals."
  },

  id: {
    nav_work: "KARYA",
    nav_about: "TENTANG",
    nav_experience: "PENGALAMAN",
    nav_contact: "KONTAK",
    hero_eyebrow: "Creative Visual & Graphic Designer",
    hero_body: "Saya membuat sistem visual yang fleksibel untuk kebutuhan social media, campaign, dan digital content.",
    hero_cta: "LIHAT KARYA PILIHAN",
    download_cv: "UNDUH CV ↘",
    availability: "TERBUKA UNTUK FREELANCE & KOLABORASI PROJECT",
    tagline: "LET'S VISUALIZE YOUR IMAGINATION.",
    work_title: "PROJECT<br>THAT SPEAK.",
    work_desc: "Pilihan project dari bidang travel, beauty, marketing, dan konten edukasi.",
    view_project: "LIHAT PROJECT",
    close_project: "TUTUP PROJECT",
    project_overview: "RINGKASAN PROJECT",

    azka_category: "Social Media & Campaign Design",
    azka_intro: "Konten visual untuk brand travel umrah dengan fokus pada komunikasi promosi yang jelas, materi campaign, dan konsistensi visual social media.",
    azka_overview: "Dalam project ini saya mengerjakan materi visual untuk kebutuhan social media dan campaign. Fokusnya adalah hierarki yang rapi, konten yang mudah dipindai, dan visual yang dapat menyesuaikan berbagai pesan promosi.",

    skin_category: "Social Media & Content Design",
    skin_intro: "Konten social media dan promosi untuk brand beauty dengan pendekatan visual yang bersih dan lebih polished.",
    skin_overview: "Pendekatan visual berfokus pada informasi promosi yang mudah dipahami sambil tetap mempertahankan tampilan clean dan beauty-oriented di berbagai konten.",

    waseela_category: "Marketing & Campaign Design",
    waseela_intro: "Visual marketing dan campaign yang fleksibel untuk kebutuhan komunikasi digital dan arah visual yang menyesuaikan client.",
    waseela_overview: "Saya membuat visual marketing yang dapat menyesuaikan berbagai arah campaign dengan tetap menjaga struktur, keterbacaan, dan kejelasan pesan.",

    rq_category: "Content Design & Short Video",
    rq_intro: "Pembuatan konten berkelanjutan yang mencakup graphic design dan short-form video untuk komunikasi edukasi dan institusi.",
    rq_overview: "Pekerjaan mencakup konten social media rutin, komunikasi acara, dan media short-form dengan visual yang menyesuaikan kebutuhan institusi.",

    about_title: "SAYA MENDESAIN<br>AGAR IDE<br>LEBIH MUDAH DILIHAT.",
    about_body: "Saya Malik, graphic designer yang fokus pada social media dan content design. Saya menyukai layout yang bersih, frame yang terstruktur, dan sistem visual fleksibel yang menyesuaikan kebutuhan setiap client.",
    portrait_note: "PLACEHOLDER FOTO — SIAP DIGANTI",

    contact_title: "LET'S<br>WORK<br>TOGETHER.",
    contact_body: "Punya project yang ingin diwujudkan? Mari ubah idemu menjadi visual yang jelas dan menarik."
  }
};

const root = document.documentElement;
const body = document.body;
const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.en;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key] !== undefined) {
      node.innerHTML = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

/* Mobile menu */
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const open = !menuToggle.classList.contains("is-active");

    menuToggle.classList.toggle("is-active", open);
    mobileMenu.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
    body.classList.toggle("menu-open", open);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("is-active");
      mobileMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");
      body.classList.remove("menu-open");
    });
  });
}

/* Project expand/collapse */
const projectCards = document.querySelectorAll(".project-card");

function setProjectState(card, shouldOpen) {
  const buttons = card.querySelectorAll(".project-expand, .project-visual");
  const detail = card.querySelector(".project-detail");

  card.classList.toggle("is-open", shouldOpen);

  buttons.forEach((button) => {
    button.setAttribute("aria-expanded", String(shouldOpen));
  });

  if (detail) {
    detail.setAttribute("aria-hidden", String(!shouldOpen));
  }

  const expandIcon = card.querySelector(".expand-icon");
  if (expandIcon) {
    expandIcon.textContent = shouldOpen ? "×" : "+";
  }
}

projectCards.forEach((card) => {
  const triggers = card.querySelectorAll(".project-expand, .project-visual");
  const close = card.querySelector(".project-close");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const willOpen = !card.classList.contains("is-open");

      projectCards.forEach((otherCard) => {
        if (otherCard !== card) setProjectState(otherCard, false);
      });

      setProjectState(card, willOpen);

      if (willOpen) {
        setTimeout(() => {
          const y = card.getBoundingClientRect().top + window.scrollY - 88;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    });
  });

  if (close) {
    close.addEventListener("click", () => {
      setProjectState(card, false);

      const y = card.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }
});

/* Reveal on scroll */
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("is-visible"));
}

/* Light parallax */
const parallaxOrbs = document.querySelectorAll(".gradient-orb");
let ticking = false;

function updateParallax() {
  const scrollY = window.scrollY;

  parallaxOrbs.forEach((orb, index) => {
    const speed = index === 0 ? 0.045 : 0.025;
    orb.style.translate = `0 ${scrollY * speed}px`;
  });

  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  },
  { passive: true }
);

/* Default project details hidden for accessibility */
projectCards.forEach((card) => setProjectState(card, false));

/* Default language */
setLanguage("en");
