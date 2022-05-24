/* MOBILE VERSION => CHANGE IMAGE */

var bodyWidth = $(window).width();

if (bodyWidth < 490) {
    $('.header').addClass('header_mob');
}

var cssActive = {
    'transform': 'skewX(-15deg) translateX(400px)'
}
var cssInactive = {
    'transform': 'skewX(-15deg) translateX(-100px)'
}
$('.hidden_button_text').click(function() {
    $('.hidden_text_content').css('display', 'block')
})
setInterval(() => {
    $('.button_mask').css(cssActive)

    setTimeout(() => {
        $('.button_mask').css(cssInactive)
    }, 4000);
}, 6000);


/* SMOOTH SCROLL */

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
});

$('.hiddend__text').click(function() {
    $(this).toggleClass('faq_active');
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 300) {
        $('.footer__body_bottom').css('transform', 'translate3d(0, 0%, 0)')
        $('.popup__notify').css('bottom', '18%');

        if (bodyWidth < 1024) {
            $('.popup__notify').css('bottom', '14%');
        }
        if (bodyWidth < 490) {
            $('.popup__notify').css('bottom', '24%');
        }
    } else {
        $('.footer__body_bottom').css('transform', 'translate3d(0, 110%, 0)')
        $('.popup__notify').css('bottom', '2%');
    }
});

var number = 740;

setInterval(() => {
    number++;
    var number1 = number.toString().substr(0, 1)
    var number2 = number.toString().substr(1, 1)
    var number3 = number.toString().substr(2, 3)
    $('#number3').text(number3)
    $('#number2').text(number2)
    $('#number1').text(number1)
}, 1500);