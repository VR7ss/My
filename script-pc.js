document.addEventListener('DOMContentLoaded', function() {
  // Navigation Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');

  if (menuToggle && mobileMenu && menuOverlay) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      menuOverlay.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    menuOverlay.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Fetch exploit status from WEAO API
  async function fetchExploitStatus() {
    const apiUrl = 'https://weao.xyz/api/status/exploits';
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('HTTP error! status: ' + response.status);
      const exploits = await response.json();

      exploits.forEach(exploit => {
        const exploitName = exploit.title;
        const appCard = document.querySelector('.app-card[data-exploit-name="' + exploitName + '"]');
        if (appCard) {
          // Update badge status
          const appBadge = appCard.querySelector('.app-badge');
          if (appBadge) {
            if (exploit.updateStatus === true) {
              appBadge.textContent = 'شغال 🟢';
              appBadge.style.background = 'linear-gradient(45deg, #2ecc71, #27ae60)';
            } else {
              appBadge.textContent = 'يحتاج تحديث 🟡';
              appBadge.style.background = 'linear-gradient(45deg, #f1c40f, #f39c12)';
            }
          }
          // Update version tag
          const versionTag = appCard.querySelector('.version-tag');
          if (versionTag && exploit.version) {
            versionTag.textContent = 'v' + exploit.version;
          }
        }
      });
    } catch (error) {
      console.error('Error fetching exploit status:', error);
      document.querySelectorAll('.app-badge').forEach(badge => {
        if (badge.textContent === 'جاري التحميل...') {
          badge.textContent = 'خطأ في التحميل ⚠️';
        }
      });
    }
  }

  // Initial fetch
  fetchExploitStatus();
  // Refresh status every 5 minutes
  setInterval(fetchExploitStatus, 300000);

  // Category Filtering
  const categoryTabs = document.querySelectorAll('.category-tab');
  const appCards = document.querySelectorAll('.app-card');

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      categoryTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const category = this.getAttribute('data-category');
      
      appCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'الكل' || cardCategory === category) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Scroll Animations
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.app-card, .section-text, .pc-title').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
});
