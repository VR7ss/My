const translations = {
  ar: {
    site_title: "VR7 TEAM",
    nav_home: "vr7 Team",
    nav_pc: "هاكات PC",
    nav_ios: "هاكات iOS",
    nav_android: "هاكات Android",
    nav_team: "الفريق",
    nav_scripts: "هاكات macOS",
    hero_badge: "فريق احترافي",
    hero_title_team: "فريق",
    hero_subtitle: "نحن فريق من المطورين والمتخصصين في صنع هاكات الايفون و الاندرويد و بيسي\nنقدم أفضل الحلول والأدوات المتطورة",
    stat_members: "أعضاء الفريق",
    stat_discord: "عدد اعضاء سيرفر ديسورد",
    team_title: "أعضاء الفريق",
    team_subtitle: "تعرف على فريقنا المتميز من المطورين والخبراء",
    role_owner: "owner",
    role_script_dev: "مطور سكربتات",
    role_web_dev: "مطور web",
    role_moderator: "مشرف",
    role_support: "support",
    role_tech_support: "دعم فني",
    role_developer: "مطور",
    skill_scripts: "مطور سكربتات",
    skill_hacks: "مطور هاكات",
    skill_admin: "اشراف علئ الاداره",
    skill_management: "ادارة الاعضاء",
    skill_assistant: "مساعد",
    skill_ios_hacks: "هاكات ايفون",
    skill_android_hacks: "هاكات اندرويد",
    skill_support: "دعم",
    skill_consulting: "استشارات",
    cta_title: "انضم إلى ديسكورد",
    cta_subtitle: "تواصل مع الاعضاء و الفريق",
    cta_button: "For Support"
  },
  en: {
    site_title: "VR7 TEAM",
    nav_home: "VR7 Team",
    nav_pc: "PC Hacks",
    nav_ios: "iOS Hacks",
    nav_android: "Android Hacks",
    nav_team: "Team",
    nav_scripts: "Scripts",
    hero_badge: "Professional Team",
    hero_title_team: "Team",
    hero_subtitle: "We are a team of developers and specialists in creating iPhone, Android and PC hacks\nWe provide the best solutions and advanced tools",
    stat_members: "Team Members",
    stat_discord: "Discord Server Members",
    team_title: "Team Members",
    team_subtitle: "Meet our distinguished team of developers and experts",
    role_owner: "Owner",
    role_script_dev: "Script Developer",
    role_web_dev: "Web Developer",
    role_moderator: "Moderator",
    role_support: "Support",
    role_tech_support: "Technical Support",
    role_developer: "Developer",
    skill_scripts: "Script Developer",
    skill_hacks: "Hack Developer",
    skill_admin: "Admin Management",
    skill_management: "Member Management",
    skill_assistant: "Assistant",
    skill_ios_hacks: "iPhone Hacks",
    skill_android_hacks: "Android Hacks",
    skill_support: "Support",
    skill_consulting: "Consulting",
    cta_title: "Join Discord",
    cta_subtitle: "Connect with members and team",
    cta_button: "Discord Invite"
  }
};

class VR7Website {
  constructor() {
    this.currentLanguage = this.detectLanguage();
    this.init();
  }

  detectLanguage() {
    const savedLang = localStorage.getItem('vr7_language');
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      return savedLang;
    }
    
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.toLowerCase();
    
    if (langCode.includes('ar') || langCode.includes('arabic')) {
      return 'ar';
    } else if (langCode.includes('en') || langCode.includes('english')) {
      return 'en';
    }
    
    return 'ar';
  }

  init() {
    this.initTranslations();
    this.initAOS();
    this.setupNavigation();
    this.setupMobileMenu();
    this.setupScrollEffects();
    this.setupAnimations();
    this.setupParticles();
    this.setupLanguageSelector();
    this.setupPerformanceOptimizations();
  }

  initTranslations() {
    this.translatePage(this.currentLanguage);
    this.updateDirection(this.currentLanguage);
  }

  translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });
  }

  updateDirection(lang) {
    const html = document.documentElement;
    const body = document.body;
    
    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      body.classList.add('rtl');
      body.classList.remove('ltr');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
      body.classList.add('ltr');
      body.classList.remove('rtl');
    }
  }

  setupLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
      if (btn.dataset.lang === this.currentLanguage) {
        btn.classList.add('active');
      }
      
      btn.addEventListener('click', () => {
        const newLang = btn.dataset.lang;
        this.switchLanguage(newLang);
      });
    });
  }

  switchLanguage(lang) {
    if (lang === this.currentLanguage) return;
    
    this.currentLanguage = lang;
    localStorage.setItem('vr7_language', lang);
    
    this.translatePage(lang);
    this.updateDirection(lang);
    
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }

  initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 100
      });
    }
  }

  setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    }, { passive: true });

    this.updateActiveNavLink();
    window.addEventListener('scroll', () => {
      this.updateActiveNavLink();
    }, { passive: true });
  }

  updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 200;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        currentSection = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-items a');

    const toggleMenu = () => {
      const isActive = menuToggle.classList.contains('active');
      
      if (isActive) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }
    };

    const closeMobileMenu = () => {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    const openMobileMenu = () => {
      menuToggle.classList.add('active');
      mobileMenu.classList.add('active');
      menuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    menuToggle.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', closeMobileMenu);

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });

    this.closeMobileMenu = closeMobileMenu;
    this.openMobileMenu = openMobileMenu;
  }

  setupScrollEffects() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    const floatingElements = document.querySelectorAll('.floating-element');
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;

      floatingElements.forEach((element, index) => {
        const speed = parseFloat(element.dataset.speed) || 1;
        element.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.05}deg)`;
      });
    }, { passive: true });
  }

  setupAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.member-card, .hero-content, .section-header').forEach(el => {
      observer.observe(el);
    });

    this.animateCounters();
  }

  animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
      threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateValue(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  animateValue(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      const suffix = element.textContent.includes('+') ? '+' : '';
      element.textContent = Math.floor(current) + suffix;
    }, 16);
  }

  setupParticles() {
    const particleContainer = document.querySelector('.particles-bg');
    const particleCount = window.innerWidth < 768 ? 20 : 50;

    for (let i = 0; i < particleCount; i++) {
      this.createParticle(particleContainer);
    }
  }

  createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;

    particle.style.cssText = `
      position: absolute;
     width: ${size}px;
     height: ${size}px;
     background: rgba(0, 212, 255, ${Math.random() * 0.3 + 0.1});
     border-radius: 50%;
     left: ${left}%;
     bottom: -10px;
     animation: float ${duration}s linear ${delay}s infinite;
     pointer-events: none;
   `;

   container.appendChild(particle);

   setTimeout(() => {
     if (particle.parentNode) {
       particle.parentNode.removeChild(particle);
     }
   }, (duration + delay) * 1000);
 }

 setupPerformanceOptimizations() {
   if ('IntersectionObserver' in window) {
     const imageObserver = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           const img = entry.target;
           img.src = img.dataset.src || img.src;
           img.classList.remove('lazy');
           imageObserver.unobserve(img);
         }
       });
     });

     document.querySelectorAll('img[loading="lazy"]').forEach(img => {
       imageObserver.observe(img);
     });
   }

   let resizeTimer;
   window.addEventListener('resize', () => {
     clearTimeout(resizeTimer);
     resizeTimer = setTimeout(() => {
       this.handleResize();
     }, 250);
   });

   this.preloadCriticalResources();
 }

 handleResize() {
   if (typeof AOS !== 'undefined') {
     AOS.refresh();
   }

   const particleContainer = document.querySelector('.particles-bg');
   if (particleContainer && window.innerWidth < 768) {
     const particles = particleContainer.querySelectorAll('.particle');
     particles.forEach((particle, index) => {
       if (index > 20) {
         particle.remove();
       }
     });
   }
 }

 preloadCriticalResources() {
   const criticalImages = [
     'image/vr7.png',
     'image/dryfd.png',
     'image/7sone.png',
     'image/for.png',
     'image/sato.png',
     'image/abod.png',
     'image/bof.png',
     'image/kuro.png'
   ];

   criticalImages.forEach(src => {
     const link = document.createElement('link');
     link.rel = 'preload';
     link.as = 'image';
     link.href = src;
     document.head.appendChild(link);
   });
 }

 throttle(func, limit) {
   let inThrottle;
   return function() {
     const args = arguments;
     const context = this;
     if (!inThrottle) {
       func.apply(context, args);
       inThrottle = true;
       setTimeout(() => inThrottle = false, limit);
     }
   };
 }

 debounce(func, wait, immediate) {
   let timeout;
   return function executedFunction() {
     const context = this;
     const args = arguments;
     const later = function() {
       timeout = null;
       if (!immediate) func.apply(context, args);
     };
     const callNow = immediate && !timeout;
     clearTimeout(timeout);
     timeout = setTimeout(later, wait);
     if (callNow) func.apply(context, args);
   };
 }
}

document.addEventListener('DOMContentLoaded', () => {
 new VR7Website();
});

if ('serviceWorker' in navigator) {
 window.addEventListener('load', () => {
   navigator.serviceWorker.register('/sw.js')
     .then(registration => {
       console.log('SW registered: ', registration);
     })
     .catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
     });
 });
}

window.addEventListener('error', (e) => {
 console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
 console.error('Unhandled promise rejection:', e.reason);
});