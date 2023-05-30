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
        scrub: 1
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
        scrub: 1
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
        scrub: 1
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
        scrub: 1
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
        scrub: 1
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
        scrub: 1
    }
})

// scale up and fade in announcement
gsap.to("#ow2-announced", {
    opacity: 1,
    scale: 1.5,
    ease: 'none',
    duration: 3,
    scrollTrigger: {
        trigger: "#ow2-announcement",
        start: "top 50%",
        end: "top 20%",
        scrub: 1
    }
})

// pin announcement while promises scroll up and layer
ScrollTrigger.create({
    trigger: "#ow2-announcement",
    start: "top top",
    endTrigger: ".new-stuff",
    end: "bottom bottom",
    pin: "#ow2-announcement"
})

ScrollTrigger.create({
    trigger: ".pve",
    start: "top 50%",
    pin: true,
    pinSpacing: false 
});

ScrollTrigger.create({
    trigger: ".missions",
    start: "top 50%",
    endTrigger: ".new-stuff",
    end: "bottom 102%",
    pin: true, 
    pinSpacing: false 
});

ScrollTrigger.create({
    trigger: ".new-stuff",
    start: "top 50%",
    end: "bottom bottom",
    pin: true, 
    pinSpacing: false 
});

// horizontal scrolling of "devs go quiet..." section
let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#dead",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=3500",
    }
});

// hold overwatch 2 release in place 
ScrollTrigger.create({
    trigger: "#dead-container",
    start: "top top",
    end: "bottom top",
    pin: "#ow2-released",
})


// staggered <p> in from sides

gsap.fromTo('#A', 
    // from
    { x: "+=150%" }, 
    // to
    { x: "0%", 
    ease: 'none',
    scrollTrigger: {
        trigger: "#A",
        end: "bottom 95%",
        scrub: 1
    } 
});

gsap.fromTo('#B', 
    { x: "-=150%" }, 
    { x: "0%", 
    ease: 'none',
    scrollTrigger: {
        trigger: "#B",
        end: "bottom 95%",
        scrub: 1
    } 
});


gsap.fromTo('#C', 
    { x: "+=150%" }, 
    { x: "0%", 
    ease: 'none',
    scrollTrigger: {
        trigger: "#C",
        end: "bottom 95%",
        scrub: 1
    } 
});

gsap.fromTo('#D', 
    { x: "-=150%" }, 
    { x: "0%", 
    ease: 'none',
    scrollTrigger: {
        trigger: "#D",
        end: "bottom 95%",
        scrub: 1
    } 
});

// Create the timeline
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".wait",
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true
    }
})
.fromTo("#wait-content", {opacity: 0}, {opacity: 1})
.to("#wait-content", {opacity: 0});

gsap.from("#zoom-out p", {
    scale: 100,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
        trigger: "#zoom-out",
        start: "top top",
        end: "+=200%",
        scrub: 1
    }
})

ScrollTrigger.create({
    trigger: "#zoom-out",
    start: "top top",
    end: "+=225%",
    pin: true,
})

gsap.to("#zoom-in p", {
    scale: 4,
    duration: 3,
    scrollTrigger: {
        trigger: "#zoom-in",
        start: "top center",
        end: "bottom bottom",
        scrub: 1
    }
})

