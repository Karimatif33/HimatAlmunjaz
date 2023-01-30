let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".our-serves");
let started = false;
let cards = document.querySelectorAll("card-our-work")
const ddmu = document.getElementById("ddn");
let ddmcontent = document.querySelector(".dropdown-content");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

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
  }, 6000 / goal);

}
ddmu.addEventListener("click" , (eo) =>{
  ddmcontent.classList.toggle("active1");
});

btn1.addEventListener("click" , (eo) =>{
  btn1.classList.toggle("btn-gray");
  btn2.classList.add("btn-gray");
  btn3.classList.add("btn-gray");
  btn4.classList.add("btn-gray");

});
btn2.addEventListener("click" , (eo) =>{
  btn2.classList.toggle("btn-gray");
  btn1.classList.add("btn-gray");
  btn3.classList.add("btn-gray");
  btn4.classList.add("btn-gray");
});
btn3.addEventListener("click" , (eo) =>{
  btn3.classList.toggle("btn-gray");
  btn1.classList.add("btn-gray");
  btn2.classList.add("btn-gray");
  btn4.classList.add("btn-gray");
});
btn4.addEventListener("click" , (eo) =>{
  btn4.classList.toggle("btn-gray");
  btn1.classList.add("btn-gray");
  btn3.classList.add("btn-gray");
  btn2.classList.add("btn-gray");
});
