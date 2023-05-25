gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "#watch",
    start: "top top",
    end: "bottom bottom",
    pin: "#over"
})

ScrollTrigger.create({
    trigger: "#watch",
    start: "top top",
    end: "bottom top",
    pin: "#learn"
})

