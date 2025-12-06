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

      first.classList.add("fade-out");

      setTimeout(() => {
        first.style.display = "none";
        firstPage.style.display = "block";
        secondPage.style.display = "block";
        thirdPage.style.display = "flex"; // flex로 변경!

        setTimeout(() => {
          firstPage.classList.add("fade-in");
          secondPage.classList.add("fade-in");
          thirdPage.classList.add("fade-in");

          // GSAP 애니메이션 시작
          initGsapAnimations();
        }, 50);

        document.body.style.overflow = "auto";
      }, 1000);
    }, 1000);
  }
}

let typingInterval = setInterval(typing, 200);

// GSAP 애니메이션 함수
function initGsapAnimations() {
  // 배경 텍스트 애니메이션
  gsap.from(".bg-text", {
    opacity: 0,
    scale: 0.5,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".third_page",
      start: "top center",
    },
  });

  // 박스들 순차적으로 등장
  gsap.from(".box", {
    opacity: 0,
    y: 100,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".third_page",
      start: "top center",
      markers: true,
    },
  });

  // 박스 호버 애니메이션 강화
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("mouseenter", () => {
      gsap.to(box, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    box.addEventListener("mouseleave", () => {
      gsap.to(box, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}
