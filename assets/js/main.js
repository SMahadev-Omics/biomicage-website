/* ═══════════════════════════════════════════
   BiOmicAge — Shared JavaScript
   ═══════════════════════════════════════════ */

// Nav scroll effect
var nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Mobile hamburger menu
var hamburger = document.querySelector('.nav-hamburger');
var mobileMenu = document.getElementById('navMobileMenu');

if (hamburger && mobileMenu) {

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when a nav link is clicked
  var menuLinks = mobileMenu.querySelectorAll('a');
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
    }
  });
}
