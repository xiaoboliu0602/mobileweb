/* jQuery.js */

document.write("测试 JavaScript 外部脚本！<br>");

$(document).ready(function(){

    // 编写jQuery方法...
 
 });

 $(document).on("pagecreate","#pagetwo",function(){
    $("#p1").on("tap",function(){         // 点击
        $(this).hide();
    });
    $("#p2").on("taphold",function(){     // 长按
        $(this).hide();
    });
    $("#p3").on("swipe",function(){       // 滑动
        $("span").text("滑动检测!");
    });
    $("#p3").on("swipeleft",function(){   // 向左滑动
        alert("您向左滑动!");
    });
    $("#p3").on("swiperight",function(){  // 向右滑动
        alert("向右滑动!");
    });

    $(window).on("orientationchange",function(){
        if(window.orientation == 0)
        {
          $("p").text("方向已经变为 portrait!").css({"background-color":"yellow","font-size":"300%"});
        }
        else
        {
          $("p").text("方向已经变为 landscape!").css({"background-color":"pink","font-size":"200%"});
        }
    });
  });