document.addEventListener('DOMContentLoaded', function() {
   // Language translations
   const translations = {
       // Arabic translations
       ar: {
           "team_vr7": "TEAM VR7",
           "pc_hacks": "هاكات PC",
           "ios_hacks": "هاكات iOS",
           "android_hacks": "هاكات Android",
           "android_apps": "تطبيقات أندرويد",
           "best_android_apps": "أفضل تطبيقات Android المعدلة ومحاكيات الألعاب للأجهزة",
           "modified_apps_desc": "تطبيقات معدلة بمميزات حصرية لا تجدها في التطبيقات الرسمية في متجر Google Play",
           "dear_user": "عزيزي المستخدم",
           "problem_support": "عندما تحدث لديك مشاكل معينة لا تقوم بفعل أي شيء بل تقوم بفتح تذكرة في سيرفر VR7",
           "help_message": "وسوف نقوم بمساعدتك وحل مشاكلك بأقرب وقت إن شاء الله",
           "youtube_channel": "قناتنا على يوتيوب",
           "subscribe_updates": "اشترك للحصول على آخر التحديثات",
           "all": "الكل",
           "security": "حماية",
           "latest_version": "الإصدار الأخير",
           "delta_desc": "أفضل هاك ومناسب للمبتدئين في الهاكات وله واجهة سهلة الاستعمال بدون مشاكل مع نظام مفتاح سهل بدون خطورة",
           "codex_desc": "أداة متطورة لتنفيذ السكربتات في ألعاب Roblox وفتح إمكانيات لا حصر لها أثناء اللعب",
           "krnl_desc": "هاك جديد الصنع ولا يعتبر قديم وسريع وذات بحث جيد وإمكانية حفظ سكربتات مع واجهة متطورة الشكل وسهلة الاستعمال وإمكانية تشغيل سكربت بشكل تلقائي",
           "vegax_desc": "تشغيل جميع سكريتات",
           "fast_search": "بحث سريع ومميز",
           "advanced_interface": "واجهة متطورة وسريعة",
           "run_scripts": "تشغيل سكربتات",
           "lua_support": "دعم لغة Lua / luau",
           "save_scripts": "إمكانية حفظ سكربتات والبحث عنها",
           "advanced_ui": "واجهة متطورة الشكل",
           "run_scripts_smooth": "تشغيل سكربتات بدون مشاكل",
           "easy_to_use": "سهل الاستعمال",
           "search_save_scripts": "البحث وحفظ سكربتات",
           "beautiful_interface": "واجهة جميلة",
           "excellent_fast_tool": "اداه ممتاز وسريع",
           "install": "تثبيت",
           "discord": "ديسكورد",
           "copyright": "© 2025/5/8 TEAM VR7. جميع الحقوق محفوظة.",
           "warning_message": "⚠️نحن لسنا مسؤولين عن أي خطأ من أخطائك أو استعمال تطبيقات بشكل مضر ضد اللاعبين الآخرين⚠️",
           "ban_warning": "وأي خطر أو ضرر مثل الحظر الذي يحدث على حسابك سواء أن كان مؤقت أو دائمي نحن لسنا مسؤولين عن هذا الشيء"
       },
       // English translations
       en: {
           "team_vr7": "TEAM VR7",
           "pc_hacks": "PC Hacks",
           "ios_hacks": "iOS Hacks",
           "android_hacks": "Android Hacks",
           "android_apps": "Android Apps",
           "best_android_apps": "Best modified Android apps and game emulators for devices",
           "modified_apps_desc": "Modified apps with exclusive features not found in official apps on Google Play Store",
           "dear_user": "Dear User",
           "problem_support": "When you have certain problems, don't do anything but open a ticket in VR7 server",
           "help_message": "We will help you and solve your problems as soon as possible, God willing",
           "youtube_channel": "Our YouTube Channel",
           "subscribe_updates": "Subscribe to get the latest updates",
           "all": "All",
           "security": "Security",
           "latest_version": "Latest Version",
           "delta_desc": "Best hack suitable for beginners in hacks with an easy-to-use interface without problems with an easy key system without danger",
           "codex_desc": "Advanced tool for executing scripts in Roblox games and unlocking unlimited possibilities while playing",
           "krnl_desc": "New hack that is not considered old, fast with good search and ability to save scripts with advanced interface and easy to use with automatic script execution",
           "vegax_desc": "Run all scripts",
           "fast_search": "Fast and distinctive search",
           "advanced_interface": "Advanced and fast interface",
           "run_scripts": "Run scripts",
           "lua_support": "Lua / luau language support",
           "save_scripts": "Ability to save and search scripts",
           "advanced_ui": "Advanced interface design",
           "run_scripts_smooth": "Run scripts without problems",
           "easy_to_use": "Easy to use",
           "search_save_scripts": "Search and save scripts",
           "beautiful_interface": "Beautiful interface",
           "excellent_fast_tool": "Excellent and fast tool",
           "install": "Install",
           "discord": "Discord",
           "copyright": "© 2025/5/8 TEAM VR7. All rights reserved.",
           "warning_message": "⚠️We are not responsible for any errors from your mistakes or using apps harmfully against other players⚠️",
           "ban_warning": "Any risk or damage such as bans that happen to your account whether temporary or permanent, we are not responsible for this"
       },
       // French translations
       fr: {
           "team_vr7": "TEAM VR7",
           "pc_hacks": "Hacks PC",
           "ios_hacks": "Hacks iOS",
           "android_hacks": "Hacks Android",
           "android_apps": "Applications Android",
           "best_android_apps": "Meilleures applications Android modifiées et émulateurs de jeux pour appareils",
           "modified_apps_desc": "Applications modifiées avec des fonctionnalités exclusives introuvables dans les applications officielles sur Google Play Store",
           "dear_user": "Cher Utilisateur",
           "problem_support": "Lorsque vous avez certains problèmes, ne faites rien mais ouvrez un ticket dans le serveur VR7",
           "help_message": "Nous vous aiderons et résoudrons vos problèmes dès que possible, si Dieu le veut",
           "youtube_channel": "Notre Chaîne YouTube",
           "subscribe_updates": "Abonnez-vous pour recevoir les dernières mises à jour",
           "all": "Tous",
           "security": "Sécurité",
           "latest_version": "Dernière Version",
           "delta_desc": "Meilleur hack adapté aux débutants dans les hacks avec une interface facile à utiliser sans problèmes avec un système de clé facile sans danger",
           "codex_desc": "Outil avancé pour exécuter des scripts dans les jeux Roblox et débloquer des possibilités illimitées pendant le jeu",
           "krnl_desc": "Nouveau hack qui n'est pas considéré comme ancien, rapide avec une bonne recherche et capacité de sauvegarder des scripts avec interface avancée et facile à utiliser avec exécution automatique de script",
           "vegax_desc": "Exécuter tous les scripts",
           "fast_search": "Recherche rapide et distinctive",
           "advanced_interface": "Interface avancée et rapide",
           "run_scripts": "Exécuter des scripts",
           "lua_support": "Support du langage Lua / luau",
           "save_scripts": "Capacité de sauvegarder et rechercher des scripts",
           "advanced_ui": "Design d'interface avancé",
           "run_scripts_smooth": "Exécuter des scripts sans problèmes",
           "easy_to_use": "Facile à utiliser",
           "search_save_scripts": "Rechercher et sauvegarder des scripts",
           "beautiful_interface": "Belle interface",
           "excellent_fast_tool": "Outil excellent et rapide",
           "install": "Installer",
           "discord": "Discord",
           "copyright": "© 2025/5/8 TEAM VR7. Tous droits réservés.",
           "warning_message": "⚠️Nous ne sommes pas responsables des erreurs de vos erreurs ou de l'utilisation d'applications de manière nuisible contre d'autres joueurs⚠️",
           "ban_warning": "Tout risque ou dommage tel que les bannissements qui arrivent à votre compte qu'ils soient temporaires ou permanents, nous ne sommes pas responsables de cela"
       }
   };

   function detectDeviceLanguage() {
       const deviceLang = navigator.language || navigator.userLanguage;
       const langCode = deviceLang.split('-')[0];
       
       const supportedLanguages = ['ar', 'en', 'fr'];
       return supportedLanguages.includes(langCode) ? langCode : 'ar';
   }

   function changeLanguageByDevice(lang) {
       const elements = document.querySelectorAll('[data-translate]');
       
       elements.forEach(element => {
           const key = element.getAttribute('data-translate');
           if (translations[lang] && translations[lang][key]) {
               element.textContent = translations[lang][key];
           }
       });
       
       // Update document direction and language
       if (lang === 'ar') {
           document.documentElement.setAttribute('dir', 'rtl');
           document.documentElement.setAttribute('lang', 'ar');
       } else {
           document.documentElement.setAttribute('dir', 'ltr');
           document.documentElement.setAttribute('lang', lang);
       }
   }

   function initAutoLanguageDetection() {
       const savedLang = localStorage.getItem('selectedLanguage');
       
       if (!savedLang) {
           const detectedLang = detectDeviceLanguage();
           changeLanguageByDevice(detectedLang);
           localStorage.setItem('selectedLanguage', detectedLang);
       } else {
           changeLanguageByDevice(savedLang);
       }
   }

   function createParticles() {
     const particlesContainer = document.getElementById('particles');
     if (!particlesContainer) return;
     const particleCount = window.innerWidth < 768 ? 15 : 25;
     for (let i = 0; i < particleCount; i++) {
       const particle = document.createElement('div');
       particle.classList.add('particle');
       const size = Math.random() * 100 + 50;
       particle.style.width = size + 'px';
       particle.style.height = size + 'px';
       particle.style.left = Math.random() * 100 + 'vw';
       particle.style.top = Math.random() * 100 + 'vh';
       const duration = Math.random() * 20 + 10;
       particle.style.animationDuration = duration + 's';
       const delay = Math.random() * 5;
       particle.style.animationDelay = delay + 's';
       particlesContainer.appendChild(particle);
     }
   }

   function handleScrollAnimation() {
     const faders = document.querySelectorAll('.fade-in-section');
     const appearOptions = {
       threshold: 0.1,
       rootMargin: "0px 0px -100px 0px"
     };

     if ('IntersectionObserver' in window) {
       const appearOnScroll = new IntersectionObserver(function(entries, observer) {
         entries.forEach(entry => {
           if (!entry.isIntersecting) return;
           entry.target.classList.add('visible');
           observer.unobserve(entry.target);
         });
       }, appearOptions);

       faders.forEach(fader => {
         appearOnScroll.observe(fader);
       });

       const iosTitle = document.getElementById('ios-title');
       if (iosTitle) {
         iosTitle.classList.add('visible');
       }

       const appCards = document.querySelectorAll('.app-card');
       setTimeout(() => {
         appCards.forEach((card, index) => {
           setTimeout(() => {
             card.classList.add('visible');
           }, index * 100);
         });
       }, 500);
     }
   }

   function setupMobileMenu() {
     const menuToggle = document.querySelector('.menu-toggle');
     const mobileMenu = document.querySelector('.mobile-menu');
     const menuOverlay = document.querySelector('.menu-overlay');
     if (!menuToggle || !mobileMenu || !menuOverlay) return;

    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      menuOverlay.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    menuOverlay.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  function setupCategoryTabs() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const appCards = document.querySelectorAll('.app-card');
    if (!categoryTabs.length || !appCards.length) return;

    categoryTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        categoryTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const category = this.getAttribute('data-category');
        
        if (category === 'Apps-executor-2') {
          appCards.forEach(card => {
            card.style.display = 'block';
            setTimeout(() => {
              card.classList.add('visible');
            }, 100);
          });
        } else {
          appCards.forEach(card => {
            card.classList.remove('visible');
            setTimeout(() => {
              const cardCategory = card.getAttribute('data-category');
              if (cardCategory === category) {
                card.style.display = 'block';
                setTimeout(() => {
                  card.classList.add('visible');
                }, 100);
              } else {
                card.style.display = 'none';
              }
            }, 300);
          });
        }
      });
    });
  }

  function setupDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    const currentLang = localStorage.getItem('selectedLanguage') || 'ar';
    
    const downloadMessages = {
      ar: {
        confirm: 'هل أنت متأكد من تثبيت هذا التطبيق؟ قد يكون هناك مخاطر أمنية محتملة عند تثبيت تطبيقات من مصادر غير معروفة.',
        downloading: 'جاري التحميل...',
        started: 'تم البدء!'
      },
      en: {
        confirm: 'Are you sure you want to install this app? There may be potential security risks when installing apps from unknown sources.',
        downloading: 'Downloading...',
        started: 'Started!'
      },
      fr: {
        confirm: 'Êtes-vous sûr de vouloir installer cette application? Il peut y avoir des risques de sécurité potentiels lors de l\'installation d\'applications provenant de sources inconnues.',
        downloading: 'Téléchargement...',
        started: 'Commencé!'
      }
    };

    downloadButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        const messages = downloadMessages[currentLang];
        
        if (!confirm(messages.confirm)) {
          e.preventDefault();
          return;
        }
        
        const originalText = this.textContent;
        this.textContent = messages.downloading;
        
        setTimeout(() => {
          this.textContent = messages.started;
          setTimeout(() => {
            this.textContent = originalText;
          }, 1500);
        }, 1000);
      });
    });
  }

  function optimizeImages() {
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }

  function setupScrollEffects() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      navbar.style.background = scrollPosition > 50 ? 'rgba(10, 0, 0, 0.9)' : 'transparent';
    });
  }

  // Initialize all functions
  createParticles();
  handleScrollAnimation();
  setupMobileMenu();
  setupCategoryTabs();
  setupDownloadButtons();
  optimizeImages();
  setupScrollEffects();
  initAutoLanguageDetection();
});
