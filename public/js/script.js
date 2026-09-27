/* =========================================================
   JakartaFolio — Shared Script
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ---- Reveal on scroll ----
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // ---- Back to top button ----
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ---- Auto-collapse navbar after clicking a link (mobile) ----
  const navLinks = document.querySelectorAll(".navbar-jf .nav-link");
  const navbarCollapseEl = document.getElementById("navbarJF");
  if (navbarCollapseEl && window.bootstrap) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapseEl, { toggle: false });
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapseEl.classList.contains("show")) {
          bsCollapse.hide();
        }
      });
    });
  }

  // ---- Footer year ----
  const yearEl = document.getElementById("footerYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- Stat counter animation (Homepage) ----
  const counters = document.querySelectorAll("[data-counter]");
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.counter);
        const suffix = el.dataset.suffix || "";
        const decimals = el.dataset.counter.includes(".") ? 1 : 0;
        let step = 0;
        const totalSteps = 30;
        const interval = setInterval(() => {
          step++;
          const value = (target * step) / totalSteps;
          el.textContent = value.toFixed(decimals) + suffix;
          if (step >= totalSteps) {
            clearInterval(interval);
            el.textContent = target.toFixed(decimals) + suffix;
          }
        }, 25);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => counterObserver.observe(el));
  }

});
