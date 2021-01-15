'use strict';

const createQuestionPopup = () => {
  document.querySelector('.question-popup').classList.add('show');
  document.querySelector('.question-mask').classList.add('show');
  document.querySelector('.question-close').classList.add('show');
};

const removeQuestionPopup = () => {
  document.querySelector('.question-popup').classList.remove('show');
  document.querySelector('.question-mask').classList.remove('show');
  document.querySelector('.question-close').classList.remove('show');
};

window.addEventListener('load', () => {
  const questionButtons = document.querySelectorAll('.question');
  questionButtons.forEach((questionButton) => {
    questionButton.onclick = () => createQuestionPopup();
  });

  const questionCloseButton = document.querySelector('.question-close');
  questionCloseButton.onclick = () => {
    removeQuestionPopup();
  };
});
