'use strict';

const createSharePopup = () => {
  document.querySelector('.share-popup').classList.add('show');
  document.querySelector('.share-mask').classList.add('show');
  document.querySelector('.share-close').classList.add('show');
};

const removeSharePopup = () => {
  document.querySelector('.share-popup').classList.remove('show');
  document.querySelector('.share-mask').classList.remove('show');
  document.querySelector('.share-close').classList.remove('show');
};

window.addEventListener('load', () => {
  const shareButtons = document.querySelectorAll('.share');
  shareButtons.forEach((shareButton) => {
    shareButton.onclick = () => createSharePopup();
  });

  const shareCloseButton = document.querySelector('.share-close');
  shareCloseButton.onclick = () => {
    removeSharePopup();
  };
});
