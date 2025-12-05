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
    line1.textContent += txt; // innerHTML 대신 textContent 사용

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
        thirdPage.style.display = "block";

        setTimeout(() => {
          firstPage.classList.add("fade-in");
          secondPage.classList.add("fade-in");
          thirdPage.classList.add("fade-in");
        }, 50);

        document.body.style.overflow = "auto";
      }, 1000);
    }, 1000);
  }
}

let typingInterval = setInterval(typing, 200);
