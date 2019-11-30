const teamBG = document.querySelector('.about-bg');
const teamBGImg = new Image();
teamBGImg.src =
  teamBG.clientWidth > 991
    ? '../images/backgrounds/about-desktop.jpg'
    : '../images/backgrounds/about.jpg';
teamBGImg.onload = function() {
  teamBG.classList.add('animate-bg-fade-in');
};

const counter = document.querySelectorAll('.case-counter');

counter.forEach(function animateCounter(item) {
  let i = 0;
  let max = +item.dataset.value;
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
