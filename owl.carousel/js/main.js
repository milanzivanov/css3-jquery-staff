$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    autoplay: true,
    mouseDrag: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: ["<div class='owl-prev'>prev</div>","<div class='owl-next'>next</div>"],
    responsive: {
        600:{
            items: 3
        }
    }
})