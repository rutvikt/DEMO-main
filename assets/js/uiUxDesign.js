
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


      //--------------servicesui
         // Smooth Scrolling for Anchor Links
         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();
              
              if(this.getAttribute('href') === '#') return;
              
              const target = document.querySelector(this.getAttribute('href'));
              if(target) {
                  window.scrollTo({
                      top: target.offsetTop - 80,
                      behavior: 'smooth'
                  });
                  
                  // Close mobile menu if open
                  nav.classList.remove('active');
              }
          });
      });
      
      // Hide scroll indicator when scrolling starts
      const scrollIndicator = document.querySelector('.scroll-indicator');
      
      window.addEventListener('scroll', () => {
          if(window.scrollY > 100) {
              scrollIndicator.style.opacity = '0';
              scrollIndicator.style.visibility = 'hidden';
              
              // Change header background when scrolling
              document.querySelector('header').style.background = 'rgba(42, 42, 114, 0.95)';
              document.querySelector('header').style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
              document.querySelector('header').style.padding = '15px 0';
          } else {
              scrollIndicator.style.opacity = '1';
              scrollIndicator.style.visibility = 'visible';
              
              // Reset header background
              document.querySelector('header').style.background = 'transparent';
              document.querySelector('header').style.boxShadow = 'none';
              document.querySelector('header').style.padding = '20px 0';
          }
      });