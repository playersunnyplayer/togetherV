$('.homeBanner').owlCarousel({
    margin: 40,
    loop: true,
    responsiveClass: true,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})

$('.homeCategories').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 6,
        }
    }
})