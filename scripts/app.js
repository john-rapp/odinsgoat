// var navbar = document.querySelector('nav');
var lightSection = document.querySelector('.light-bg');
var lightSectionBox = lightSection.getBoundingClientRect();
var lightTop = lightSectionBox.top + window.scrollY;
var lightBottom = lightSectionBox.bottom + window.scrollY;
var lastScroll = 0;

// window.onscroll = () => {
//   toggleNav();
//   swapNavColor();
// };

toggleNav = () => {
  var currentY = window.scrollY;
  if (lastScroll > currentY || lastScroll === 0) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-100px';
  }
  lastScroll = currentY;
};

swapNavColor = () => {
  var currentY = window.scrollY - 20;
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
