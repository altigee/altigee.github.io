const teamBG = document.querySelector('.team-bg');
const teamBGImg = new Image();
teamBGImg.src =
  teamBG.clientWidth > 991
    ? '../images/backgrounds/team-desktop.jpg'
    : '../images/backgrounds/team.jpg';
teamBGImg.onload = function() {
  teamBG.classList.add('animate-bg-fade-in');
};
