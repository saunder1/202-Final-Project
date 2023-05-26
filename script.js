gsap.registerPlugin(ScrollTrigger);

// holds "over" in place until "promised" has lined up with it
ScrollTrigger.create({
    trigger: "#watch",
    start: "top top",
    end: "bottom bottom",
    pin: "#over"
})

// holds "learn" div in place while "overpromised" is scrolled
ScrollTrigger.create({
    trigger: "#watch",
    start: "top top",
    end: "bottom top",
    pin: "#learn"
})

// bring in trophy image from the left side 
gsap.to("#trophy", {
    x: "210%",
    duration: 3,
    scrollTrigger: {
        trigger: "#goty",
        start: "top 95%",
        end: "top 5%",
        scrub: true
    }
})

// bring in goty-text from the right side
gsap.to("#goty-text", {
    x: "-160%",
    duration: 3,
    scrollTrigger: {
        trigger: "#goty",
        start: "top 95%",
        end: "top 5%",
        scrub: true
    }
})

// bring in owl-text from the left side
gsap.to("#owl-text", {
    x: "230%",
    duration: 3,
    scrollTrigger: {
        trigger: "#owl",
        start: "top 95%",
        end: "top 5%",
        scrub: true
    }
})

// bring in owl logo from the right side
gsap.to("#owl-logo", {
    x: "-230%",
    duration: 3,
    scrollTrigger: {
        trigger: "#owl",
        start: "top 95%",
        end: "top 5%",
        scrub: true
    }
})

// gsap.to("#heroes-text", {
//     x: "230%",
//     duration: 3,
//     scrollTrigger: {
//         trigger: "#heroes",
//         start: "top 95%",
//         end: "top 5%",
//         scrub: true
//     }
// })

// gsap.to("#genji", {
//     x: "-230%",
//     duration: 3,
//     scrollTrigger: {
//         trigger: "#heroes",
//         start: "top 95%",
//         end: "top 5%",
//         scrub: true
//     }
// })