<?php
  include '../connect/session.php';
  include '../connect/connect.php';
  // include '../connect/checkSession.php';
?>
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>viewBoard</title>

  <!--icon-->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <!--font-->
  <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Raleway+Dots&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
    rel="stylesheet">
  <!--style-->
  <link rel="stylesheet" href="../assets/css/reset.css" />
  <link rel="styleshhet" href="../asstes/css/header.css" />
  <link rel="stylesheet" href="../assets/css/footer.css" />
  <link rel="stylesheet" href="../assets/css/board.css" />
  <!--//favicon-->
  <link rel="shortcut icon" href="../assets/img/favicon_port.ico" />

  <!--script-->
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
  <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script defer src="../assets/js/header.js"></script>
  <script defer src="../assets/js/board.js"></script>
</head>

<body>
<main id="root">
    <!--loader-->
    <!-- <div class="loader loader--active">
      <div class="loader__tile"></div>
      <div class="loader__tile"></div>
      <div class="loader__tile"></div>
      <div class="loader__tile"></div>
      <div class="loader__tile"></div>
    </div> -->
    <!--//loader-->

  <!-- <div id="scroll">0</div> -->

  <!--header-->
  <div id="ham">
        <span class="firstbar"></span>
        <span class="secondbar"></span>
        <span clas="thirdbar"></span>
      </div>
      <!--//ham-->
      <div id="hamLIST">
        <ul>
          <li><a href="../pages/about.html" class="page__click">About</a></li>
          <li>
            <a href="../pages/website.html" class="page__click">Website</a>
          </li>
          <li><a href="../pages/css.html" class="page__click">Css</a></li>
          <li>
            <a href="../pages/javascript.html" class="page__click"
              >Javascript</a
            >
          </li>
          <li>
            <a
              href="http://minji2260.dothome.co.kr/react_port3_php//board/Board.php"
              class="page__click3"
              >Board</a
            >
          </li>
          <li>
            <span
              ><a
                href="http://minji2260.dothome.co.kr/react_port3_php//board/Board.php"
                class="page__click2"
                >SignIn</a
              ></span
            >
            <span
              ><a
                href="http://minji2260.dothome.co.kr/react_port3_php//sign/SignIn.php"
                class="page__click2"
                >LogIn</a
              ></span
            >
            <span
              ><a
                href="http://minji2260.dothome.co.kr/react_port3_php/pages/contact.html"
                class="page__click"
                >Contact</a
              ></span
            >
          </li>
        </ul>
      </div>

      <!--//hamLIST-->
      <header id="header">
        <nav class="nav">
          <ul>
            <li><a href="../pages/about.html">Portfolio</a></li>
            <li><a href="../pages/about.html" class="page__click">About</a></li>
            <li>
              <a href="../pages/website.html" class="page__click">Website</a>
            </li>
            <li><a href="../pages/css.html" class="page__click">Css</a></li>
            <li>
              <a href="../pages/javascript.html" class="page__click"
                >Javascript</a
              >
            </li>
            <li>
              <a
                href="http://minji2260.dothome.co.kr/react_port3_php//board/Board.php"
                class="page__click3"
                >Board</a
              >
            </li>
            <li>
              <span
                ><a
                  href="http://minji2260.dothome.co.kr/react_port3_php//sign/SignIn.php"
                  class="page__click2"
                  >SignIn</a
                ></span
              >
              <span
                ><a
                  href="http://minji2260.dothome.co.kr/react_port3_php//sign/LogIn.php"
                  class="page__click2"
                  >LogIn</a
                ></span
              >
              <span
                ><a
                  href="http://minji2260.dothome.co.kr/react_port3_php/pages/contact.html"
                  class="page__click"
                  >Contact</a
                ></span
              >
            </li>
          </ul>
        </nav>
      </header>

  <!--//header-->
      <section id="board-cont">
        <div class="container">
        <div class="listBoard">
                <h2>게시판입니다.</h2>
                <div class="viewBoard">
                  <div class="viewTitle">
                    <!-- <table class="table">
                        <colgroup>
                            <col style="width: 20%">
                            <col style="width: 80%">
                        </colgroup>
                        <tbody> -->
                
    <?php
      //버그때문에 하단과 같은if 문
      if(isset($_GET['boardID'])  && (int) $GET['boardID'] >0);
      $boardID = $_GET['boardID'];
      $sql = "SELECT b.boardTitle , b.boardContent , m.youNickName , b.regTime ";
      $sql .=  "FROM myBoard1 b JOIN myMember1 m ON (b.memberID = m.memberID) ";
      //join문에서 조건한번더달기
      $sql .= "WHERE b.boardID = {$boardID}";
      $result = $dbConnect -> query($sql);

      if($result){
        $boardInfo = $result -> fetch_array(MYSQLI_ASSOC);
        echo "<div class='title'><h3>제목</h3><p>".$boardInfo['boardTitle']."</p></div>";
        echo "<div class='author'><h3>글쓴이</h3><p>".$boardInfo['youNickName']."</p></div>";
        ?>
      </div>
      <div class="viewCont">
        <?php
        echo "<div class='date'><span>등록일</span><p>".date('Y-m-d H:i', $boardInfo['regTime'])."</p></div>";
        echo "<div class='cont'><h3>내용</h3><p>".$boardInfo['boardContent']."</p></div>";
      }
    ?>                                
                  </div>
                        <!-- </tbody>
                    </table> -->
                </div>
                <div class="listSearch">
                  <div class="search">
                    <a href="Board.php" class="form-btn black mt20">목록보기</a>
                  </div>
                </div>
            </div>
        </div>
    </section>
    <!--//board-cont-->
  <?php
    include '../component/footer.php';
  ?>
<!--//footer-->
</section>
<!--//contents-->
</main>
</body>

</html>