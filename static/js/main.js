document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      menuIconOpen.classList.toggle("hidden", !isOpen);
      menuIconClose.classList.toggle("hidden", isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        menuIconOpen.classList.remove("hidden");
        menuIconClose.classList.add("hidden");
      });
    });
  }

  // Lightbox (gallery page)
  const overlay = document.getElementById("lightbox-overlay");
  if (overlay) {
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCounter = document.getElementById("lightbox-counter");
    const galleryItems = document.querySelectorAll("[data-gallery-index]");
    let currentIndex = 0;
    const images = [];

    galleryItems.forEach(function (el) {
      images.push({ src: el.dataset.gallerySrc, alt: el.dataset.galleryAlt });
    });

    function showImage(index) {
      currentIndex = (index + images.length) % images.length;
      lightboxImg.src = images[currentIndex].src;
      lightboxImg.alt = images[currentIndex].alt;
      lightboxCounter.textContent = (currentIndex + 1) + " / " + images.length;
    }

    galleryItems.forEach(function (el) {
      el.addEventListener("click", function () {
        showImage(parseInt(el.dataset.galleryIndex, 10));
        overlay.classList.add("active");
      });
    });

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) overlay.classList.remove("active");
    });

    document.getElementById("lightbox-close").addEventListener("click", function () {
      overlay.classList.remove("active");
    });

    document.getElementById("lightbox-prev").addEventListener("click", function (e) {
      e.stopPropagation();
      showImage(currentIndex - 1);
    });

    document.getElementById("lightbox-next").addEventListener("click", function (e) {
      e.stopPropagation();
      showImage(currentIndex + 1);
    });

    document.addEventListener("keydown", function (e) {
      if (!overlay.classList.contains("active")) return;
      if (e.key === "Escape") overlay.classList.remove("active");
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
    });
  }
});
