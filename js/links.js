'use strict';

const addLinksTo = (cssSelector, href, target = '') => {
  const links = document.querySelectorAll(cssSelector);
  links.forEach((link) => {
    link.href = href;
    link.target = target;
  });
};

window.addEventListener('load', () => {
  addLinksTo(
    '.link-author',
    'https://www.linkedin.com/in/sometheasiek/',
    '_blank',
  );
  addLinksTo('.link-home-page', '#home-page');
  addLinksTo('.link-landing-page', '#landing-page');
});
