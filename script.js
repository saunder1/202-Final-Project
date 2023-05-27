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

// bring heroes text in from the left side
gsap.to("#heroes-text", {
    x: "60vw",
    duration: 3,
    scrollTrigger: {
        trigger: ".side1",
        start: "top 80%",
        end: "top 30%",
        scrub: true
    }
})

// bring genji in from the right side
gsap.to("#genji", {
    x: "-33vw",
    duration: 3,
    scrollTrigger: {
        trigger: ".side1",
        start: "top 80%",
        end: "top 30%",
        scrub: true
    }
})

// bring in trophy image from the left side 
gsap.to("#trophy", {
    x: "210%",
    duration: 3,
    scrollTrigger: {
        trigger: ".side2",
        start: "top 80%",
        end: "top 30%",
        scrub: true
    }
})

// bring in goty-text from the right side
gsap.to("#goty-text", {
    x: "-160%",
    duration: 3,
    scrollTrigger: {
        trigger: ".side2",
        start: "top 80%",
        end: "top 30%",
        scrub: true
    }
})

// bring in owl-text from the left side
gsap.to("#owl-text", {
    x: "150%",
    duration: 3,
    scrollTrigger: {
        trigger: ".side3",
        start: "top 80%",
        end: "top 50%",
        scrub: true
    }
})

// bring in owl logo from the right side
gsap.to("#owl-logo", {
    x: "-150%",
    duration: 3,
    scrollTrigger: {
        trigger: ".side3",
        start: "top 80%",
        end: "top 50%",
        scrub: true
    }
})

gsap.to("#ow2-announced", {
    opacity: 1,
    scale: 1.5,
    ease: 'none',
    duration: 3,
    scrollTrigger: {
        trigger: "#ow2-announcement",
        start: "top 50%",
        end: "top top",
        scrub: true
    }
})

gsap.fromTo('#pve', 
    // from
    { x: "+=150%" }, 
    // to
    { x: "0%", 
    duration: 3,
    ease: 'none',
    scrollTrigger: {
        trigger: "#pve",
        start: "top 80%",
        end: "top 20%",
        scrub: true
    } 
});

gsap.fromTo('#missions', 
    // from
    { x: "-=150%" }, 
    // to
    { x: "0%", 
    duration: 3,
    ease: 'none',
    scrollTrigger: {
        trigger: "#pve",
        start: "top 80%",
        end: "top 20%",
        scrub: true
    } 
});

gsap.fromTo('#new-stuff', 
    // from
    { x: "+=150%" }, 
    // to
    { x: "0%", 
      duration: 3,
      ease: 'none',
      scrollTrigger: {
        trigger: "#pve",
        start: "top 80%",
        end: "top 20%",
        scrub: true
    } 
});