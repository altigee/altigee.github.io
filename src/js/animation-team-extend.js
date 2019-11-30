const teamBG = document.querySelector('.extend-bg');
const teamBGImg = new Image();

teamBGImg.src =
  teamBG.clientWidth > 991
    ? '../images/backgrounds/team-extend-desktop.jpg'
    : '../images/backgrounds/team-extend.jpg';
teamBGImg.onload = function() {
  teamBG.classList.add('animate-bg-fade-in');
};
