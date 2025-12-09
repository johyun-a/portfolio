const line1Content = "HYUNA'S";
const line2Content = "portfolio";
const line1 = document.querySelector(".line1");
const line2Text = document.querySelector(".text");
const blink = document.querySelector(".blink");
let i = 0;
let j = 0;

function typing() {
  if (i < line1Content.length) {
    let txt = line1Content[i++];
    line1.textContent += txt;
    line1.appendChild(blink);
  } else if (j < line2Content.length) {
    if (j === 0) {
      document.querySelector(".line2").appendChild(blink);
    }
    let txt = line2Content[j++];
    line2Text.textContent += txt;
  } else {
    clearInterval(typingInterval);
    setTimeout(() => {
      const first = document.querySelector(".first");
      const firstPage = document.querySelector(".first_page");
      const secondPage = document.querySelector(".second_page");
      const thirdPage = document.querySelector(".third_page");
      const fourthPage = document.querySelector(".fourth_page");

      first.classList.add("fade-out");

      setTimeout(() => {
        first.style.display = "none";
        firstPage.style.display = "block";
        secondPage.style.display = "block";
        thirdPage.style.display = "block";
        fourthPage.style.display = "block";

        setTimeout(() => {
          firstPage.classList.add("fade-in");
          secondPage.classList.add("fade-in");
          thirdPage.classList.add("fade-in");
          fourthPage.classList.add("fade-in");
        }, 100);

        document.body.style.overflow = "auto";
      }, 1000);
    }, 1000);
  }
}

let typingInterval = setInterval(typing, 200);

gsap.registerPlugin(ScrollTrigger);

// 초기 위치 강제 설정
gsap.set(".third_page .bg-text", {
  left: "-100%",
  opacity: 0,
});

// 배경 텍스트 애니메이션
ScrollTrigger.create({
  trigger: ".project-boxes",
  start: "top 90%",
  end: "bottom top",
  onEnter: () => {
    gsap.to(".third_page .bg-text", {
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
    });
  },
  onLeave: () => {
    gsap.to(".third_page .bg-text", {
      left: "150%",
      opacity: 0,
      duration: 1,
    });
  },
  onEnterBack: () => {
    gsap.to(".third_page .bg-text", {
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 1,
      duration: 1,
    });
  },
  onLeaveBack: () => {
    gsap.to(".third_page .bg-text", {
      left: "-100%",
      opacity: 0,
      duration: 0.8,
    });
  },
  markers: true,
});
