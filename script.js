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
        end: "top 20%",
        scrub: true
    }
})

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

// ScrollTrigger.create({
//     trigger: ".pve",
//     start: "top 50%",
//     endTrigger: ".new-stuff",
//     end: "bottom bottom",
//     pin: ".pve"
// })

// ScrollTrigger.create({
//     trigger: ""
// })


// // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
// let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

let panels = gsap.utils.toArray(".promises");

panels.forEach((panel, i) => {
  
});

// ScrollTrigger.create({
//     scrub: true,
//   snap: {
//     snapTo: (progress, self) => {
//       let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
//           snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
//       return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
//     },
//     duration: 0.5
//   }
// });



// staggered <p> in from sides

// gsap.fromTo('#pve', 
//     // from
//     { x: "+=150%" }, 
//     // to
//     { x: "0%", 
//     duration: 3,
//     ease: 'none',
//     scrollTrigger: {
//         trigger: "#pve",
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true
//     } 
// });

// gsap.fromTo('#missions', 
//     // from
//     { x: "-=150%" }, 
//     // to
//     { x: "0%", 
//     duration: 3,
//     ease: 'none',
//     scrollTrigger: {
//         trigger: "#pve",
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true
//     } 
// });

// gsap.fromTo('#new-stuff', 
//     // from
//     { x: "+=150%" }, 
//     // to
//     { x: "0%", 
//       duration: 3,
//       ease: 'none',
//       scrollTrigger: {
//         trigger: "#pve",
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true
//     } 
// });