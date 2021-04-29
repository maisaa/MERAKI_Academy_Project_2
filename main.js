const body = $('body')
const nuts = $("#category-2")

$(document).ready(function(){
    $("#category-1").click(function(){
        $(this).hide();
    });
});

let pp1 = true;

$("#category-1").on("click", function () {
  if (pp1) {
    nuts.fadeIn("slow");
    pp1 = false;
  } else {
    nuts.fadeOut("slow");
    pp1 = true;
  }
});
