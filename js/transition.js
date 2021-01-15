'use strict';

window.addEventListener('load', () => {
  lax.init();

  lax.addDriver('scrollY', () => {
    return window.scrollY;
  });

  const transition = document.querySelector('.transition');
  const count = 10;

  for (let i = 0; i < count; i++) {
    const arrow = document.createElement('img');
    arrow.classList = 'down-arrow';
    arrow.src = './images/down-arrow.svg';
    arrow.alt = 'Down Arrow';

    const div = document.createElement('div');
    div.appendChild(arrow);
    div.className = 'transition-element';
    transition.appendChild(div);
  }

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
});
