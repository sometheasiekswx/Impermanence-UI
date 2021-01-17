'use strict';

const addArrows = () => {
  lax.init();

  lax.addDriver('scrollY', () => {
    return window.scrollY;
  });

  const count = 9;
  const transitions = document.querySelectorAll('.transition');
  transitions.forEach((transition) => {
    for (let i = 0; i < count; i++) {
      const arrow = document.createElement('img');
      arrow.classList = 'down-arrow';
      arrow.src = './images/up-down-arrow.svg';
      arrow.alt = 'Down Arrow';

      const div = document.createElement('div');
      div.appendChild(arrow);
      div.className = 'transition-element';
      transition.appendChild(div);
    }
  });

  lax.addElements('.transition-element', {
    scrollY: {
      translateX: [
        ['elInY', 'elCenterY', 'elOutY'],
        ['screenWidth', 'screenWidth/2', 0],
        {
          easing: 'easeInOutQuart',
        },
      ],
      opacity: [
        ['elInY', 'elCenterY', 'elOutY'],
        [0, 1, 0],
        {
          easing: 'easeInOutCubic',
        },
      ],
    },
  });
};

const addTypeWriters = () => {
  const warning1 = document.querySelector('.landing-page-item-warning-1');
  const warning1Typewriter = new Typewriter(warning1, {
    loop: true,
    delay: 150,
  });
  warning1Typewriter
    .pauseFor(500)
    .typeString('Nothing is...')
    .pauseFor(750)
    .deleteChars(3)
    .typeString(' permanent.')
    .pauseFor(750)
    .typeString('..')
    .deleteChars(12)
    .typeString('permanent...')
    .pauseFor(5000)
    .start();

  const warning2 = document.querySelector('.landing-page-item-warning-2');
  const warning2Typewriter = new Typewriter(warning2, {
    loop: false,
    delay: 100,
  });
  warning2Typewriter
    .pauseFor(7500)
    .typeString('This page will be <em>deleted</em> once you move downwards...')
    .start();
};

window.addEventListener('load', () => {
  addArrows();
  addTypeWriters();
});
