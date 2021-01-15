'use strict';

const deleteLandingPage = () => {
  const landingPage = document.querySelector('.landing-page');
  if (landingPage) {
    landingPage.parentNode.removeChild(landingPage);
  }
};

const deleteLandingPageTransition = () => {
  const landingPageTransition = document.querySelector(
    '.landing-page-transition',
  );
  if (landingPageTransition) {
    landingPageTransition.parentNode.removeChild(landingPageTransition);
  }
};

window.addEventListener('scroll', () => {
  const homePage = document.querySelector('.home-page');

  if (homePage.getBoundingClientRect().top <= 0) {
    deleteLandingPage();
    deleteLandingPageTransition();
    playMusic();
  }
});
