const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

const offsetHeight = window.innerHeight - noBtn.offsetHeight; 
const offsetWidth = window.innerWidth - noBtn.offsetWidth; 

yesBtn.addEventListener("click", () => {
    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
    });

    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3,
    });

    confetti({
      ...defaults,
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