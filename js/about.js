'use strict';

const createAboutPopup = () => {
  alert('About');
};

const aboutButtons = document.querySelectorAll('.about');
aboutButtons.forEach((aboutButton) => {
  aboutButton.onclick = () => createAboutPopup();
});
