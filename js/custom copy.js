const content = "portfolio";
const text = document.querySelector(".text");
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content[i++];
    text.innerHTML += txt;
  } else {
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
