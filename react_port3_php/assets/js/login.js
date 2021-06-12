window.onload = function () {
  //main
  function start(callback) {
    setTimeout(() => {
      //loader는 fixed z-index999 전체고정 height:100% loaderactive붙이면 width 100%
      //loader active가 애니메이션 들어간 상태,

      // 1. start함수 실행되면 loader active 삭제되고 loader가 된 후, console.log실행
      //2. id main에 page-main class 추가되고 id root에 lock 제거 후, console.log 실행
      //3. mainTitle에서 1초뒤 실행하는 함수 실행, portTime에서 1초뒤 실행하는 함수실행
      document.querySelector(".loader").classList.remove("loader--active");
      console.log("1차 호출");
      callback();
    }, 200);
  }

  function second() {
    setTimeout(() => {
      //   document.getElementById("main").classList.add("page-main");
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
  //----sec1 animation
  function mainTitle() {
    let tl = gsap.timeline();
    tl.to("#header", { duration: 0.4, top: 0 });
  }
}; //window.onload
