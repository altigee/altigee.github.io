const teamBG = document.querySelector('.project-bg');
const teamBGImg = new Image();
teamBGImg.src =
  teamBG.clientWidth > 991
    ? '../images/backgrounds/project-based-desktop.jpg'
    : '../images/backgrounds/project-based.jpg';
teamBGImg.onload = function() {
  teamBG.classList.add('animate-bg-fade-in');
};
