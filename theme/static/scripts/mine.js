var wdw = $(window);
var hash = window.location.hash;

window.location.hash = ''; // avoid going to anchor

wdw.on('load', function() {
  var sideContent = $('#side-content');
  var size = 24; // magic number !

  sideContent.find('h2:last').add('h2:last ~ *').each(function() {
    size += $(this).outerHeight(true);
  });
  sideContent.css('margin-bottom', wdw.height() - size);

  $('#toc').sticky({topSpacing:30});

  var navs = $('#side-nav ul li a');
  var navItemsMap = {};

  var navItems = navs.map(function(_, item) {
    var anchor = item.getAttribute('href');
    var anchorItem = $(anchor);
    var navItem = {
      'nav': $(item),
      'anchor': {'name': anchor, 'item': anchorItem},
      'pos': anchorItem.offset().top - 80
    };
    navItemsMap[anchor] = navItem;
    return navItem;
  });


  wdw.scroll(function(){
    var nav;
    var pos = wdw.scrollTop();
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
