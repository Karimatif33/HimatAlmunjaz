let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".our-serves");
let started = false;
let cards = document.querySelectorAll("card-our-work")
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => StartCount(num));

    }
    started = true;
  }
}


function StartCount(eo) {
  let goal = eo.dataset.goal;
  let count = setInterval(() => {
    eo.textContent++;
    if (eo.textContent == goal) {
      clearInterval(count);
    }
  }, 5000 / goal);
}

