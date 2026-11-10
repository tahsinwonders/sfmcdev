
// skrollr.init({

// });
new WOW().init();
wow = new WOW(
                  {
                  boxClass:     'wow',      // default
                  animateClass: 'animated', // default
                  offset:       0,          // default
                  mobile:       true,       // default
                  live:         true        // default
                }
                );
                wow.init();
 
 
 
// loader timer
$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
        $('html').addClass('loaded');
        // $('#header').addClass('animated fadeInDown');
        // $('.vertical-inner').addClass('animated fadeInLeft');
        // $('.c-animated').addClass('animated fadeIn');
    }, 800);

});
  
 // ADDS ACTIVE CLASS TO LINKS WHEN SECTION WITH THE SAME SELECTOR AS THE HREF IS REACHED (CLASS .LINK IS NEEDED ON ALL <a> TAGS)
     $(window).on("scroll touchmove", function () {
            $('#header,#header hr').toggleClass('tiny', $(document).scrollTop() > 0);
            $('nav').toggleClass('border-none', $(document).scrollTop() > 0);


        });


        // $(document).ready(function () {
        //     $(document).on("scroll", onScroll);
            
        //     //smoothscroll
        //     $('a[href^="#"]').on('click', function (e) {
        //         e.preventDefault();
        //         $(document).off("scroll");
                
        //         $('a').each(function () {
        //             $(this).removeClass('active-nav');
        //         })
        //         $(this).addClass('active-nav');
              
        //         var target = this.hash,
        //             menu = target;
        //         $target = $(target);
        //         $('html, body').stop().animate({
        //             'scrollTop': $target.offset().top+2
        //         }, 500, 'swing', function () {
        //             window.location.hash = target;
        //             $(document).on("scroll", onScroll);
        //         });
        //     });
        // });
        
        function onScroll(event){
            var scrollPos = $(document).scrollTop();
            $('.home .top-nav li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.top-nav li a').removeClass("active-nav");
                    currLink.addClass("active-nav");
                }
                else{
                    currLink.removeClass("active-nav");
                }
            });
        }
      $(document).ready(function () {
        $(window).scroll(function () {
            var y = $(this).scrollTop();
              // offset individual links while scrolling!
            $('.home .top-nav li a').each(function (event) {
                if (y >= $($(this).attr('href')).offset().top -100) {
                    $('.top-nav li a').not(this).removeClass('active-nav');
                    $(this).addClass('active-nav');
                }
            });
        });
      });

 // SMOOTH SCROLLING (with negative scroll of 40 for header)
$(function () {

    $('a.brand, .top-nav li a, #button').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top) - 64
                }, 800);
                return false;
            }
        }
      });
  });





 /* activate the carousel */
$("#modal-carousel").carousel({interval:false});

/* change modal title when slide changes */
$("#modal-carousel").on("slid.bs.carousel", function () {
  $(".modal-title").html($(this).find(".active img, .active div").attr("title"));
});

/* when clicking a thumbnail*/
$(".portfolio .img-responsive").click(function(){
    var content = $(".carousel-inner.portoflio");
    var title = $(".modal-title");

    content.empty();
    title.empty();

    var id = this.id;
    var repo = $("#img-repo .item");
    var repoCopy = repo.clone();
    var active = repoCopy.filter("#" + id).first();

    active.addClass("active");
    title.html(active.find("img, iframe, div").attr("title"));
    content.append(repoCopy);

     // show the modal
    $("#modal-gallery").modal("show");
});
// disable scrolling when modal window pops up
$('#modal-gallery').on('shown', function() {
  $('body').toggleClass('loaded');
});

// STOP VIDEO PLAYER FROM PLAYING WHEN MODAL WINDOW CLOSES
$(".modal").click('hidden.bs.modal', function (e) {
    $(".modal iframe").each(function () {
        $(this).attr("src", $(this).attr("src"));
    });
});


 $(document).ready(function(){
      if ($(window).width() > 1035) {
          var s = skrollr.init();
      }
    });

    //stable jquery banner height 100% on all screen size
    // $(document).ready(function(){
    //   resizeDiv();
    //   });
    //
    //   window.onresize = function(event) {
    //   resizeDiv();
    //   };
    //   function resizeDiv() {
    //   vpw = $(window).width();
    //   vph = $(window).height();
    //   $(".banner, .vertical-content").css({'height': vph + 'px'});
    //   }

// you tube script
      $(document).ready(function() {
          // START Fast & Agile YouTube Embed by Schoberg.net
            $(".youtube").each(function() {
              // Set the BG image from the youtube ID
              $(this).css('background-image', 'url(//i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)');
              // Click the video div
              $(document).delegate('#' + this.id, 'click', function() {
                // Build embed URL
                var iframe_url = "//www.youtube.com/embed/" + this.id + "?autoplay=0&autohide=1";
                // Grab extra parameters set on div
                if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
                // Build iframe tag
                var iframe = $('<iframe/>', {'allowfullscreen':'allowfullscreen', 'frameborder': '0', 'src': iframe_url})
                // Replace the YouTube thumbnail with YouTube HTML5 Player
                $(this).append(iframe);
              });// /click
            }); // /each video
          // END Fast & Agile YouTube Embed by Schoberg.net
          }); // /document ready

    //swipe jquery script for mobile
$(document).ready(function() {
       $("#carousel").swiperight(function() {
          $(this).carousel('prev');
          });
       $("#carousel").swipeleft(function() {
          $(this).carousel('next');
     });
  });
