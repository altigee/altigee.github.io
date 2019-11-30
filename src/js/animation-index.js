const teamBG = document.querySelector('.team-bg');
const teamBGImg = new Image();
teamBGImg.src =
  teamBG.clientWidth > 991
    ? '../images/backgrounds/team-desktop.jpg'
    : '../images/backgrounds/team.jpg';
teamBGImg.onload = function() {
  teamBG.classList.add('animate-bg-fade-in');
};

const scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const offer = document.querySelectorAll('.scroll-rotate');
const fromLeft = document.querySelectorAll('.from-left');
const fromRight = document.querySelectorAll('.from-right');

function loop() {
  offer.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate-rotate');
    } else {
      element.classList.remove('animate-rotate');
    }
  });

  fromLeft.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate-from-left');
    } else {
      element.classList.remove('animate-from-left');
    }
  });

  fromRight.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate-from-right');
    } else {
      element.classList.remove('animate-from-right');
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
