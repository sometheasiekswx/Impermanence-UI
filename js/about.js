'use strict';

const createAboutPopup = () => {
  document.querySelector('.about-popup').classList.add('show');
  document.querySelector('.about-mask').classList.add('show');
  document.querySelector('.about-close').classList.add('show');
};

const removeAboutPopup = () => {
  document.querySelector('.about-popup').classList.remove('show');
  document.querySelector('.about-mask').classList.remove('show');
  document.querySelector('.about-close').classList.remove('show');
};

window.addEventListener('load', () => {
  const aboutButtons = document.querySelectorAll('.about');
  aboutButtons.forEach((aboutButton) => {
    aboutButton.onclick = () => createAboutPopup();
  });

  const aboutCloseButton = document.querySelector('.about-close');
  aboutCloseButton.onclick = () => {
    removeAboutPopup();
  };
});
