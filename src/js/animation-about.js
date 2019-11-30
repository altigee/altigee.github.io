const teamBG = document.querySelector('.about-bg');
const teamBGImg = new Image();
teamBGImg.src =
  teamBG.clientWidth > 991
    ? '../images/backgrounds/about-desktop.jpg'
    : '../images/backgrounds/about.jpg';

teamBGImg.onload = function() {
  teamBG.classList.add('animate-bg-fade-in');
};
