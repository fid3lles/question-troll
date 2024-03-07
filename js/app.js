const question = document.querySelector(".question");
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const optPanel = document.getElementById("popup");
const questionInput = document.querySelector(".question-input");
const copyBtn = optPanel.querySelector(".copy-link");

const url = window.location.href;
const queryParams = new URLSearchParams(window.location.search);

const offsetHeight = window.innerHeight - noBtn.offsetHeight;
const offsetWidth = window.innerWidth - noBtn.offsetWidth;

const confettiConfig = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["heart"],
  colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
};

copyBtn.addEventListener("click", () => {
  question.textContent = questionInput.value;
  questionInput.value = `${window.location.href}?msg=${questionInput.value}`;
  questionInput.select();
  document.execCommand("copy");
  optPanel.style.display = "none";
  alert("Copiado para a área de transferência. Mande para um amigo!");
});

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

const getQueryParameters = () => {
  if(queryParams.has("msg")){
    question.textContent = queryParams.get("msg");
    optPanel.style.display = "none";
  }
};

getQueryParameters();