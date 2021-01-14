'use strict';

const createSharePopup = () => {
  alert('Share');
};

const shareButtons = document.querySelectorAll('.share');
shareButtons.forEach((shareButton) => {
  shareButton.onclick = () => createSharePopup();
});
