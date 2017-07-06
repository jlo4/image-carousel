$(document).ready(function(){
  $(".next").on("click", function(e){
    var showImg = $(".show");
    var nextImg = showImg.next();
    if(nextImg.length === 0){
      nextImg = $(".carousel img").first();
    }
    showImg.removeClass("show").addClass("hide").css("z-index", -20);
    nextImg.addClass("show").removeClass("hide").css("z-index", 10);
    $(".carousel img").not([showImg, nextImg]).css("z-index", 1);

    e.preventDefault();
  });

  $(".previous").on("click", function(e){
    var showImg = $(".show");
    var prevImg = showImg.prev();
    if(prevImg.length === 0){
      prevImg = $(".carousel img").last();
    }
    showImg.removeClass("show").addClass("hide").css("z-index", -20);
    prevImg.addClass("show").removeClass("hide").css("z-index", 10);
    $(".carousel img").not([showImg, prevImg]).css("z-index", 1);

    e.preventDefault();
    });
});
