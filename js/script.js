// Menu mobile
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Ano no rodapé
const anoEl = document.getElementById("ano");
if (anoEl) anoEl.textContent = new Date().getFullYear();

// Animações ao rolar a página
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
}

// Header muda levemente ao rolar
const headerEl = document.querySelector(".header");
if (headerEl) {
  const onScroll = () => headerEl.classList.toggle("header--scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
