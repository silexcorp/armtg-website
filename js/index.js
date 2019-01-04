var scrolled;
$(window).scroll(() => {
    let scroll = $(window).scrollTop();
    if (scroll > 0) {
        $('header').addClass('scrolled');
		$('section').addClass('active');
		document.body.style.height = "100%";
		document.getElementById('scroll').remove();
		scrolled = true;
    } else if (scroll == 0 && !scrolled) {
        $('header').removeClass('scrolled');
    }
});

$('#scroll').click(function(e){
  var $target = $('html,body');
  $target.animate({scrollTop: $target.height()}, 1);
});