
//smooth scrolling when portfolio button is clicked
$(document).on('click', 'a[href^="#portfolio"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
//smooth scrolling when contact button is clicked
$(document).on('click', 'a[href^=".footer"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/* reimplement soon
//down button shake effect when mouseover
$(document).ready(function(){
$(".fa-angle-double-down").mouseover(function(){
    $(this).effect("shake",{direction: "down", times: 2, distance: 4}, 400);
});
});*/
