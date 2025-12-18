import { DotLottie } from "@lottiefiles/dotlottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer le plugin
gsap.registerPlugin(ScrollTrigger);

const dotLottie_pense = new DotLottie({
  canvas: document.querySelector("#dotlottie-canvas-pense"),
  src: "https://lottie.host/95992a39-032c-40f5-8acc-f294432f0b4e/8VwCx56ZfD.lottie",
  autoplay: false, // Important : désactiver l'autoplay
  loop: false,
});

// Attendre le chargement de l'animation
dotLottie_pense.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#dotlottie-canvas-pense", // L'élément qui déclenche l'action
    start: "top center", // Début : haut de l'élément au centre de l'écran
    end: "bottom center", // Fin : bas de l'élément au centre de l'écran
    onEnter: () => dotLottie_pense.play(),
    onLeave: () => dotLottie_pense.restart(),
    onEnterBack: () => dotLottie_pense.play(),
    onLeaveBack: () => dotLottie_pense.restart(),
    // markers: true // Décommentez pour afficher les marqueurs de debug
  });
});

const dotLottie_graph = new DotLottie({
  canvas: document.querySelector("#dotlottie-canvas-graph"),
  src: "https://lottie.host/94d72cd6-4e73-4e27-a5a1-98a46f65ca57/hqEUUs93oQ.lottie",
  autoplay: false, // Important : désactiver l'autoplay
  loop: false,
});

// Attendre le chargement de l'animation
dotLottie_graph.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#dotlottie-canvas-graph", // L'élément qui déclenche l'action
    start: "top center", // Début : haut de l'élément au centre de l'écran
    end: "bottom center", // Fin : bas de l'élément au centre de l'écran
    onEnter: () => dotLottie_graph.play(),
    onLeave: () => dotLottie_graph.restart(),
    onEnterBack: () => dotLottie_graph.play(),
    onLeaveBack: () => dotLottie_graph.restart(),
    // markers: true // Décommentez pour afficher les marqueurs de debug
  });
});

const dotLottie_earth = new DotLottie({
  canvas: document.querySelector("#dotlottie-canvas-earth"),
  src: "https://lottie.host/4e7e6692-0e10-4279-94b7-8f659e02da12/v0MwwIp6w8.lottie",
  autoplay: false, // Important : désactiver l'autoplay
  loop: true,
});

// Attendre le chargement de l'animation
dotLottie_earth.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#dotlottie-canvas-earth", // L'élément qui déclenche l'action
    start: "top center", // Début : haut de l'élément au centre de l'écran
    end: "bottom center", // Fin : bas de l'élément au centre de l'écran
    onEnter: () => dotLottie_earth.play(),
    onLeave: () => dotLottie_earth.pause(),
    onEnterBack: () => dotLottie_earth.play(),
    onLeaveBack: () => dotLottie_earth.pause(),
    // markers: true // Décommentez pour afficher les marqueurs de debug
  });
});

const dotLottie_world = new DotLottie({
  canvas: document.querySelector("#dotlottie-canvas-world"),
  src: "https://lottie.host/6bc17496-dc3f-4204-ba5c-da254353cb20/oJknAMDNS6.lottie",
  autoplay: false, // Important : désactiver l'autoplay
  loop: false,
});

// Attendre le chargement de l'animation
dotLottie_world.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#dotlottie-canvas-world", // L'élément qui déclenche l'action
    start: "top center", // Début : haut de l'élément au centre de l'écran
    end: "bottom center", // Fin : bas de l'élément au centre de l'écran
    onEnter: () => dotLottie_world.play(),
    onLeave: () => dotLottie_world.restart(),
    onEnterBack: () => dotLottie_world.play(),
    onLeaveBack: () => dotLottie_world.restart(),
    // markers: true // Décommentez pour afficher les marqueurs de debug
  });
});

const dotLottie_terminal = new DotLottie({
  canvas: document.querySelector("#dotlottie-canvas-terminal"),
  src: "https://lottie.host/32bdf6fa-b929-4cd3-9a4f-02f6afe661f8/42l1qHdUwc.lottie",
  autoplay: false, // Important : désactiver l'autoplay
  loop: false,
});

// Attendre le chargement de l'animation
dotLottie_terminal.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#dotlottie-canvas-terminal", // L'élément qui déclenche l'action
    start: "top center", // Début : haut de l'élément au centre de l'écran
    end: "bottom center", // Fin : bas de l'élément au centre de l'écran
    onEnter: () => dotLottie_terminal.play(),
    onLeave: () => dotLottie_terminal.restart(),
    onEnterBack: () => dotLottie_terminal.play(),
    onLeaveBack: () => dotLottie_terminal.restart(),
    // markers: true // Décommentez pour afficher les marqueurs de debug
  });
});

const dotLottie_plane = new DotLottie({
  canvas: document.querySelector("#dotlottie-canvas-plane"),
  src: "https://lottie.host/bf4d93ce-1b77-4bb5-bd56-16f9815e6194/RngcSZT2xU.lottie",
  autoplay: false, // Important : désactiver l'autoplay
  loop: false,
});

// Attendre le chargement de l'animation
dotLottie_plane.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#dotlottie-canvas-plane", // L'élément qui déclenche l'action
    start: "top center", // Début : haut de l'élément au centre de l'écran
    end: "bottom center", // Fin : bas de l'élément au centre de l'écran
    onEnter: () => dotLottie_plane.play(),
    onLeave: () => dotLottie_plane.restart(),
    onEnterBack: () => dotLottie_plane.play(),
    onLeaveBack: () => dotLottie_plane.restart(),
    // markers: true // Décommentez pour afficher les marqueurs de debug
  });
});

const dotLottie_car = new DotLottie({
  canvas: document.querySelector("#dotlottie-canvas-car"),
  src: "https://lottie.host/4664af84-f83f-4d1e-a0ca-8b89043999d3/zsiB6jefJC.lottie",
  autoplay: false, // Important : désactiver l'autoplay
  loop: false,
});

// Attendre le chargement de l'animation
dotLottie_car.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#dotlottie-canvas-car", // L'élément qui déclenche l'action
    start: "top center", // Début : haut de l'élément au centre de l'écran
    end: "bottom center", // Fin : bas de l'élément au centre de l'écran
    onEnter: () => dotLottie_car.play(),
    onLeave: () => dotLottie_car.restart(),
    onEnterBack: () => dotLottie_car.play(),
    onLeaveBack: () => dotLottie_car.restart(),
    // markers: true // Décommentez pour afficher les marqueurs de debug
  });
});

const dotLottie_money = new DotLottie({
  canvas: document.querySelector("#dotlottie-canvas-money"),
  src: "https://lottie.host/5cf06e2b-2680-4edd-b46d-b62b477dacfd/5WNg9IbOx8.lottie",
  autoplay: false, // Important : désactiver l'autoplay
  loop: false,
});

// Attendre le chargement de l'animation
dotLottie_money.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: "#dotlottie-canvas-money", // L'élément qui déclenche l'action
    start: "top center", // Début : haut de l'élément au centre de l'écran
    end: "bottom center", // Fin : bas de l'élément au centre de l'écran
    onEnter: () => dotLottie_money.play(),
    onLeave: () => dotLottie_money.restart(),
    onEnterBack: () => dotLottie_money.play(),
    onLeaveBack: () => dotLottie_money.restart(),
    // markers: true // Décommentez pour afficher les marqueurs de debug
  });
});
