  
  // menu 

      $('.menu-icon').click(function() {
        $(this).toggleClass('open');
        $(".click_menu").toggleClass('open');
        $("body").toggleClass('open');
    });
    $(window).scroll(function() {
    if ($(this).scrollTop() > 0){  
        $('body').addClass("sticky");
    }
    else{
        $('body').removeClass("sticky");
    }
});
              $(document).ready(function(){ 
        $(window).scroll(function(){ 
            if ($(this).scrollTop() > 100) { 
                $('#scroll').fadeIn(); 
            } else { 
                $('#scroll').fadeOut(); 
            } 
        }); 
        $('#scroll').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 600); 
            return false; 
        }); 
    });