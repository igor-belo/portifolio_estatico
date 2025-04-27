// 1) Fundo de partículas brancas e algumas azuis
tsParticles.load("tsparticles", {
    background: { color: { value: "#0a192f" } },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: ["#ffffff","#ffffff","#ffffff","#1b98e0"] },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
      size: { value: 2, random: true },
      move: { enable: true, speed: 0.5, random: true, outModes: { default: "out" } }
    },
    detectRetina: true
  });
  