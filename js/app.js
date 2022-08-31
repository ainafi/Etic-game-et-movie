$(document).ready(function(){
    $('.owl-carousel').owlCarousel();


    // carousel animate
    $('.mg-carousel').mouseenter(()=>{
      $('.mg-carousel').addClass("hover-carousel")
      
      
      
    })
    $('.mg-carousel').mouseleave(()=>{
      $('.mg-carousel').removeClass("hover-carousel")
      
      
 })

    // navbar scroll
    
    $(document).scroll(function () {
      var scroll = $(this).scrollTop();
      var topDist = $(".container").position();
      if (scroll > topDist.top) {
          $('.mynav').addClass('scrollNav')
      } else {
        $('.mynav').removeClass('scrollNav')
      }
})

      $('.visiter').click(function(){
        $(document).scrollTop(379)
      })
      // link nav scroll
      $('.acceuil').click(function(){
        $(document).scrollTop(0)
      })
      $('.service').click(function(){
        $(document).scrollTop(379)
      })
      
        $('.film').click(function(){
          $(document).scrollTop(800)
        })
        $('.jeux').click(function(){
          $(document).scrollTop(1300)
        })
        $('.serie').click(function(){
          $(document).scrollTop(1800)
        })
        $('.manga').click(function(){
          $(document).scrollTop(2300)
        })
        $('.contact').click(function(){
          $(document).scrollTop(2600)
        })
        
       
      

     


  });
