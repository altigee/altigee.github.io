const teamBG = document.querySelector('.contracts-bg');
const teamBGImg = new Image();
teamBGImg.src =
  teamBG.clientWidth > 991
    ? '../images/backgrounds/contracts-bg-desktop.jpg'
    : '../images/backgrounds/contracts-bg.jpg';
teamBGImg.onload = function() {
  teamBG.classList.add('animate-bg-fade-in');
};
