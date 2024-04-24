$(".carousel").owlCarousel({
    // option:value
    // merge:true
    margin:15,
    autoplay:true,
    autoplayTimeout:1000,
    rewind:false,
    loop:true,
    // stagePadding:100,
    nav:true,
    navText:["⟵","⟶"],
    dots:false,
    responsive:{
        0:{
           items:1
        },
        400:{
            items:2
        },
        800:{
            items:4,
        }
    },
})