$('.datepicker').datepicker({
    format: "dd/mm/yyyy",
    autoHide: true
});

$('.addons-carousel').owlCarousel({
    margin: 10,
    loop: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
})

$('.relatedServices-carousel').owlCarousel({
    margin: 20,
    loop: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
})

$('.variants-carousel').owlCarousel({
    loop: false,
    dots: false,
    margin: 10,
    autoPlay: false,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
})

$('.variants-carousel2').owlCarousel({
    loop: false,
    dots: false,
    margin: 10,
    autoPlay: false,
    responsive: {
        0: {
            items: 1.2,
        },
        600: {
            items: 2.2,
        },
        1000: {
            items: 2.5,
        }
    }
})

function personalizationDetails() {
    $("#personalizationDetailsSection").slideDown("slow");
}

function closePersonalizationDetailsSection() {
    $("#personalizationDetailsSection").slideUp("slow");
}

$(window).scroll(function(){
    let leftscroll = $(window).scrollTop();
    let descriptionlen = $(".descriptionContainerJs");
    let footerStart = $(".blogSecJs").offset().top;
    
    if (descriptionlen.length) {
        let descriptionContainerStart = $(".descriptionContainerJs").offset().top;
        if (leftscroll >= descriptionContainerStart && leftscroll < footerStart) {
            $(".leftImgThumbs").addClass("stickyLeftImg");
            $(".container").addClass("scrinkedContainer");
        }
        else {
            $(".leftImgThumbs").removeClass("stickyLeftImg");
            $(".container").removeClass("scrinkedContainer");
        }
    }
});

$(".leftImgThumbs img").click(function() {
    let imageName = $(this).attr("data-img");
    $("#mainImg").attr("src", imageName);
    $("#fancyboxlink").attr("href", imageName);
    $('html, body').animate({
        scrollTop: $(".leftImgRow").offset().top
    }, 200);
})

$(function(){
    $("[data-toggle=popover]").popover({
        html : true,
        content: function() {
          var content = $(this).attr("data-popover-content");
          return $(content).children(".popover-body").html();
        },
        title: function() {
          var title = $(this).attr("data-popover-content");
          return $(title).children(".popover-heading").html();
        }
    });
});

// sticky menu scrollspy
$('body').scrollspy({ target: '#navbar-example2' })

$(window).scroll(function () {
    var bottomLen = $('.stickyMenuSec');
    var pricewrapSeclen = $('.pricewrapSec');
    
    if (pricewrapSeclen.length) {
        var pricewrapSec = $('.pricewrapSec').offset().top;
        var playStorePromotionSecJs = $('.playStorePromotionSecJs').offset().top;
        
        if ($(this).scrollTop() > pricewrapSec) {
            $('.pricewrapSec').removeClass('fixed');
        }
        
        if ($(this).scrollTop() < playStorePromotionSecJs) {
            $('.pricewrapSec').addClass('fixed');
        }
    }

    if (bottomLen.length) {
        var bottom = $('.stickyMenuSec').offset().top - 1500;
        if ($(this).scrollTop() > bottom) {
            $('.stickyMenuSec').addClass('fixed');
        }
        else {
            $('.stickyMenuSec').removeClass('fixed');
        }
    }
});

$(".videoContent .close").click(()=>{
    $(".videoContent").hide()
})