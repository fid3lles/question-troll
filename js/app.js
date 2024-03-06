const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

const confettiConfig = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["heart"],
  colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
};

const offsetHeight = window.innerHeight - noBtn.offsetHeight; 
const offsetWidth = window.innerWidth - noBtn.offsetWidth; 

yesBtn.addEventListener("click", () => {
    confetti({
      ...confettiConfig,
      particleCount: 50,
      scalar: 2,
    });

    confetti({
      ...confettiConfig,
      particleCount: 25,
      scalar: 3,
    });

    confetti({
      ...confettiConfig,
      particleCount: 10,
      scalar: 4,
    });
});

noBtn.addEventListener("click", () => {
    triggerActions();
});

noBtn.addEventListener("mouseover", () => {
    triggerActions();
});

const triggerActions = () => {
    noBtn.style.width = `${yesBtn.offsetWidth}px`;
    noBtn.classList.add("triggered");
    noBtn.style.top = `${Math.floor(Math.random() * offsetHeight)}px`;
    noBtn.style.left = `${Math.floor(Math.random() * offsetWidth)}px`;
};