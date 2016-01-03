
$(document).ready(function() {

	$('#toc').sticky({
		topSpacing:30,
		widthFromWrapper: false
	});

	$('#side-nav ul li:first-child a').addClass('active')

	$('#side-nav ul li a').on('click',function(e){
		e.preventDefault();
		var target = ($(this).attr('href')).substr(1);
		$('body,html').animate({
          scrollTop: $('#'+target).offset().top
        }, 1000,'swing', function(){
        	window.location.hash = '#'+target;
        });
		$('#side-nav ul li a').removeClass('active');		
		$(this).addClass('active');

	});	

	var lastId,
	    sideMenu = $('#toc ul'),
	    // All list items
	    menuItems = sideMenu.find('a'),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr('href'));
	      if (item.length) { return item; }
	    });


	// Bind to scroll
	$(window).scroll(function(){

	   // Get container scroll position
	   var fromTop = $(this).scrollTop() + 80;

	   if (fromTop > $('#side-content h2').offset().top) {
	   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });

		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : '';

		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       //window.location.hash = '#'+id;
		       menuItems
		         .removeClass('active')
		         .filter('[href=#'+id+']').addClass('active');

		   }               
		}
	});

});

