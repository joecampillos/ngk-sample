$('li.nav-item.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

// Accordion
$(document).ready(function() {
	$(".first-set > a").on("click", function() {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this).siblings(".first-accordion-content").slideUp(200);
		$(".first-set > a i").removeClass("fa fa-angle-up").addClass("fa fa-angle-down");
	} else {
	    $(".first-set > a i")
	        .removeClass("fa fa-angle-up")
	        .addClass("fa fa-angle-down");
		    $(this)
		        .find("i")
	        .removeClass("fa fa-angle-down")
	        .addClass("fa fa-angle-up");
		    $(".first-set > a").removeClass("active");
		    $(this).addClass("active");
		    $(".first-accordion-content").slideUp(200);
		    $(this)
	        .siblings(".first-accordion-content")
	        .slideDown(200);
		}
	});
});

$(document).ready(function() {
	$(".second-set > .faqSecondaryLink").on("click", function() {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this).siblings(".second-accordion-content").slideUp(300);
		$(".second-set > .faqSecondaryLink .faqArrow").removeClass("fa fa-angle-up").addClass("fa fa-angle-down");
	} else {
	    $(".second-set > .faqSecondaryLink .faqArrow")
	        .removeClass("fa fa-angle-up")
	        .addClass("fa fa-angle-down");
		    $(this)
		        .find(".faqArrow")
	        .removeClass("fa fa-angle-down")
	        .addClass("fa fa-angle-up");
		    $(".second-set > .faqSecondaryLink").removeClass("active");
		    $(this).addClass("active");
		    $(".second-accordion-content").slideUp(300);
		    $(this)
	        .siblings(".second-accordion-content")
	        .slideDown(300);
		}
	});
});