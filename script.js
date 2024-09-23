let loader = document.querySelector(".loader");
let menu = document.querySelector(".nav>i");
let close = document.querySelector(".icon>i");
let crsr = document.querySelector(".cursor");
let mini = document.querySelector(".minicircle");

function loaderanimation() {
  menu.addEventListener("click", () => {
    var tl = gsap.timeline();
    tl.to(loader, {
      y: 0,
      duration: 0.5,
      ease: "Expo.easeInOut",
    }).to(".overlay>h1", {
      y: 0,
      duration: 0.5,
      ease: "Expo.easeInOut",
    });
  });
  close.addEventListener("click", () => {
    var tl = gsap.timeline();
    tl.to(".overlay>h1", {
      y: "100%",
      duration: 0.5,
      ease: "Expo.easeInOut",
    });
    tl.to(loader, {
      y: "-100%",
      duration: 0.5,
      ease: "Expo.easeInOut",
    });
  });
}

function movingcursor() {
  window.addEventListener("mousemove", (dets) => {
    gsap.to(crsr, {
      x: dets.clientX - 15 + "px",
      y: dets.clientY - 15 + "px",
      duration: 0.2,
      ease: Expo,
    });
  });
}

function cursorscaling() {
  menu.addEventListener("mouseenter", () => {
    gsap.to(crsr, {
      scale: 2,
    });
  });

  menu.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      scale: 1,
    });
  });

  close.addEventListener("mouseenter", () => {
    gsap.to(crsr, {
      scale: 2,
    });
  });

  close.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      scale: 1,
    });
  });
}

loaderanimation();
movingcursor();
cursorscaling();

let elem = document.querySelectorAll(".box>.elem");

elem.forEach((value) => {
  value.addEventListener("mouseenter", () => {
    var att = value.getAttribute("data-image");

    crsr.style.backgroundImage = `url(${att})`;
    crsr.style.height = "300px";
    crsr.style.width = "300px";
    crsr.style.borderRadius = "10px";
  });

  value.addEventListener("mouseleave", () => {
    crsr.style.height = "30px";
    crsr.style.width = "30px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = "none";
  });
});
