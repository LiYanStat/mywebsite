;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});
})(jQuery)

$('#theMenu').css('cursor','pointer');

$(document).on('click', function(event) {
    if (!$(event.target).closest('#theMenu').length) {
      $('#theMenu').removeClass('menu-open');
    }
});
