// to get current year
function getYear() {
    let currentDate = new Date();
    document.querySelector("#displayYear").innerHTML = currentDate.getFullYear().toString();
}

getYear();

//service section owl carousel
$(".service_owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 7500,
    autoHeight: true,
    center: true,
    nav: true,
    loop: true,
    autoplayHoverPause: true,
    margin: 0,
    smartSpeed: 600,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1,
        },
        1200: {
            items: 3
        }
    }
});

// owl carousel slider js
let owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    let $items = $('.owl-filter-bar a')
    let $item = $(this);
    let filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})


// nice select
$(document).ready(function () {
    $('select').niceSelect();
});