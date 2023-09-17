
// nav menu

$('#navMenu').on('click', function(){
    $('#navSection').addClass('active');
});

$('#navClose').on('click', function(){
    $('#navSection').removeClass('active');
});


// slick slider


$(document).on('ready', function() {
    $("#bannerSlider").slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
    //   prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><span class="material-symbols-rounded"> keyboard_arrow_left </span></button>',
      prevArrow: ' ',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button"><span class="material-symbols-rounded"> keyboard_arrow_right </span></button>',
      cssEase: 'ease',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
     ]
    });


    $("#matchMakingSlider").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><span class="material-symbols-rounded"> arrow_back </span></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><span class="material-symbols-rounded"> arrow_forward </span></button>',
        cssEase: 'ease',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
       ]
      });
});







$(document).ready(function(){
    
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
  
  setProgressBar(current);
  
  $(".next").click(function(){
      
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      
      //show the next fieldset
      next_fs.show(); 
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
  
              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              next_fs.css({'opacity': opacity});
          }, 
          duration: 500
      });
      setProgressBar(++current);
  });
  
  $(".previous").click(function(){
      
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
      
      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
      
      //show the previous fieldset
      previous_fs.show();
  
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
  
              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              previous_fs.css({'opacity': opacity});
          }, 
          duration: 500
      });
      setProgressBar(--current);
  });
  
  function setProgressBar(curStep){
      var percent = parseFloat(100 / steps) * curStep;
      percent = percent.toFixed();
      $(".progress-bar")
        .css("width",percent+"%")   
  }
  
  $(".submit").click(function(){
      return false;
  })
      
  });