const teamBG = document.querySelector('.contracts-bg');
const teamBGImg = new Image();
teamBGImg.src =
  teamBG.clientWidth > 991
    ? '../images/backgrounds/contracts-bg-desktop.jpg'
    : '../images/backgrounds/contracts-bg.jpg';
teamBGImg.onload = function() {
  teamBG.classList.add('animate-bg-fade-in');
};

const scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
const phase_steps = document.querySelectorAll('.phase-steps');
const phase_steps_parent = document.querySelector('.phase-steps').closest('ul');
const phase_consistent = document.querySelectorAll('.phase-consistent');
const phase_consistent_parent = document
  .querySelector('.phase-consistent')
  .closest('ul');
const counter = document.querySelectorAll('.case-counter');

counter.forEach(function animateCounter(item) {
  let i = 0;
  let max = +item.dataset.value;
  console.log(max);
  let delta = 2000 / max;
  if (isElementInViewport(item)) {
    setTimeout(function tick() {
      if (i < max + 1) {
        item.innerHTML = i;
        i++;
        setTimeout(tick, delta);
      }
    }, delta);
  } else {
    setTimeout(function() {
      animateCounter(item);
    }, 100);
  }
});

function loop() {
  if (isElementInViewport(phase_steps_parent)) {
    phase_steps.forEach(function(element) {
      element.classList.add('animate-phase-steps');
    });
  }

  if (isElementInViewport(phase_consistent_parent)) {
    phase_consistent.forEach(function(element) {
      element.classList.add('animate-phase-consistent');
    });
  }

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
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
