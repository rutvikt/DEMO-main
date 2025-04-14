
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
//---------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.testimonial-track');
  const cards = document.querySelectorAll('.testimonial-card');
  
  // Pause animation on hover
  track.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });
  
  track.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });
  
  // Reset position when animation completes
  track.addEventListener('animationiteration', () => {
    // This creates the seamless loop effect
    if (track.style.transform.includes('-50%')) {
      track.style.transform = 'translateY(0)';
      // Force reflow
      void track.offsetWidth;
    }
  });
});

//--------------------------------------------
// Service selection
// Add this JavaScript to handle the service switching with animations
document.addEventListener('DOMContentLoaded', function() {
  const serviceItems = document.querySelectorAll('.service-item');
  const animationContainer = document.querySelector('.service-animation-container');
  
  // Service details data
  const servicesData = {
    'graphic-design': {
      title: 'Graphic design',
      description: 'TECHORSES Graphic Design is here to help! Our design wizards craft eye-catching graphics that’ll make your business shine. From logos to website designs, we’ll give you top-quality graphics that are perfect for your brand. With Techorses, you’re guaranteed amazing designs, creativity, and a professional touch. Upgrade your brand with Techorses Graphic Design today!',
      secondPara: 'Unique and Creative Graphic Design Services for Businesses.High-Quality Graphics to Elevate your Brand Image.Tailored for A Diverse Range of Clients.',
      features: [
        { icon: 'fas fa-palette', text: 'Logo Design' },
        { icon: 'fas fa-print', text: 'Website Mockups' },
        { icon: 'fas fa-icons', text: 'Social Media Graphics' },
        { icon: 'fas fa-photo-video', text: 'Packaging & Branding' },
        { icon: 'fas fa-icons', text: 'Marketing Materials' },
        { icon: 'fas fa-photo-video', text: 'Video Editing' }
      ]
    },
    'web-development': {
      title: 'Web Development',
      description: 'TECHORSES offers web design services focused on user experience and lead generation. We create customized websites with responsive design and seamless navigation to make your website shine online. Partner with us for a professional website that drives growth and success.',
      secondPara: 'What they get: More website visitors, people who like the website, and more sales.',
      features: [
        { icon: 'fas fa-laptop-code', text: 'Custom Website Design' },
        { icon: 'fas fa-mobile-alt', text: 'Mobile Responsive Development' },
        { icon: 'fas fa-shield-alt', text: 'E-commerce Solutions' },
        { icon: 'fas fa-tachometer-alt', text: 'SEO Optimization' },
        { icon: 'fas fa-shield-alt', text: 'Content Management Systems' },
        { icon: 'fas fa-tachometer-alt', text: 'Website Maintenance and Support' }
      ]
    },
    'mobile-app': {
      title: 'Mobile App Development',
      description: 'At TECHORSES, we focus on making custom mobile apps that fit your business perfectly. Our skilled team works hard to make creative and easy-to-use apps that boost your brand and get customers interested. When you pick TECHORSES for your app needs, you’ll get top-quality solutions that ensure you’re completely happy.',
      secondPara: 'Who we do it for: We cater to businesses of all sizes looking to enhance their online presence and streamline operations with innovative mobile solutions.',
      features: [
        { icon: 'fab fa-apple', text: 'Custom App Development' },
        { icon: 'fab fa-android', text: 'Cross-Platform Compatibility' },
        { icon: 'fas fa-sync-alt', text: 'User-Centric Design' },
        { icon: 'fas fa-cloud', text: 'Mobile App Analytics' },
        { icon: 'fas fa-sync-alt', text: 'App Store Optimization' },
        { icon: 'fas fa-cloud', text: 'App Maintenance and Support' }
      ]
    },
    'ui-ux': {
      title: 'UI/UX Design',
      description: 'In the modern digital world, it’s important to have a good-looking and easy-to-use interface to keep customers coming back. At Techorse, we’re experts in designing interfaces that not only look great but also make it easy for users to navigate. When you work with us, you’ll see happier customers, more interaction, and better sales. Let us turn your concepts into awesome designs that will make you stand out.',
      secondPara: 'What do they get: Improving customer happiness and loyalty with great website design.',
      features: [
        { icon: 'fas fa-user-friends', text: 'Seamless Integration' },
        { icon: 'fas fa-pencil-ruler', text: 'Mobile Responsive Design' },
        { icon: 'fas fa-magic', text: 'Interactive Prototypes' },
        { icon: 'fas fa-tasks', text: 'Usability Testing' }
      ]
    },
    'marketing': {
      title: 'Marketing Solutions',
      description: 'TECHORSES offers powerful marketing strategies to help businesses succeed. We increase their online visibility, help them connect better with their customers, and boost their profits. Our expert methods and unique ideas will revolutionize your marketing game.',
      secondPara: 'Who we do it for: Businesses looking to increase their online presence.What do they get: Expert strategies tailored to their needs.',
      features: [
        { icon: 'fas fa-search', text: 'SEO' },
        { icon: 'fas fa-hashtag', text: 'Social Media Marketing' },
        { icon: 'fas fa-ad', text: 'Content Marketing Services' },
        { icon: 'fas fa-chart-line', text: 'Social Media Audit and Strategy Planning' }
      ]
    },
    'custom software Development': {
      title: 'custom software Development',
      description: 'Our skilled team will design software just for you, making your operations smoother. With Techorse, you’ll see better efficiency, productivity, and business growth. Invest in custom software development now and watch your business thrive.',
      secondPara: 'What we do: Techorse offers excellent custom software development services designed to meet your unique business requirements.',
      features: [
        { icon: 'fas fa-search', text: 'Seamless Integration' },
        { icon: 'fas fa-hashtag', text: 'End-to-End Support' },
        { icon: 'fas fa-ad', text: 'Custom Application Development' }
        
      ]
    }
  };

  // Initialize first service
  switchService('graphic-design');

  serviceItems.forEach(item => {
    item.addEventListener('click', function() {
      const service = this.getAttribute('data-service');
      
      // Update active state
      serviceItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      
      // Switch service content
      switchService(service);
    });
  });

  function switchService(service) {
    const data = servicesData[service];
    
    // Create new service details element
    const serviceDetails = document.createElement('div');
    serviceDetails.className = 'service-details active';
    serviceDetails.id = service;
    
    // Build service details HTML
    serviceDetails.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <p>${data.secondPara}</p>
      <div class="service-features">
        ${data.features.map(feature => `
          <div class="feature">
            <i class="${feature.icon}"></i>
            <span>${feature.text}</span>
          </div>
        `).join('')}
      </div>
    `;
    
    // Animation: Remove old content with fade out
    const currentDetails = animationContainer.querySelector('.service-details');
    if (currentDetails) {
      currentDetails.classList.remove('active');
      currentDetails.addEventListener('transitionend', function() {
        currentDetails.remove();
        // Add new content with fade in
        animationContainer.appendChild(serviceDetails);
        
        // Trigger animation for child elements
        setTimeout(() => {
          const h2 = serviceDetails.querySelector('h2');
          const ps = serviceDetails.querySelectorAll('p');
          const features = serviceDetails.querySelectorAll('.feature');
          
          if (h2) h2.style.transform = 'translateX(0)';
          if (h2) h2.style.opacity = '1';
          
          ps.forEach(p => {
            p.style.transform = 'translateX(0)';
            p.style.opacity = '1';
          });
          
          features.forEach((feature, index) => {
            setTimeout(() => {
              feature.style.transform = 'translateY(0)';
              feature.style.opacity = '1';
            }, 300 + (index * 100));
          });
        }, 50);
      }, { once: true });
    } else {
      // First load
      animationContainer.appendChild(serviceDetails);
    }
  }
});
//------------------------------------------------------

// review--------
gsap.registerPlugin(MotionPathPlugin);

  const wheel = document.querySelector(".wheel");
  const cards = gsap.utils.toArray(".wheel__card");

  // Create a timeline for rotation so we can control it
  const wheelRotation = gsap.to(".wheel", {
    rotation:() =>360,
    duration: 90,
    repeat: -1,
    ease: "linear",
    paused: true
  });

  function setup() {
    let radiusX = wheel.offsetWidth / 2;
    let radiusY = wheel.offsetHeight / 2;
    let centerX = wheel.offsetWidth / 2;
    let centerY = wheel.offsetHeight / 2;
  
    let total = cards.length;
    let slice = (2 * Math.PI) / total;
  
    cards.forEach((item, i) => {
      let angle = i * slice - Math.PI ; // Start at top of the wheel
  
      let x = centerX + radiusX * Math.cos(angle);
      let y = centerY + radiusY * Math.sin(angle);
  
      gsap.set(item, {
        xPercent: -50,
        yPercent: -50,
        x: x,
        y: y,
        rotation: angle * (180 / Math.PI) + 90, // Rotate to face outward
        opacity: 1
      });
  
      // Pause/resume on hover
      item.addEventListener("mouseenter", () => wheelRotation.pause());
      item.addEventListener("mouseleave", () => wheelRotation.resume());
    });
  }
  

  

  // Run initial positioning
  setup();

  // Responsive
  window.addEventListener("resize", () => {
    gsap.set(".wheel", { rotation: 0 }); // reset rotation
    setup();
  });

  // Start rotation
  wheelRotation.play();
// ------------------

//REQUIRY
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Form validation
  const inputs = this.querySelectorAll('input, textarea');
  let isValid = true;
  
  inputs.forEach(input => {
      if (!input.value.trim()) {
          input.style.borderBottomColor = '#ff4444';
          isValid = false;
      } else {
          input.style.borderBottomColor = '#4285f4';
      }
  });
  
  if (isValid) {
      // Simulate form submission
      alert('Thank you! Your inquiry has been submitted.');
      this.reset();
      
      // Reset border colors
      inputs.forEach(input => {
          input.style.borderBottomColor = '#f1f1f1';
      });
  }
});

// Add animation to placeholders on focus
document.querySelectorAll('input, textarea').forEach(element => {
  element.addEventListener('focus', function() {
      this.style.borderBottomColor = '#4285f4';
  });
  
  element.addEventListener('blur', function() {
      if (!this.value) {
          this.style.borderBottomColor = '#f1f1f1';
      }
  });
});

// -----------------------------------
//FAQ

document.addEventListener('DOMContentLoaded', function() {
  // Adjust animation speed based on screen size
  function adjustAnimationSpeed() {
      let speed;
      if (window.innerWidth < 768) {
          speed = 60; // Mobile
      } else if (window.innerWidth < 1024) {
          speed = 50; // Tablet
      } else {
          speed = 40; // Desktop
      }
      document.documentElement.style.setProperty('--scroll-speed', `${speed}s`);
      
      // Force restart animations to apply new speed
      document.querySelectorAll('.faq-content').forEach(content => {
          content.style.animation = 'none';
          void content.offsetWidth; // Trigger reflow
          content.style.animation = '';
      });
  }

  // Initial adjustment and on resize
  adjustAnimationSpeed();
  window.addEventListener('resize', adjustAnimationSpeed);
});
//---------------------------------------


document.addEventListener('DOMContentLoaded', function() {
  // Enhance floating social icons animation
  const socialBubbles = document.querySelectorAll('.social-bubble');
  
  // Randomize animation for each bubble
  socialBubbles.forEach(bubble => {
    // Random duration between 10-20 seconds
    const duration = 10 + Math.random() * 10;
    bubble.style.animationDuration = `${duration}s`;
    
    // Random delay up to 15 seconds
    const delay = Math.random() * 15;
    bubble.style.animationDelay = `${delay}s`;
    
    // Random horizontal position
    const left = Math.random() * 100;
    bubble.style.left = `${left}%`;
    
    // Random size between 30-50px
    const size = 30 + Math.random() * 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Make bubbles interactive when they appear
    bubble.addEventListener('animationstart', function() {
      this.style.pointerEvents = 'auto';
      this.style.cursor = 'pointer';
      
      this.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) translateY(-10px)';
        this.style.background = 'rgba(255, 255, 255, 0.2)';
      });
      
      this.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = 'rgba(255, 255, 255, 0.1)';
      });
      
      this.addEventListener('click', function() {
        const iconClass = this.querySelector('i').classList[1];
        let url = '#';
        
        // Set appropriate URLs for each social platform
        switch(iconClass) {
          case 'fa-instagram':
            url = 'https://instagram.com/yourprofile';
            break;
          case 'fa-snapchat':
            url = 'https://snapchat.com/add/yourprofile';
            break;
          case 'fa-whatsapp':
            url = 'https://wa.me/yournumber';
            break;
          case 'fa-linkedin-in':
            url = 'https://linkedin.com/company/yourprofile';
            break;
        }
        
        window.open(url, '_blank');
      });
    });
  });
});


//footer--------------
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

//-----------navservices
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

