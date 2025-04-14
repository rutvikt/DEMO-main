
// Navbar Scroll Effect
    // Toggle mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });



// Modal Handling
const modal = document.getElementById('clientModal');
const becomeClientBtn = document.getElementById('becomeClientBtn');
const footerClientBtn = document.getElementById('footerClientBtn');
const closeModal = document.getElementById('closeModal');

becomeClientBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

footerClientBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});


//---------------------------------------------------
// Go to Top Button functionality

const goToTopBtn = document.getElementById("goToTopBtn");
  
// When the user scrolls down 200px from the top, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
goToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ----------------------  ABOUT
// // Simple animation trigger for scroll (optional)
        document.addEventListener('DOMContentLoaded', function() {
          // You can add more interactive elements here if needed
          console.log('About section loaded');
          
          // Example: Add smooth scroll to CTA button
          const ctaButton = document.querySelector('.cta-button');
          if(ctaButton) {
              ctaButton.addEventListener('click', function(e) {
                  e.preventDefault();
                  const target = document.querySelector(this.getAttribute('href'));
                  if(target) {
                      target.scrollIntoView({
                          behavior: 'smooth'
                      });
                  }
              });
          }
      });


      // ------------COUNT
  
      document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll(".stat-item");
      
        const startCount = (el, target) => {
          const counter = el.querySelector(".count");
          let count = 0;
          const duration = 2000;
          const stepTime = Math.floor(duration / target);
      
          const interval = setInterval(() => {
            count++;
            counter.textContent = count;
            if (count >= target) clearInterval(interval);
          }, stepTime);
        };
      
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const target = +entry.target.dataset.target;
              startCount(entry.target, target);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
      
        counters.forEach((el, i) => {
          el.style.setProperty('--delay', `${i * 0.3}s`);
          observer.observe(el);
        });
      });
     
      

      // -----------------------NAVSERVI
      document.addEventListener('DOMContentLoaded', function() {
    
        const navLinks = document.getElementById('navLinks');
        const servicesDropdown = document.querySelector('.services-dropdown');
        
     
          // Close services dropdown when closing mobile menu
          if (!navLinks.classList.contains('active')) {
            servicesDropdown.classList.remove('active');
          }
        });
        
        // Services dropdown for mobile
        if (window.innerWidth <= 768) {
          const servicesLink = document.querySelector('.services-dropdown > a');
          
          servicesLink.addEventListener('click', function(e) {
            e.preventDefault();
            servicesDropdown.classList.toggle('active');
          });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
          if (!e.target.closest('.services-dropdown') && window.innerWidth > 768) {
            document.querySelector('.services-mega-menu').style.opacity = '0';
            document.querySelector('.services-mega-menu').style.visibility = 'hidden';
          }
        });
      