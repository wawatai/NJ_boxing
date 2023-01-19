//header
$(function(){
    $("header .checkBox .title").click(function(){
        $(this).next()
        .toggleClass("display");
    })

    $("header .checkBox label").on("change",function(){
        $(this)
        .addClass("active")
        .parent().siblings().find("label").removeClass("active");

        var n = $(this).next().text();
        $(this).parent().prevAll(".innerTitle")
        .text(""+ n +"");

        $("header .checkBox .title span")
        .text(""+ n +"");

            $("header .checkBox ul")
            .removeClass("display");
    })

    $("header .checkBox li").on("click",function(){
        $(this).find("label")
        .change();

        $("header .checkBox ul")
        .removeClass("display");
    })
})

//time
function currentTime() {
    now = new Date();
    yy = now.getFullYear();
    mm = now.getMonth() + 1;
    dd = now.getDate();
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds();
    var curTime = document.getElementsByClassName('time');
    curTime[0].innerHTML = h+' : '+m+' : '+s;
    setTimeout('currentTime()',1000);

    if(h < 10)
    {
        curTime[0].innerHTML = '0'+h+' : '+m+' : '+s;
    }
    if(m < 10)
    {
        curTime[0].innerHTML = h+' : 0'+m+' : '+s;
    }
    if(s < 10)
    {
        curTime[0].innerHTML = h+' : '+m+' : 0'+s;
    }
}

//mainArea
$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        // spaceBetween: 30,
        breakpoints: {
            // 1600: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // 1260: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
    // var gtswiper = new Swiper('.gtswiper', {
    //     autoHeight: true,
    //     // autoplay: {
    //     //     delay: 1500,
    //     //     disableOnInteraction: false,
    //     //     pauseOnMouseEnter: true,
    //     // },
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     grid: {
    //         fill: 'row',
    //         rows: 2,
    //     },
    //     // breakpoints: {
    //         // 1600: {
    //         //     slidesPerView: 1,
    //         //     spaceBetween: 30,
    //         // },
    //         // 1260: {
    //         //     slidesPerView: 1,
    //         //     spaceBetween: 30,
    //         // },
    //         // 1000: {
    //         //     slidesPerView: 1,
    //         //     spaceBetween: 0,
    //         // }
    //     // },
    //     navigation: {
    //         nextEl: '.gtswiper-button-next',
    //         prevEl: '.gtswiper-button-prev',
    //       },
    //     // pagination: {
    //     //   el: '.swiper-pagination',
    //     //   clickable: true,
    //     // },
    // });
 
    //countryList 國別一覽
    $(".mainArea .countryList .cTitle").click(function(){
        $(this).parent()
        .toggleClass("active");

        $(".mainArea .countryList ul")
        .addClass("active");
    })
 
    //topnav
    $(".topnav li").click(function(){
        $(this)
        .toggleClass("active")
        .siblings()
        .removeClass("active");
    })
 
    //gameTypeBox
    $(".typselect .gameTypeBox").click(function(){
        $(this)
        .toggleClass("active")
        .siblings()
        .removeClass("active");
    })
 
    //ul smallTitle
    $(".mainArea .countryList ul .smallTitle").click(function(){
        $(this).parent()
        .toggleClass("active");
    })
 
 
    $(document).on("click",".fa-regular.fa-star",function(){
        $(this)
        .attr("class","fa-solid fa-star");

    })

    $(document).on("click",".fa-solid.fa-star",function(){
        $(this)
        .attr("class","fa-regular fa-star");

    })
})


//footer
$(function(){
    $("footer .lang>.flag").click(function(){
        $("footer .checkBox")
        .addClass("display");
    })

    $("footer .checkBox label").on("change",function(){
        $(this)
        .addClass("active")
        .parent().siblings().find("label").removeClass("active");

        $("footer .checkBox")
        .removeClass("display");
    })

    $("footer .checkBox li").on("click",function(){
        $(this).find("label")
        .change();

        $("footer .checkBox")
        .removeClass("display");
    })
})

