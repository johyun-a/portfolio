const line1Content = "HYUNA'S";
const line2Content = "portfolio";
const line1 = document.querySelector(".line1");
const line2Text = document.querySelector(".text");
const blink = document.querySelector(".blink");
let i = 0;
let j = 0;

function typing() {
  // 첫 번째 줄 타이핑
  if (i < line1Content.length) {
    let txt = line1Content[i++];
    line1.textContent += txt;
    // 커서를 line1으로 임시 이동
    line1.appendChild(blink);
  }
  // 첫 번째 줄 완료 후 두 번째 줄 타이핑
  else if (j < line2Content.length) {
    // 첫 번째 완료되면 커서를 원래 자리로
    if (j === 0) {
      document.querySelector(".line2").appendChild(blink);
    }
    let txt = line2Content[j++];
    line2Text.textContent += txt;
  }
  // 모두 완료
  else {
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

// gsap
// gsap.registerPlugin(ScrollTrigger);
// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".third_page",
//       start: "0% 100%",
//       end: "0% 20%",
//       scrub: 2,
//       markers: true,
//     },
//   })
//   .fromTo(".third_page .bg-text", { x: "-100%" }, { x: "0%", ease: "none" }, 0);
// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".project-boxes",
//       start: "0% 100%",
//       end: "50% 100%",
//       scrub: 5,
//       markers: true,
//     },
//   })
//   .to("body", { background: "#000", color: "#fff" }, 0)
//   .to(".third_page .bg-text", {
//     position: "fixed",
//     left: 0,
//     top: 0,
//     width: "100%",
//   });
// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".project-boxes",
//       start: "100% 100%",
//       end: "100% 0%",
//       scrub: 2,
//       markers: true,
//     },
//   })
//   .to(".third_page .bg-text", { x: "-100%", opacity: "0" }, 0);
// gsap
gsap.registerPlugin(ScrollTrigger);

// 1. 배경 텍스트 왼쪽에서 등장
gsap.fromTo(
  ".third_page .bg-text",
  { x: "-100%", opacity: 0 },
  {
    x: "0%",
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".project-boxes",
      start: "top 80%",
      end: "top 30%",
      scrub: 2,
      markers: true,
    },
  }
);

// 2. 배경 텍스트 고정
gsap.to(".third_page .bg-text", {
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  scrollTrigger: {
    trigger: ".project-boxes",
    start: "top center",
    end: "bottom 20%",
    scrub: 1,
    markers: true,
  },
});

// 3. 배경 텍스트 사라짐
gsap.to(".third_page .bg-text", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".project-boxes",
    start: "bottom 50%",
    end: "bottom 20%",
    scrub: 2,
    markers: true,
  },
});
