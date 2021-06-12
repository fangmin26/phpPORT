document.querySelectorAll(".split").forEach((elem) => {
  let splitText = elem.innerText;
  let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
  splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
  elem.innerHTML = splitWrap;
  elem.setAttribute("aria-label", splitText);
});
window.onload = function () {
  //main
  function start(callback) {
    setTimeout(() => {
      if (
        this.window.location.href ===
        "http://minji2260.dothome.co.kr/react_port3_php//board/Board.php"
      ) {
        document.querySelector(".loader").classList.remove("loader--active");
      } else {
        document.querySelector(".loader").style.display = "none";
      }

      console.log("1차 호출");
      callback();
    }, 200);
  }

  function second() {
    setTimeout(() => {
      document.getElementById("root").classList.remove("lock");
      console.log("2차 호출");
      mainTitle();
    }, 400);
  }

  start(function () {
    second();
  });

  //page__click classList add(html파일 loader)
  document.querySelectorAll(".page__click").forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();

      const href = elem.innerText.toLowerCase();

      document.querySelector(".loader").classList.add("loader--active");
      setTimeout(() => {
        window.location.href =
          "http://minji2260.dothome.co.kr/react_port3_php/pages/" +
          href +
          ".html";
      }, 2400);
    });
  });

  //page__click2 classList add(signin,login php파일 loader)
  document.querySelectorAll(".page__click2").forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();

      const href2 = elem.innerText;

      document.querySelector(".loader").classList.add("loader--active");
      setTimeout(() => {
        window.location.href =
          "http://minji2260.dothome.co.kr/react_port3_php//sign/" +
          href2 +
          ".php";
      }, 2400);
    });
  });

  //page__click3 classList add(board php파일 loader)
  document.querySelectorAll(".page__click3").forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();

      const href3 = elem.innerText;

      document.querySelector(".loader").classList.add("loader--active");
      setTimeout(() => {
        window.location.href =
          "http://minji2260.dothome.co.kr/react_port3_php//board/" +
          href3 +
          ".php";
      }, 2400);
    });
  });

  //sec1 animation
  gsap.set(".sec1 .title h2 span", {
    opacity: 0,
    y: 150,
    display: "inline-block",
    "min-width": 20,
    rotation: "-20deg",
  });
  gsap.set(".sec1 .title p", { opacity: 0, x: 50, display: "inline-block" });

  function mainTitle() {
    let tl = gsap.timeline();
    tl.to("#header", { duration: 0.4, top: 0 });
    tl.to(
      ".sec1 .title h2 span",
      { duration: 0.4, opacity: 1, y: 0, stagger: 0.02, rotation: 0 },
      "+=0.2"
    );
    tl.to(".sec1 .title p", {
      duration: 0.4,
      opacity: 1,
      x: 0,
      ease: "power4.out",
    });
  }
}; //window.onload
