const teamBG = document.querySelector('.extend-bg');
const teamBGImg = new Image();
teamBGImg.src =
  teamBG.clientWidth > 991
    ? '../images/backgrounds/team-extend-desktop.jpg'
    : '../images/backgrounds/team-extend.jpg';
teamBGImg.onload = function() {
  teamBG.classList.add('animate-bg-fade-in');
};

const scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const get = document.querySelectorAll('.scroll-rotate');
const phase_consistent = document.querySelectorAll('.phase-consistent');
const phase_consistent_parent = document
  .querySelector('.phase-consistent')
  .closest('ul');

function loop() {
  if (isElementInViewport(phase_consistent_parent)) {
    phase_consistent.forEach(function(element) {
      element.classList.add('animate-phase-consistent');
    });
  }

  get.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate-rotate');
    } else {
      element.classList.remove('animate-rotate');
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
