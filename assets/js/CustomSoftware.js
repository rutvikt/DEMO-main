
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
  const hero = document.querySelector('.main-header'); // Adjust if your hero section has a different ID
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
// ---------------------------------------------------

 // Intersection Observer for card animations
 const cards = document.querySelectorAll('.card');
        
 const cardObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
         }
     });
 }, {
     threshold: 0.1
 });

 cards.forEach(card => {
     cardObserver.observe(card);
 });

 // Smooth scroll for navigation
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Header scroll effect
 const header = document.querySelector('.main-header');
 
 window.addEventListener('scroll', () => {
     const scrollPosition = window.scrollY;
     const heroHeight = document.querySelector('.hero').offsetHeight;
     
     if (scrollPosition > heroHeight * 0.7) {
         header.style.opacity = '1';
         header.style.transform = 'translateY(0)';
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