var navbar = document.querySelector('nav');
var navBox = navbar.getBoundingClientRect();
var lightSection = document.querySelector('.light-bg');
var lightSectionBox = lightSection.getBoundingClientRect();
var lastScroll = 0;

window.onscroll = () => {
  toggleNav();
  swapNavColor();
};

toggleNav = () => {
  var currentY = window.pageYOffset;
  if (lastScroll > currentY || lastScroll === 0) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-100px';
  }
  lastScroll = currentY;
};

swapNavColor = () => {
  var lightTop = lightSectionBox.top;
  var lightBottom = lightSectionBox.bottom;
  var currentY = window.pageYOffset + 15;

  if (
    currentY > lightTop &&
    currentY < lightBottom &&
    !navbar.classList.contains('dark-text')
  ) {
    navbar.classList.add('dark-text');
  } else if (
    (currentY > lightBottom || currentY < lightTop) &&
    navbar.classList.contains('dark-text')
  ) {
    navbar.classList.remove('dark-text');
  }
};
