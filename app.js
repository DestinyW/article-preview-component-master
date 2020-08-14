const shareBtn = document.querySelector('.share-btn');
const socialIcons = document.querySelector('.social-icons');
const ptrDown = document.querySelector('.pointer');

shareBtn.addEventListener('click', function() {
  socialIcons.classList.toggle('shareBtn-active');
  ptrDown.classList.toggle('ptr-active');
});