import {ISourceOptions} from 'react-tsparticles'

const options: ISourceOptions = {
  background: {
    color: {
      value: "#fafafa",
    },
  },
  fpsLimit: 120,
  interactivity: {
    detectsOn: "canvas",
    modes: {
      push: {
        quantity: 5,
      },
    },
  },
  particles: {
    color: {
      value: "#666666",
    },
    line_linked: {
      enable: false,
    },
    move: {
      direction: "left",
      enable: true,
      random: false,
      speed: 4,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 1000,
      },
      value: 30,
    },
    opacity: {
      value: 0.5,
      anim: {
        enable: true,
        speed: 0.7,
        opacity_min: 0,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}

export default options;
