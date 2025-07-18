
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const servicesDropdown = document.querySelector('.services-dropdown');
  const navbar = document.querySelector('.navbar');
  
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  // Track if services dropdown was clicked
  let servicesClicked = false;

  // Scroll event for navbar background
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) { // Adjust this value as needed
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    overlay.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
  });

  // Close menu when clicking overlay
  overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.style.display = 'none';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.style.overflow = 'auto';
  });

  // Services dropdown functionality
  if (servicesDropdown) {
    const servicesLink = servicesDropdown.querySelector('a');
    const chevronIcon = servicesDropdown.querySelector('a i');
    const desktopContent = servicesDropdown.querySelector('.services-dropdown-content');
    const mobileContent = servicesDropdown.querySelector('.services-mobile-links');
    
    // Create mobile links if they don't exist
    if (!mobileContent) {
      const mobileLinks = document.createElement('div');
      mobileLinks.className = 'services-mobile-links';
      mobileLinks.innerHTML = `
        <a href="./webDevlopment.html"><i class="fas fa-code"></i> Web Development</a>
        <a href="./CustomSoftware.html"><i class="fas fa-cogs"></i> Custom Software</a>
        <a href="./Marketing.html"><i class="fas fa-bullhorn"></i> Marketing Solution</a>
        <a href="./GraphicDesign.html"><i class="fas fa-paint-brush"></i> Graphic Design</a>
        <a href="./uiUxDesign.html"><i class="fas fa-pencil-ruler"></i> UI/UX Design</a>
        <a href="./mobileApp.html"><i class="fas fa-mobile-alt"></i> Mobile App</a>
      `;
      servicesDropdown.appendChild(mobileLinks);
    }

    // Desktop hover behavior
    servicesDropdown.addEventListener('mouseenter', () => {
      if (window.innerWidth > 768 && !servicesClicked) {
        desktopContent.style.display = 'flex';
      }
    });
    
    servicesDropdown.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768 && !servicesClicked) {
        desktopContent.style.display = 'none';
      }
    });
    
    // Desktop click behavior
    servicesLink.addEventListener('click', (e) => {
      if (window.innerWidth > 768) {
        e.preventDefault();
        servicesClicked = !servicesClicked;
        desktopContent.style.display = servicesClicked ? 'flex' : 'none';
        
        // Toggle chevron icon
        if (chevronIcon) {
          chevronIcon.classList.toggle('fa-chevron-down');
          chevronIcon.classList.toggle('fa-chevron-up');
        }
      }
    });

    // Mobile click behavior
    servicesLink.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        servicesDropdown.classList.toggle('active');
        
        // Toggle chevron icon
        if (chevronIcon) {
          chevronIcon.classList.toggle('fa-chevron-down');
          chevronIcon.classList.toggle('fa-chevron-up');
        }
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      // For desktop
      if (window.innerWidth > 768 && servicesClicked && !e.target.closest('.services-dropdown')) {
        servicesClicked = false;
        desktopContent.style.display = 'none';
        if (chevronIcon) {
          chevronIcon.classList.add('fa-chevron-down');
          chevronIcon.classList.remove('fa-chevron-up');
        }
      }
      
      // For mobile
      if (!e.target.closest('.services-dropdown') && window.innerWidth <= 768) {
        servicesDropdown.classList.remove('active');
        if (chevronIcon) {
          chevronIcon.classList.add('fa-chevron-down');
          chevronIcon.classList.remove('fa-chevron-up');
        }
      }
    });
  }
});



//hero nac sroll to border none
window.addEventListener('scroll', function () {
  const nav = document.querySelector('.nav-links');
  const hero = document.querySelector('.contact-info'); // Adjust if your hero section has a different ID
  const heroTop = hero.offsetTop;

  if (window.scrollY >= heroTop) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


// Modal Handling
const modal = document.getElementById('clientModal');
const becomeClientBtn = document.getElementById('becomeClientBtn');
const footerClientBtn = document.getElementById('becomeClientBtnfooter');
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
// -------------------------------------------------------------------------------------
     // This would be replaced with your actual map implementation
        // For example using Leaflet, Google Maps, or other mapping libraries
        
        document.addEventListener('DOMContentLoaded', function() {
          // Simulate map loading
          setTimeout(function() {
              const placeholder = document.querySelector('.map-placeholder');
              if (placeholder) {
                  placeholder.style.opacity = '0';
                  setTimeout(() => {
                      placeholder.style.display = 'none';
                      
                      // Here you would initialize your actual map
                      // initIndiaMap();
                  }, 300);
              }
          }, 2000);
          
          // Tooltip demo (would be handled by map library in real implementation)
          const mapContainer = document.getElementById('india-map-container');
          const tooltip = document.querySelector('.map-tooltip');
          
          if (mapContainer && tooltip) {
              mapContainer.addEventListener('mousemove', function(e) {
                  // Demo tooltip - in real implementation this would show region data
                  if (e.target.classList.contains('map-placeholder')) {
                      const regions = [
                          "Maharashtra", "Delhi", "Karnataka", 
                          "Tamil Nadu", "Uttar Pradesh", "West Bengal"
                      ];
                      const randomRegion = regions[Math.floor(Math.random() * regions.length)];
                      tooltip.innerHTML = `<strong>${randomRegion}</strong><br>Sample data: ${Math.floor(Math.random() * 100)}% coverage`;
                      tooltip.style.left = (e.pageX + 15) + 'px';
                      tooltip.style.top = (e.pageY - 15) + 'px';
                      tooltip.style.opacity = '1';
                  }
              });
              
              mapContainer.addEventListener('mouseout', function() {
                  tooltip.style.opacity = '0';
              });
          }
      });

      
    // --------------------------------sticky remove footer
document.addEventListener('DOMContentLoaded', function() {
  const footer = document.querySelector('.other');
  const stickyLeft = document.querySelector('.sticky-left');
  const stickyRight = document.querySelector('.sticky-right');
  
  function checkFooterVisibility() {
    const footerRect = footer.getBoundingClientRect();
    const isFooterInView = (
      footerRect.top <= window.innerHeight && 
      footerRect.bottom >= 0
    );
    
    if (isFooterInView) {
      stickyLeft.style.display = 'none';
      stickyRight.style.display = 'none';
    } else {
      stickyLeft.style.display = 'flex';
      stickyRight.style.display = 'flex';
    }
  }
  
  // Initial check
  checkFooterVisibility();
  
  // Check on scroll
  window.addEventListener('scroll', checkFooterVisibility);
});