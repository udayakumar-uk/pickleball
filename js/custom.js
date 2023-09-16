
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


