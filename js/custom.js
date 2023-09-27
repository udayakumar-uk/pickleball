
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



// wizard area

$("#wizard").steps({
  headerTag: "h3",
  bodyTag: "section",
  transitionEffect: "fade",
  enableAllSteps: true,
  transitionEffectSpeed: 100,
  labels: {
      finish: "Submit",
      next: "Next",
      previous: "Prev"
  }
});
$('.wizard > .steps li a').click(function(){
  $(this).parent().addClass('checked');
$(this).parent().prevAll().addClass('checked');
$(this).parent().nextAll().removeClass('checked');
});
// Custome Jquery Step Button
$('.forward').click(function(){
  $("#wizard").steps('next');
})
$('.backward').click(function(){
    $("#wizard").steps('previous');
})

$('.select .dropdown li').click(function(){
    $(this).parent().toggle();
    var text = $(this).attr('rel');
    $(this).parent().prev().find('div').text(text);
})

// wizard end
