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

const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

var sections;

window.addEventListener('scroll', () => {
  const homePage = document.querySelector('.home-page');

  if (homePage.getBoundingClientRect().top <= 0) {
    deleteLandingPage();
    deleteLandingPageTransition();

    const transition = document.querySelector('.transition');
    if (!transition) {
      sections = document.querySelectorAll('section:not(:last-child)');
      sections.forEach((section) => {
        const transitionElement = document.createElement('div');
        transitionElement.classList = 'transition';
        insertAfter(transitionElement, section);
      });
      addArrows();

      homePage.scrollIntoView();
    }
  }
});

const scroll = new SmoothScroll('a[href*="#"]', {
  // speed: 1500,
  speed: 1250,
  easing: 'easeInQuad',
});
