$(function () {
  //scroll값
  $(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    $("#scroll").text(Math.ceil(wScroll));
  });
  //window scroll시 네비축소
  $(window).scroll(function () {
    let mainHeader = $("#header"),
      navLi = $(".nav >ul> li >a"),
      logo = $(".nav li:nth-of-type(1) > a"),
      wScroll = $(this).scrollTop();
    /*shrink*/
    if (wScroll > 100) {
      if (!navLi.hasClass("shrink")) {
        navLi.addClass("shrink");
        logo.css("font-size", "2.2rem");
      }
    } else {
      if (navLi.hasClass("shrink")) {
        navLi.removeClass("shrink");
        logo.css("font-size", "3.2rem");
      }
    }
  });

  //#ham 클릭시 애니메이션
  $("#ham").click(function () {
    $(this).toggleClass("active");
    $("#hamLIST").toggleClass("active");
  });
}); //jquery

// window.onload = function () {
//   let href1 =
//     "http://minji2260.dothome.co.kr/react_port3_php//pages/about.html";
//   let href2 =
//     "http://minji2260.dothome.co.kr/react_port3_php//pages/website.html";
//   let href3 = "http://minji2260.dothome.co.kr/react_port3_php//pages/css.html";
//   let href4 =
//     "http://minji2260.dothome.co.kr/react_port3_php//pages/javascript.html";
//   let href5 =
//     "http://minji2260.dothome.co.kr/react_port3_php//pages/board.html";
//   let href6 = "http://minji2260.dothome.co.kr/react_port3_php//sign/SignIn.php";
//   let href7 = "http://minji2260.dothome.co.kr/react_port3_php//sign/LogIn.pnp";
//   let href8 =
//     "http://minji2260.dothome.co.kr/react_port3_php//pages/contact.html";

//   document.querySelectorAll(".page__click").forEach((elem) => {
//     elem.addEventListener("click", (e) => {
//       e.preventDefault();
//       console.log(document.location.href);
//     });
//   });
//}; //javascript
