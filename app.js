function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
  }
  
  window.onresize = function() {
    var menuItems = document.querySelector('.menu-items');
    var menuIcon = document.querySelector('.menu-icon');
  
    if (window.innerWidth <= 768) {
      menuIcon.style.display = 'flex';
      menuItems.style.display = 'none';
    } else {
      menuIcon.style.display = 'none';
      menuItems.style.display = 'flex';
    }
  };
  