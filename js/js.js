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

    $("header .rwd_TOPNav .itemBox:last-child").on("click",function(){

        $("main .center .left")
        .toggleClass("active");
    })

    $(document).on("click",".itemBox.nav",function(){
        $(this)
        .addClass("active")
        .find(".injected-svg")
        .css("display","block")
        .siblings("svg")
        .css("display","none")
        .siblings("p")
        .text("閉じる");
    })

    $(document).on("click",".itemBox.nav.active",function(){
        $(this)
        .removeClass("active")
        .find(".hamIC")
        .css("display","block")
        .siblings("svg")
        .css("display","none")
        .siblings("p")
        .text("メニュー");
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
        breakpoints: {
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

    var swiper02 = new Swiper('.swiper02', {
        autoHeight: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next02',
            prevEl: '.swiper-button-prev02',
          },
    });

    var swiper03 = new Swiper('.swiper03', {
        autoHeight: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next03',
            prevEl: '.swiper-button-prev03',
          },
    });
 
    //countryList 國別一覽
    $(".mainArea .countryList .cTitle").click(function(){
        $(this).parent()
        .toggleClass("active");

        $(".mainArea .countryList ul")
        .addClass("active");
    })
    
    //ul smallTitle
    $(".mainArea .countryList ul .smallTitle").click(function(event){
        $(this).parent()
        .toggleClass("active")
        event.stopPropagation();
    })
    $(document).on("click",".fa-regular.fa-star",function(){
        $(this)
        .attr("class","fa-solid fa-star");
    })
    $(document).on("click",".fa-solid.fa-star",function(){
        $(this)
        .attr("class","fa-regular fa-star");
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
        .closet("swiper-slide")
        .siblings()
        .find(".gameTypeBox")
        .removeClass("active");
    })

    $(".betRecordBtn").click(function(){
        $("main .center .right")
        .addClass("active");
    })

    //gBlock 投注
    $(".center .gBlock .down .pkTeam .team button").click(function(){
        $(this)
        .toggleClass("active");

        $(".center .right .betTypeList li:first-child")
        .addClass("active");

        $(".center .right .betBlock .betContent .noData")
        .removeClass("display")
        .next()
        .addClass("display");
    })

    //right
    $(".center .right .closeRight").click(function(){
        $(this)
        .closest(".right")
        .removeClass("active");
    })

    $(".right .betBlock .betContent .betDetail .bdContent .top i").click(function(){
        $(this)
        .closest(".betDetail")
        .remove();

        if( $(".right .betBlock .betContent .betData .bdOuter").length() == 0 )
        {
            $(this)
            .closest(".betData")
            .removeClass("active")
            .next()
            .addClass("active");
        }
    })

    $(".right .betBlock .betContent .changeBtn").click(function(){
        $(this)
        .toggleClass("active");
    })

    var ww = $(window).innerWidth();

    if(ww < 1024)
    {
        var wh = $(window).innerHeight();

        $(".left")
        .css("height",""+ (wh - 90) +"");

        $(window).resize(function(){
            var wh = $(window).innerHeight();

            $(".left")
            .css("height",""+ (wh - 90) +"");
        })
    }
})

//gameDetail
$(function(){
    $(".center .gameDetail .info_content .infoBlock").click(function(){
        $(this)
        .toggleClass("active");
    })
})

//betPage
$(function(){
    $(".betPage table th").click(function(){
        $(this)
        .closest("table")
        .toggleClass("active");
    })

    $(".betPage .mobile_content .history_bet .betData li").click(function(){
        $(this)
        .toggleClass("active");
    })

    $(".betPage .selectNav select").change(function(){
        $(".betPage .betBox")
        .toggleClass("display");
    })
})

//memberPage
$(function(){
    $(".myPage .rewrad_btn button").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        if ($(this).index() == 0) {
            $(".reward_stauts span").text('使用中');
        }
        else {
            $(".reward_stauts span").text('未使用');
        }
    })

    $(".myPage .mobile_content .userOther .submitBtn").click(function(){
        $(this)
        .closest(".userOther")
        .toggleClass("edit")
        .find(".submitBtn")
        .toggleClass("display");
    })
})

//footer
$(function(){
    $("footer .lang>.flag").click(function(){
        $("footer .checkBox")
        .toggleClass("display");
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

    //rwd pageBlock
    $("footer .top .pageBlock .Bigtitle").click(function(){
        $(this).parent()
        .toggleClass("active");
    })

    $(document).on("click","ul .Bigtitle",function(){
        $(this)
        .find("i")
        .attr("class","fa-solid fa-plus");
    })

    $(document).on("click","ul.active .Bigtitle",function(){
        $(this)
        .find("i")
        .attr("class","fa-solid fa-minus");
    })

    //rwd 手機版
    $("footer .mobileFooter li a").click(function(){
        $(this).parent()
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//message
$(function(){
    $(".messagePage .messageBox li,.messagePage .innerBox.inner .backBtn").click(function(){
        $(".messagePage .mobile_content .innerBox")
        .toggleClass("display");

        $(this).find(".unread")
        .removeClass("display");
    })
})

//jumpWindow 
$(function(){
    $(".filter .jumpWindow .jwTitle .closeIC").click(function(){
        $(this)
        .closest(".jumpWindow")
        .removeClass("display");

        $(".filter")
        .removeClass("display");
    })

    $(".filter .jumpWindow .closeWindow").click(function(){
        $(this)
        .closest(".jumpWindow")
        .removeClass("display");

        $(".filter")
        .removeClass("display");
    })

    $(".filter .jumpWindow .submitBtn").click(function(){
        $(this)
        .closest(".jumpWindow")
        .removeClass("display");

        $(".filter")
        .removeClass("display");
    })

    //請先登入
    var child = $("main:not(.inMain)").children();
    $("main:not(.inMain)").click().click(function(child){
        $(".filter")
        .addClass("display")
        .find(".jumpWindow.plsLogIn")
        .addClass("display");
    })
    $("footer.unlog .mobileFooter:not(:first-child)").click().click(function(child){
        $(".filter")
        .addClass("display")
        .find(".jumpWindow.plsLogIn")
        .addClass("display");
    })

    //撤銷投注
    $(".cancleBtn").click(function(){
        $(".filter")
        .addClass("display")
        .find(".jumpWindow.cancelBet")
        .addClass("display");
    })
})