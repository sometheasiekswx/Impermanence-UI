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

window.addEventListener('load', () => {
  addArrows();
});
