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

// gsap.registerPlugin(ScrollTrigger);

// gsap.to("#watch-content", {
//   y: "-100%",  // Moves the #watch-content span upwards
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#watch",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true
//   }
// });

// ScrollTrigger.create({
//   trigger: "#watch",
//   start: "top top",
//   end: "bottom bottom",
//   pin: "#over-content"
// });

