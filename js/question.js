'use strict';

const createQuestionPopup = () => {
  alert('Question');
};

const questionButtons = document.querySelectorAll('.question');
questionButtons.forEach((questionButton) => {
  questionButton.onclick = () => createQuestionPopup();
});
