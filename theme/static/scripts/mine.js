
$(document).ready(function() {

	$("#toc").sticky({
		topSpacing:30,
		widthFromWrapper: false
	});

	$('#side-nav ul li:first-child a').addClass("active")

	$('#side-nav ul li a').on("click",function(e){
		e.preventDefault();
		var target = ($(this).attr('href')).substr(1);
		$('body,html').animate({
          scrollTop: $("#"+target).offset().top
        }, 1000,'swing', function(){
        	window.location.hash = "#"+target;
        });
		$('#side-nav ul li a').removeClass("active");		
		$(this).addClass("active");

	});	

});