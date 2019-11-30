const teamBG = document.querySelector('.project-bg');
const teamBGImg = new Image();
teamBGImg.src =
  teamBG.clientWidth > 991
    ? '../images/backgrounds/project-based-desktop.jpg'
    : '../images/backgrounds/project-based.jpg';
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
const phase_items = document.querySelectorAll('.phase-steps');
const phase_items_parent = document.querySelector('.phase-steps').closest('ul');

function loop() {
  if (isElementInViewport(phase_items_parent)) {
    phase_items.forEach(function(element) {
      element.classList.add('animate-phase-steps');
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
