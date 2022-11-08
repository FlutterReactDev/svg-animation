$(document).ready(function(){
  
  $("#menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
})

    $('ul.tabs2 li').click(function(){
        var tap_id = $(this).attr('data-tap');

        $('ul.tabs2 li').removeClass('current');
        $('.tab-content2').removeClass('current');

        $(this).addClass('current');
        $("#"+tap_id).addClass('current');
})


// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs3 li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs3 li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs3 li").removeClass("active");
    $("ul.tabs3 li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs3 li').last().addClass("tab_last");


 $('.slayder-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 591,
          settings: {
            slidesToShow: 2,
            
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 416,
            settings: {
              slidesToShow: 1,
              
              slidesToScroll: 1
            }
          }
      ]
  });


});


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});

const items2 = document.querySelectorAll(".item2");

items2.forEach((item2) => {
    item2.addEventListener("click", () => {
        item2.classList.toggle("open");
    });
});


   // // MODAL

const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modalButton");
const modalCloseButton = document.querySelector(".modalCloseButton");
const backdrop = document.querySelector('.backdrop');

const toggleModal = (id) => {
  if (id) {
    const modal = document.querySelector(id);
  }
  modal.classList.toggle("modalActive");
  backdrop.classList.toggle('backdropActive');
};

modalCloseButton.onclick = () => toggleModal();
backdrop.onclick = () => toggleModal();

   // // MODAL2

const modal2 = document.querySelector(".modal2");
const modalButton2 = document.querySelector(".modalButton2");
const modalCloseButton2 = document.querySelector(".modalCloseButton2");
const backdrop2 = document.querySelector('.backdrop2');

const toggleModal2 = (id) => {
  if (id) {
    const modal2 = document.querySelector(id);
  }
  modal2.classList.toggle("modalActive2");
  backdrop2.classList.toggle('backdropActive2');
};

modalCloseButton2.onclick = () => toggleModal2();
backdrop2.onclick = () => toggleModal2();