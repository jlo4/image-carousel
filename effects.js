var images = [
              '<img class="show" src="photos/colorgame.png" alt="">',
              '<img class="show" src="photos/colorpad.png" alt="">',
              '<img class="show" src="photos/quote_gen.png" alt="">',
              '<img class="show" src="photos/survey_form.png" alt="">',
              '<img class="show" src="photos/tribute.png" alt="">'
            ]


$(document).ready(function(){
  var i = 0;

  $(".carousel").append(images[i]);

  $(".next").on("click", function(e){
    $("img").remove();
    i++;
    console.log(i);
    if(i < 5){
    $(".carousel").append(images[i]);
  } else {
    $(".carousel").append(images[0]);
    i = 0;
  }
    e.preventDefault();
  });

  $(".previous").on("click", function(e){
    $("img").remove();
    i--;
    console.log(i);
    if(i > -1){
      $(".carousel").append(images[i]);
    } else {
      $(".carousel").append(images[images.length - 1])
      i = images.length - 1;
    }
    e.preventDefault();
  });
  // $(".next").on("click", function(e){
  //   var showImg = $(".show");
  //   var nextImg = showImg.next();
  //   if(nextImg.length === 0){
  //     nextImg = $(".carousel img").first();
  //   }
  //   showImg.removeClass("show").addClass("hide").css("z-index", -20);
  //   nextImg.addClass("show").removeClass("hide").css("z-index", 10);
  //   $(".carousel img").not([showImg, nextImg]).css("z-index", 1);
  //
  //   e.preventDefault();
  // });
  //
  // $(".previous").on("click", function(e){
  //   var showImg = $(".show");
  //   var prevImg = showImg.prev();
  //   if(prevImg.length === 0){
  //     prevImg = $(".carousel img").last();
  //   }
  //   showImg.removeClass("show").addClass("hide").css("z-index", -20);
  //   prevImg.addClass("show").removeClass("hide").css("z-index", 10);
  //   $(".carousel img").not([showImg, prevImg]).css("z-index", 1);
  //
  //   e.preventDefault();
  //   });
});
