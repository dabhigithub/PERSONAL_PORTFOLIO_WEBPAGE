document.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-theme")) {
    const themeFile = event.target.getAttribute("data-theme");
    const themeButtons = document.querySelectorAll("[data-theme]");
    themeButtons.forEach((btn) => btn.classList.remove("active-theme"));
    event.target.classList.add("active-theme");
    document.getElementById("themeStylesheet").setAttribute("href", themeFile);
  }
});
// Get menu button and navigation menu elements
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('header ul');

// Add click event listener to menu button
menuBtn.addEventListener('click', () => {
  // Toggle active class on navigation menu
  navMenu.classList.toggle('active');
  
  // Toggle menu icon between hamburger and close
  if(navMenu.classList.contains('active')) {
    menuBtn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if(!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Close menu when clicking on a nav link
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});
