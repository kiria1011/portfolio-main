// loading_1////////
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading_1").style.display = "none";
  },2200)
});

// // loading_2 none////
var loading_2_close = document.getElementById("title_underline");
var loading_2 = document.getElementById("loading_2");

loading_2_close.addEventListener("animationend", () => {
  setTimeout(() => {
    loading_2.style.display = "none";
  },200)
});
// loading_2-2////
var loading_2_close = document.getElementById("title_underline");

loading_2_close.addEventListener("animationend", () => {
  var splash_1 = document.getElementById("splash1-1");
  var splash_2 = document.getElementById("splash2-2");
  setTimeout(() => {
    splash_1.style.display = "block";
    splash_2.style.display = "block";
  },200)
});
var loading_2_2 = document.getElementById("loading_2-2");
loading_2_2.addEventListener("animationend", () => {
    setTimeout(() => {
      loading_2_2.style.display = "none";
    },3000)
  });

// loading_3///////

var loading_2 = document.getElementById("loading_2")
var loading_3 = document.getElementById("loading_3")
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    loading_2.style.display = "block";  
}, 2100);
  setTimeout(() => {
    loading_3.style.display = "block";  
}, 4100);
});
window.onload = function() {
  let my_audio = new Audio("./music/MusMus-BGM-142.mp3");
  document.getElementById("sound_button_1").onclick = function() {
    my_audio.currentTime = 0;
    my_audio.play();
  }
};
var music_1 = document.getElementById("sound_button_1");
var loading_3 = document.getElementById("loading_3");
music_1.addEventListener("click", () => {
  loading_3.style.display = "none";
});
var music_2 = document.getElementById("sound_button_2");
var loading_3 = document.getElementById("loading_3");
music_2.addEventListener("click", () => {
  loading_3.style.display = "none";
});

// sidemenu/////
window.addEventListener("load", function () {
  document.getElementById("menu_btn").classList.add("menu_onload");
});

var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var close = document.getElementById("close");
var menu_btn = document.getElementById("menu_btn");

menu.addEventListener("click", () => {
  if (nav.className === "navi" ) {
    nav.classList.add("open-menu");
  }else {nav.classList.remove("open-menu");
  }
  if (nav.className === "navi" ) {
    nav.classList.add("open-menu");
  }else {
  }
  if (close.className === "menu_close") {
    close.classList.add("open_close_menu");
  }else {close.classList.remove("open_close_menu");
  }
  if (menu_btn.className === "menu-btn menu_onload") {
    menu_btn.classList.remove("menu_onload");
  }else {
  }
});

var close = document.getElementById("close");
var nav = document.getElementById("nav");
var menu_btn = document.getElementById("menu_btn");

close.addEventListener("click", () => {
  if (close.className === "menu_close open_close_menu") {
    close.classList.remove("open_close_menu");
  }else {
  };
  if (nav.className === "navi open-menu") {
    nav.classList.remove("open-menu");
  }else {
  };
  if (menu_btn.className === "menu-btn") {
    menu_btn.classList.add("menu_onload");
  }else {
  };
});

function sidemenu() {
  document.getElementById("nav").classList.toggle("open-menu");
  document.getElementById("close").classList.toggle("open_close_menu");
  document.getElementById("menu_btn").classList.toggle("menu_onload");
}

var allclose = document.getElementsByClassName("all-close");
for (var i = 0; i < allclose.length; i++) {
  allclose[i].addEventListener("click", function () {
    sidemenu();
    });
  }

const topArea = document.querySelector("#top");
const topBtns =  Array.from(document.querySelectorAll(".top-btn"))
topBtns.forEach(element => {
  element.addEventListener("click", () => {
    const index = topBtns.indexOf(element)
    topArea.style.backgroundImage = `url('./img/backimg${index + 1}.jpg')`;
  });
});

const jsSmoothScroll = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < jsSmoothScroll.length; i++){
  jsSmoothScroll[i].addEventListener("click", (e) => {
    e.preventDefault();
    let href = jsSmoothScroll[i].getAttribute("href");
    let target = document.getElementById(href.replace("#", ""));
    const rect = target.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const position = rect + offset;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  });
}

const targets = document.querySelectorAll(".pi-graph :not(.pi-graph-inner)");
window.addEventListener("scroll", function () {
  var scroll = window.scrollY;
  var windowHeight = window.innerHeight;
  for (let target of targets) {
    var targetPos = target.getBoundingClientRect().top + scroll;
    if (scroll > targetPos - windowHeight) {
      setTimeout(() => {
        target.classList.add("blue");
      },1500)
    }
  }
});

const fadeInTarget = document.querySelectorAll(".fade-in, .fade-in2");
window.addEventListener("scroll", () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add("scroll-in");
      console.log
    }
  }
});
