console.log('It works!');

$(document).ready(function() {
    $(window).on("scroll", function() {
        // console.log($(this).scrollTop())
        if($(this).scrollTop() >= 9450){
            // set to new image
            $(".brand-logo img").attr("src","img/six.jpg");
        } else if ($(this).scrollTop() >= 8950){
            $(".brand-logo img").attr("src","img/five.jpg");
        }
        else if ($(this).scrollTop() >= 8450){
            $(".brand-logo img").attr("src","img/four.jpg");
        }
        else if ($(this).scrollTop() >= 7610){
            $(".brand-logo img").attr("src","img/three.jpg");
        }
        else if ($(this).scrollTop() >= 7540){
            $(".brand-logo img").attr("src","img/two.jpg");
        }
        else {
            //back to default
            $(".brand-logo img").attr("src","img/one.jpg");
        }
    })
})

// let mainNavLinks = document.querySelectorAll("nav ul li a");
// let mainSections = document.querySelectorAll("main");
//
// let lastId;
// let cur = [];
//
// window.addEventListener("scroll", event => {
//     let fromTop = window.scrollY;
//
//     mainNavLinks.forEach(link => {
//         let section = document.querySelector(link.hash);
//
//         if (
//             section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop
//         ) {
//             link.classList.add("current");
//         } else {
//             link.classList.remove("current");
//         }
//     });
// });

// const checkpoint = 3000;
//
// window.addEventListener("scroll", () => {
//     const currentScroll = window.pageYOffset;
//     if (currentScroll <= checkpoint) {
//         opacity = 1 - currentScroll / checkpoint;
//     } else {
//         opacity = 0;
//     }
//     document.querySelector(".front").style.opacity = opacity;
// });