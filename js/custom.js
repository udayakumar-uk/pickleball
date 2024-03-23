
// nav menu

$('#navMenu').on('click', function(){
    $('#navSection').addClass('active');
});

$('#navClose').on('click', function(){
    $('#navSection').removeClass('active');
});


$('.select .dropdown li').click(function(){
    $(this).parent().toggle();
    var text = $(this).attr('rel');
    $(this).parent().prev().find('div').text(text);
})

// wizard end
