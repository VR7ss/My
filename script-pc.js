document.addEventListener('DOMContentLoaded', function() {
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
         if (category === 'الكل') {
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
               if (cardCategory === category || card.querySelector('.app-description').textContent.includes(category)) {
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
     downloadButtons.forEach(button => {
       button.addEventListener('click', function(e) {
         if (!confirm('هل أنت متأكد من تثبيت هذا التطبيق؟ قد يكون هناك مخاطر أمنية محتملة عند تثبيت تطبيقات من مصادر غير معروفة.')) {
           e.preventDefault();
           return;
         }
         const originalText = this.textContent;
         this.textContent = 'جاري التحميل...';
         setTimeout(() => {
           this.textContent = 'تم البدء!';
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

   const translations = {
       ar: {
           "iOS Apps": "تطبيقات iOS",
           "TEAM VR7": "فريق VR7",
           "scripts": "سكربتات",
           "هاكات PC": "هاكات PC",
           "هاكات iOS": "هاكات iOS", 
           "هاكات android": "هاكات android",
           "أفضل تطبيقات iOS المعدلة ومحاكيات الألعاب للأجهزة بدون جيلبريك": "أفضل تطبيقات iOS المعدلة ومحاكيات الألعاب للأجهزة بدون جيلبريك",
           "تطبيقات معدلة بمميزات حصرية لا تجدها في التطبيقات الرسمية في متجر App Store": "تطبيقات معدلة بمميزات حصرية لا تجدها في التطبيقات الرسمية في متجر App Store",
           "الكل": "الكل",
           "هاكات": "هاكات",
           "تثبيت": "تثبيت",
           "غير متوفر": "غير متوفر",
           "دليل التثبيت العام": "دليل التثبيت العام",
           "تحضير الجهاز": "تحضير الجهاز",
           "الذهاب للإعدادات": "الذهاب للإعدادات",
           "الثقة بالمطور": "الثقة بالمطور",
           "تشغيل التطبيق": "تشغيل التطبيق",
           "العربية": "العربية",
           "English": "English",
           "Français": "Français"
       },
       en: {
           "iOS Apps": "iOS Apps",
           "TEAM VR7": "TEAM VR7",
           "scripts": "Scripts",
           "هاكات PC": "PC Hacks",
           "هاكات iOS": "iOS Hacks",
           "هاكات android": "Android Hacks",
           "أفضل تطبيقات iOS المعدلة ومحاكيات الألعاب للأجهزة بدون جيلبريك": "Best modified iOS apps and game emulators for devices without jailbreak",
           "تطبيقات معدلة بمميزات حصرية لا تجدها في التطبيقات الرسمية في متجر App Store": "Modified apps with exclusive features not found in official App Store applications",
           "الكل": "All",
           "هاكات": "Hacks",
           "تثبيت": "Install",
           "غير متوفر": "Not Available",
           "دليل التثبيت العام": "General Installation Guide",
           "تحضير الجهاز": "Device Preparation",
           "الذهاب للإعدادات": "Go to Settings",
           "الثقة بالمطور": "Trust Developer",
           "تشغيل التطبيق": "Run Application",
           "العربية": "Arabic",
           "English": "English",
           "Français": "French"
       },
       fr: {
           "iOS Apps": "Applications iOS",
           "TEAM VR7": "ÉQUIPE VR7",
           "scripts": "Scripts",
           "هاكات PC": "Hacks PC",
           "هاكات iOS": "Hacks iOS",
           "هاكات android": "Hacks Android",
           "أفضل تطبيقات iOS المعدلة ومحاكيات الألعاب للأجهزة بدون جيلبريك": "Meilleures applications iOS modifiées et émulateurs de jeux pour appareils sans jailbreak",
           "تطبيقات معدلة بمميزات حصرية لا تجدها في التطبيقات الرسمية في متجر App Store": "Applications modifiées avec des fonctionnalités exclusives introuvables dans les applications officielles de l'App Store",
           "الكل": "Tous",
           "هاكات": "Hacks",
           "تثبيت": "Installer",
           "غير متوفر": "Non Disponible",
           "دليل التثبيت العام": "Guide d'Installation Général",
           "تحضير الجهاز": "Préparation de l'Appareil",
           "الذهاب للإعدادات": "Aller aux Paramètres",
           "الثقة بالمطور": "Faire Confiance au Développeur",
           "تشغيل التطبيق": "Lancer l'Application",
           "العربية": "Arabe",
           "English": "Anglais",
           "Français": "Français"
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
       
       if (lang === 'ar') {
           document.documentElement.setAttribute('dir', 'rtl');
           document.documentElement.setAttribute('lang', 'ar');
       } else {
           document.documentElement.setAttribute('dir', 'ltr');
           document.documentElement.setAttribute('lang', lang);
       }
   }

   function setLanguageSelector(lang) {
       const languageOptions = document.querySelectorAll('.language-option');
       const currentLangSpan = document.getElementById('currentLang');
       
       languageOptions.forEach(option => {
           option.classList.remove('active');
           if (option.getAttribute('data-lang') === lang) {
               option.classList.add('active');
               if (currentLangSpan) {
                   currentLangSpan.textContent = option.querySelector('.lang-name').textContent;
               }
           }
       });
   }

   function initAutoLanguageDetection() {
       const savedLang = localStorage.getItem('selectedLanguage');
       
       if (!savedLang) {
           const detectedLang = detectDeviceLanguage();
           changeLanguageByDevice(detectedLang);
           setLanguageSelector(detectedLang);
           localStorage.setItem('selectedLanguage', detectedLang);
       } else {
           changeLanguageByDevice(savedLang);
           setLanguageSelector(savedLang);
       }
   }

   function initLanguageSelector() {
       const languageBtn = document.getElementById('languageBtn');
       const languageDropdown = document.getElementById('languageDropdown');
       const languageOptions = document.querySelectorAll('.language-option');
       const currentLangSpan = document.getElementById('currentLang');
       
       if (!languageBtn || !languageDropdown) return;
       
       languageBtn.addEventListener('click', function(e) {
           e.stopPropagation();
           languageDropdown.classList.toggle('show');
           languageBtn.classList.toggle('active');
       });
       
       document.addEventListener('click', function() {
           languageDropdown.classList.remove('show');
           languageBtn.classList.remove('active');
       });
       
       languageOptions.forEach(option => {
           option.addEventListener('click', function() {
               const selectedLang = this.getAttribute('data-lang');
               const langName = this.querySelector('.lang-name').textContent;
               
               languageOptions.forEach(opt => opt.classList.remove('active'));
               this.classList.add('active');
               
               currentLangSpan.textContent = langName;
               
               changeLanguageByDevice(selectedLang);
               
               localStorage.setItem('selectedLanguage', selectedLang);
               
               languageDropdown.classList.remove('show');
               languageBtn.classList.remove('active');
           });
       });
   }

   // Fetch exploit status from WEAO API
   async function fetchExploitStatus() {
       const apiUrl = 'https://weao.xyz/api/status/exploits';
       try {
           const response = await fetch(apiUrl);
           if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
           }
           const exploits = await response.json();

           exploits.forEach(exploit => {
               const exploitName = exploit.title;
               const appCard = document.querySelector(`.app-card[data-exploit-name="${exploitName}"]`);
               if (appCard) {
                   const appBadge = appCard.querySelector('.app-badge');
                   if (appBadge) {
                       if (exploit.updateStatus === true) {
                           appBadge.textContent = 'شغال 🟢';
                       } else {
                           appBadge.textContent = 'يحتاج تحديث 🟡';
                       }
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

   createParticles();
   handleScrollAnimation();
   setupMobileMenu();
   setupCategoryTabs();
   setupDownloadButtons();
   optimizeImages();
   setupScrollEffects();
   initLanguageSelector();
   initAutoLanguageDetection();
   fetchExploitStatus(); // Call the new function
});
