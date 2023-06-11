$(document).mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.clientX,
        top: e.clientY,
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.clientX, 
          top: e.clientY, 
        });
    }, 120);
  })
  
  $('a').on({
    mouseenter: function () { 
      $('.cursor').addClass('big'); 
    },
    mouseleave: function () { 
      $('.cursor').removeClass('big'); 
    }
  });
  
  