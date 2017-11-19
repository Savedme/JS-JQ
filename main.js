/*
먼저 스크롤바를 넣어줄 div 에 style 설정을 해준다.

 

<div id="scrollDiv" style="overflow: auto;"> 
</div>

 

overflow: hidden; /* div 고정된 영역을 벗어나면 보이지 않음. 스크롤 X */
/*overflow: visible; /* div 고정된 영역을 벗어나도 보여. 스크롤 X */
//overflow: scroll; /* div 고정된 영역을 벗어나면 화면 스크롤. */
//overflow-x: scroll; /* div 고정된 영역을 벗어나면 x축으로만 스크롤. */
//overflow-y: scroll; /* div 고정된 영역을 벗어나면 y축으로만 스크롤. */
//overflow: auto; /* div 영역의 값에 따라 자동 스크롤. */

/*
스크롤바 설정

javascript

<script>

var divdiv = document.getElementById("scrollDiv");

divdiv.scrollTop = divdiv.scrollHeight; 

</script>

<body>

<div id="scrollDiv" style="overflow:auto" ></div>

</body>

 */

 var menu_att = document.getElementById("dontScroll");
 menu_att.scrollTop = menu_att.scrollHeight;
