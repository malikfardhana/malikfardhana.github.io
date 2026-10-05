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

    work_title: "PROJECTS<br>IN MOTION.",

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

    work_title: "PROJECT<br>IN MOTION.",

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




const projectCards = Array.from(document.querySelectorAll(".project-card"));
const projectDetails = Array.from(document.querySelectorAll(".carousel-project-detail"));

function getProjectDetail(card) {
  const trigger = card.querySelector("[aria-controls]");
  if (!trigger) return null;
  return document.getElementById(trigger.getAttribute("aria-controls"));
}

function setProjectState(card, shouldOpen) {
  const detail = getProjectDetail(card);
  const buttons = card.querySelectorAll(".project-expand, .project-visual");

  card.classList.toggle("is-open", shouldOpen);

  buttons.forEach((button) => {
    button.setAttribute("aria-expanded", String(shouldOpen));
  });

  const expandIcon = card.querySelector(".expand-icon");
  if (expandIcon) {
    expandIcon.textContent = shouldOpen ? "×" : "+";
  }

  if (detail) {
    detail.classList.toggle("is-open", shouldOpen);
    detail.setAttribute("aria-hidden", String(!shouldOpen));
  }
}

function closeAllProjects(exceptCard = null) {
  projectCards.forEach((card) => {
    if (card !== exceptCard) {
      setProjectState(card, false);
    }
  });
}

projectCards.forEach((card) => {
  const triggers = card.querySelectorAll(".project-expand, .project-visual");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const willOpen = !card.classList.contains("is-open");

      closeAllProjects(card);
      setProjectState(card, willOpen);

      if (willOpen) {
        const detail = getProjectDetail(card);

        setTimeout(() => {
          if (!detail) return;
          const y = detail.getBoundingClientRect().top + window.scrollY - 92;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 90);
      }
    });
  });
});

projectDetails.forEach((detail) => {
  detail.setAttribute("aria-hidden", "true");

  const close = detail.querySelector(".project-close");
  if (!close) return;

  close.addEventListener("click", () => {
    const project = detail.dataset.project;
    const card = document.querySelector(`.project-card[data-project="${project}"]`);

    if (!card) return;

    setProjectState(card, false);

    setTimeout(() => {
      const y = card.getBoundingClientRect().top + window.scrollY - 92;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 40);
  });
});

projectCards.forEach((card) => setProjectState(card, false));

const projectTrack = document.querySelector(".project-carousel-track");
const projectDots = Array.from(document.querySelectorAll(".project-dot"));
const projectCounter = document.querySelector(".project-carousel-counter");
const projectPrev = document.querySelector(".project-prev");
const projectNext = document.querySelector(".project-next");

let activeProjectIndex = 0;
let projectScrollTimer = null;

function updateProjectCarouselUI(index) {
  activeProjectIndex = Math.max(0, Math.min(projectCards.length - 1, index));

  projectDots.forEach((dot, i) => {
    dot.classList.toggle("is-active", i === activeProjectIndex);
    dot.setAttribute("aria-current", i === activeProjectIndex ? "true" : "false");
  });

  if (projectCounter) {
    const current = String(activeProjectIndex + 1).padStart(2, "0");
    const total = String(projectCards.length).padStart(2, "0");
    projectCounter.textContent = `${current} / ${total}`;
  }
}

function goToProject(index) {
  if (!projectTrack || !projectCards.length) return;

  const targetIndex = Math.max(0, Math.min(projectCards.length - 1, index));
  const card = projectCards[targetIndex];

  projectTrack.scrollTo({
    left: card.offsetLeft - projectTrack.offsetLeft,
    behavior: "smooth"
  });

  updateProjectCarouselUI(targetIndex);
}

if (projectTrack && projectCards.length) {
  projectPrev?.addEventListener("click", () => {
    goToProject(activeProjectIndex - 1);
  });

  projectNext?.addEventListener("click", () => {
    goToProject(activeProjectIndex + 1);
  });

  projectDots.forEach((dot, index) => {
    dot.addEventListener("click", () => goToProject(index));
  });

  let projectScrollTicking = false;

  function syncProjectCarouselFromScroll() {
    const maxScroll = Math.max(
      1,
      projectTrack.scrollWidth - projectTrack.clientWidth
    );

    const progress = Math.min(
      1,
      Math.max(0, projectTrack.scrollLeft / maxScroll)
    );

    document.documentElement.style.setProperty(
      "--project-scroll-progress",
      String(progress)
    );

    const trackLeft = projectTrack.getBoundingClientRect().left;
    let nearestIndex = 0;
    let nearestDistance = Infinity;

    projectCards.forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().left - trackLeft
      );

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    updateProjectCarouselUI(nearestIndex);
    projectScrollTicking = false;
  }

  projectTrack.addEventListener(
    "scroll",
    () => {
      if (!projectScrollTicking) {
        projectScrollTicking = true;
        requestAnimationFrame(syncProjectCarouselFromScroll);
      }
    },
    { passive: true }
  );

  let pointerDown = false;
  let pointerStartX = 0;
  let pointerStartScroll = 0;
  let pointerMoved = false;

  projectTrack.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") return;
    if (event.target.closest("button, a")) return;

    pointerDown = true;
    pointerMoved = false;
    pointerStartX = event.clientX;
    pointerStartScroll = projectTrack.scrollLeft;

    projectTrack.classList.add("is-dragging");
    projectTrack.setPointerCapture(event.pointerId);
  });

  projectTrack.addEventListener("pointermove", (event) => {
    if (!pointerDown) return;

    const delta = event.clientX - pointerStartX;

    if (Math.abs(delta) > 4) {
      pointerMoved = true;
    }

    projectTrack.scrollLeft = pointerStartScroll - delta;
  });

  function endProjectDrag(event) {
    if (!pointerDown) return;

    pointerDown = false;
    projectTrack.classList.remove("is-dragging");

    if (projectTrack.hasPointerCapture?.(event.pointerId)) {
      projectTrack.releasePointerCapture(event.pointerId);
    }

    if (!pointerMoved) return;

    const trackLeft = projectTrack.getBoundingClientRect().left;
    let nearestIndex = 0;
    let nearestDistance = Infinity;

    projectCards.forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().left - trackLeft
      );

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    goToProject(nearestIndex);
  }

  projectTrack.addEventListener("pointerup", endProjectDrag);
  projectTrack.addEventListener("pointercancel", endProjectDrag);

  projectTrack.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToProject(activeProjectIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToProject(activeProjectIndex - 1);
    }
  });

  updateProjectCarouselUI(0);
  requestAnimationFrame(syncProjectCarouselFromScroll);
}




setLanguage("en");










const ambientBackground =

  document.querySelector(".ambient-background");



const blueBlob =

  document.querySelector(".blob-blue");



const cyanBlob =

  document.querySelector(".blob-cyan");



const violetBlob =

  document.querySelector(".blob-violet");



const deepBlob =

  document.querySelector(".blob-deep");



const gradientMesh =

  document.querySelector(".gradient-mesh");





let gradientTicking = false;





function updateGradientBackground() {



const scrollY =

    window.scrollY || window.pageYOffset;










  if (blueBlob) {



    blueBlob.style.setProperty(

      "--blob-y",

      `${scrollY * 0.06}px`

    );



    blueBlob.style.setProperty(

      "--blob-x",

      `${scrollY * -0.012}px`

    );



  }





  if (cyanBlob) {



    cyanBlob.style.setProperty(

      "--blob-y",

      `${scrollY * -0.035}px`

    );



    cyanBlob.style.setProperty(

      "--blob-x",

      `${scrollY * 0.018}px`

    );



  }





  if (violetBlob) {



    violetBlob.style.setProperty(

      "--blob-y",

      `${scrollY * -0.055}px`

    );



    violetBlob.style.setProperty(

      "--blob-x",

      `${scrollY * -0.015}px`

    );



  }





  if (deepBlob) {



    deepBlob.style.setProperty(

      "--blob-y",

      `${scrollY * -0.028}px`

    );



  }





  if (gradientMesh) {



    gradientMesh.style.setProperty(

      "--mesh-scroll",

      `${scrollY * -0.022}px`

    );



  }





  if (ambientBackground) {



    ambientBackground.style.setProperty(

      "--aurora-scroll",

      `${scrollY * 0.025}px`

    );



  }





  gradientTicking = false;



}










window.addEventListener(

  "scroll",

  () => {



    if (

      gradientTicking ||

      window.matchMedia(

        "(prefers-reduced-motion: reduce)"

      ).matches

    ) {

      return;

    }





    gradientTicking = true;





    requestAnimationFrame(

      updateGradientBackground

    );



  },

  {

    passive: true

  }

);





updateGradientBackground();