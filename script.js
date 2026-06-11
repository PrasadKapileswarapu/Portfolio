// ===== HAMBURGER MENU =====
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
var links = navLinks.querySelectorAll('a');
links.forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
  });
});


// ===== NAVBAR SHRINK ON SCROLL =====
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');

  if (window.scrollY > 60) {
    navbar.style.padding = '12px 60px';
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
  } else {
    navbar.style.padding = '18px 60px';
    navbar.style.boxShadow = 'none';
  }
});


// ===== SCROLL TO TOP BUTTON =====
window.addEventListener('scroll', function() {
  var scrollBtn = document.getElementById('scrollTop');

  if (window.scrollY > 400) {
    scrollBtn.style.display = 'flex';
  } else {
    scrollBtn.style.display = 'none';
  }
});


// ===== FADE IN ON SCROLL =====
var fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
  fadeElements.forEach(function(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 80) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkFade);
checkFade(); // run on page load too


// ===== ACTIVE NAV LINK ON SCROLL =====
var sections = document.querySelectorAll('section[id]');
var navItems = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', function() {
  var scrollY = window.scrollY;

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop - 100;
    var sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navItems.forEach(function(a) {
        a.classList.remove('active-link');
      });

      var activeLink = document.querySelector('nav ul li a[href="#' + section.id + '"]');
      if (activeLink) {
        activeLink.classList.add('active-link');
      }
    }
  });
});


// ===== CONTACT FORM =====
function sendMessage() {
  var name = document.getElementById('formName').value.trim();
  var email = document.getElementById('formEmail').value.trim();
  var subject = document.getElementById('formSubject').value.trim();
  var message = document.getElementById('formMessage').value.trim();
  var status = document.getElementById('formStatus');

  // Simple validation
  if (!name || !email || !message) {
    status.textContent = 'Please fill in all required fields.';
    status.style.color = '#e94560';
    return;
  }

  // Open default mail client
  var mailtoLink = 'mailto:ksdp015@gmail.com'
    + '?subject=' + encodeURIComponent(subject || 'Portfolio Contact from ' + name)
    + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);

  window.location.href = mailtoLink;

  status.textContent = 'Opening your email client...';
  status.style.color = '#c9a84c';

  // Clear the form
  document.getElementById('formName').value = '';
  document.getElementById('formEmail').value = '';
  document.getElementById('formSubject').value = '';
  document.getElementById('formMessage').value = '';
}