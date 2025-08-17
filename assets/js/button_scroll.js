( function () {
      const btn = document.getElementById('scrollTopBtn');
      const threshold = 200; // px scrolled before showing

      function toggleBtn() {
        if (window.scrollY > threshold) {
          btn.classList.add('show-scrolltop');
        } else {
          btn.classList.remove('show-scrolltop');
        }
      }

      // Show/hide on scroll
      window.addEventListener('scroll', toggleBtn, { passive: true });
      // Also run on load in case we start mid-page
      toggleBtn();

      // Smooth scroll to top (respects reduced motion)
      btn.addEventListener('click', () => {
        const prefersReduced =
          window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({
          top: 0,
          behavior: prefersReduced ? 'auto' : 'smooth'
        });
      });

      // Keyboard accessibility (Enter/Space)
      btn.setAttribute('tabindex', '0');
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    })();