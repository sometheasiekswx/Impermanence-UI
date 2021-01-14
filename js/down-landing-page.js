'use strict';

const deleteLandingPage = (e) => {
  console.log(e);
};

const downButton = document.querySelector('.down-landing-page');
downButton.onclick = (e) => deleteLandingPage(e);
