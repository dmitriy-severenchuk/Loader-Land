let counter = 0;
let a = 0;
let counterPercent = document.getElementById('counter');
let progressBar = document.getElementById('progressBar');
let title = document.getElementById('title');
let reviews = document.querySelectorAll('#review');
let startButton = document.getElementById('startButton');
let main = document.getElementById('main');
let startBlock = document.getElementById('startBlock');
let finallBlock = document.getElementById('finally');
//START

startButton.addEventListener('click', () => {
  startBlock.classList.add('--animationRemove');
  setTimeout(() => {
    startBlock.classList.add('--remove');
  }, 600);
  new Promise((res) => {
    setTimeout(() => {
      main.classList.add('--show');
      const i = setInterval(function () {
        reviews[0].classList.add('--showReview');

        counterPercent.innerHTML = a + '%';
        progressBar.style.width = a + '%';

        if (a >= 22) {
          title.innerHTML = 'Checking Credit Score & Driving Records';
          reviews[1].classList.add('--showReview');
        }
        if (a >= 50) {
          counterPercent.style.color = 'white';
        }
        if (a >= 60) {
          reviews[2].classList.add('--showReview');
        }
        if (a >= 100) {
          title.innerHTML = 'Checking Eligibility';
        }
        counter++;
        a++;
        if (counter == 101) {
          res(clearInterval(i));
        }
        return counter;
      }, 60);
    }, 800);
  }).then(() => {
    setTimeout(() => {
      main.classList.add('--animationRemove');
    }, 1300);
    setTimeout(() => {
      main.classList.remove('--show');
    }, 1700);
    setTimeout(() => {
      finallBlock.classList.add('--show');
    }, 1600);
  });
});


// Swipe

let touchstartY = 0
let touchendY = 0

const slider = document.getElementById('swipe')

function handleGesture() {
  if (touchendY + 40 < touchstartY) alert('swiped!');
}

slider.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY
})

slider.addEventListener('touchend', e => {
  touchendY = e.changedTouches[0].screenY
  handleGesture()
})