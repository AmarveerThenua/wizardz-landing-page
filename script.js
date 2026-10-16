gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from("nav h1", {
  y: 50,
  opacity: 0,
  duration: 0.5,
});

tl.from(".navitems h4, .navitems button", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.22
});

tl.from(".center1", {
  x: -100,
  opacity: 0,
  duration: 0.8,
});

tl.from(
  ".center2",
  {
    x: 100,
    opacity: 0,
    duration: 0.8,
  },
  "-=0.8",
);
gsap.from(".logos img", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".logos",
    start: "top 60%",
  },
});

gsap.from(".services h1, .services p", {
  y: 60,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".services",
    start: "top 60%",
  },
});

gsap.from(".one", {
  x: -200,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".cards",
    start: "top 50%",
  },
});

gsap.from(".two", {
  x: 200,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".cards",
    start: "top 50%",
  },
});

gsap.from(".three", {
  x: -200,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".cards",
    start: "top 30%",
    
  },
});

gsap.from(".four", {
  x: 200,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".cards",
    start: "top 30%",
    
  },
});
