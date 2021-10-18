let counter = 0;
let a = 0;
let counterPercent = document.getElementById('counter');
let progressBar = document.getElementById('progressBar');
let title = document.getElementById('title');
let main = document.getElementById('main');
let finallBlock = document.getElementById('finally');
// let button = document.getElementById('button');
let description = document.getElementById('description');
let congrat = document.getElementById('congratulations');
let finallyContent = document.getElementById('finallyContent');

const confettiContainer = document.getElementById('confetti');
const animItem = bodymovin.loadAnimation({
  wrapper: confettiContainer,
  animType: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets10.lottiefiles.com/packages/lf20_obhph3sh.json',
});

ConfettiFunction = function () {
  confettiContainer.classList.remove('hide');
  animItem.goToAndPlay(0, true);
};
// button.addEventListener('click', () => {
//   confettiContainer.classList.remove('hide');
//   animItem.goToAndPlay(0, true);
// });
animItem.addEventListener('complete', () => {
  confettiContainer.classList.add('hide');
});

//START

Start = function () {
  new Promise((res) => {
    setTimeout(() => {
      main.classList.add('--flex');
      const i = setInterval(function () {
        counterPercent.innerHTML = a + '%';
        progressBar.style.width = a + '%';
        // if (a >= 15) {
        //   title.innerHTML = 'Loading.';
        // }
        // if (a >= 30) {
        //   title.innerHTML = 'Loading..';
        // }
        // if (a >= 45) {
        //   title.innerHTML = 'Loading...';
        // }
        // if (a >= 60) {
        //   title.innerHTML = 'Loading.';
        // }
        // if (a >= 75) {
        //   title.innerHTML = 'Loading..';
        // }
        if (a >= 100) {
          ConfettiFunction();
          // title.innerHTML = 'Loading...';
          // document
          //   .getElementById('progressBarWrap')
          //   .classList.add('--animationOpacity');

          // setTimeout(() => {
          //   document
          //     .getElementById('progressBarWrap')
          //     .classList.add('--remove');
          // }, 300);
        }
        counter++;
        a++;
        if (counter == 101) {
          res(clearInterval(i));
        }
        return counter;
      }, 20);
    }, 150);
  }).then(() => {
    setTimeout(() => {
      main.classList.add('--animationRemove');
    }, 500);
    setTimeout(() => {
      main.classList.remove('--flex');
    }, 500);
    setTimeout(() => {
      finallBlock.classList.add('--flex');
    }, 600);
    setTimeout(() => {
      finallyContent.classList.add('--showOpacity');
    }, 1400);
    setTimeout(() => {
      description.classList.add('--showOpacity');
    }, 2000);
    // setTimeout(() => {
    //   document.location.replace('https://track.betterdeals.live/click');
    // }, 5800);
  });
};

Start();
