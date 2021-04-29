const body = $('body')
const nuts = $("#category-1-1")

$(document).ready(function(){
    $("#category-1-1").click(function(){
        $(this).hide();
    });
});

let flag = true;

$("#category-1").on("click", function () {
  if (flag) {
    nuts.fadeIn("slow");
    flag = false;
  } else {
    nuts.fadeOut("slow");
    flag = true;
  }
});
