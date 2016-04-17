var $window = $(window);
var hash = window.location.hash;

window.location.hash = ''; // avoid going to anchor

$window.on('load', function() {

  var content = $('#content');
  var size = 24; // magic number !

  $('.burger').on('click',function(){
    $('#banner nav').toggleClass('opened');
    $('.cacheMenu').fadeToggle();
  });

  $('.cacheMenu').on('click',function(){
    $('#banner nav').toggleClass('opened');
    $('.cacheMenu').fadeToggle();
  });

  // nav is not displayed on small screens so no need to continue
  if (window.matchMedia('(max-width: 40rem)').matches) {
    return;
  }
  content.find('h2:last').add('h2:last ~ *').each(function() {
    size += $(this).outerHeight(true);
  });
  content.css('margin-bottom', $window.height() - size);

  $('#toc').sticky({topSpacing:30});

  var navs = $('#side-nav ul li a');
  var navItemsMap = {};

  var navItems = navs.map(function(_, item) {
    var anchor = item.getAttribute('href');
    var anchorItem = $(anchor);
    var navItem = {
      'nav': $(item),
      'anchor': {'name': anchor, 'item': anchorItem},
      'pos': anchorItem.offset().top
    };
    navItemsMap[anchor] = navItem;
    return navItem;
  });


  $window.scroll(function(){
    var nav;
    var pos = $window.scrollTop();
    $.each(navItems, function(_, item) {
      return pos > item.pos - 1 ?  nav = item.nav : false;
    });
    if (nav) {
      navs.removeClass('active');
      nav.addClass('active');
    }
  });

  if (hash) {
    goTo(hash);
  } else {
    navs.first().addClass('active');
  }

  navs.on('click',function(e){
    e.preventDefault();
    goTo(e.currentTarget.getAttribute('href'));
  });

  function goTo(hash) {
    $('body,html').animate(
      {scrollTop: navItemsMap[hash].pos}, 1000, 'swing',
      function() {
        window.location.hash = hash;
      }
    );
  }

});

