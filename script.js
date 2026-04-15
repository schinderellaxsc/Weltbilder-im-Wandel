// einfache Animation
const planets = document.querySelectorAll(".planet");

planets.forEach((planet, i) => {
  let angle = 0;

  setInterval(() => {
    angle += 0.02 + i * 0.01;
    const x = Math.cos(angle) * 60;
    const y = Math.sin(angle) * 60;

    planet.style.transform = `translate(${x}px, ${y}px)`;
  }, 50);
});
