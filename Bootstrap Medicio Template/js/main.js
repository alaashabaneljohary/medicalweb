
let featuredOffset = $('#Featured').offset().top;
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if(wScroll > featuredOffset) {
        $('#main-nav').css('backgroundColor' , '#072227');
        $('#main-nav ,.nav-link').css('color' , '#fff')
    }
    else {
        $('#main-nav').css('backgroundColor' , '#e0e0e0');
        $('#main-nav ,.nav-link').css('color' , '#000 ')
    }
})

$('.img-item').click(function(){
    var imgSrc = $(this).attr('src');
    $('#mainImage').attr('src' , imgSrc)
})
$(document).ready(function(){
    $('#loading').fadeOut(4000)
})