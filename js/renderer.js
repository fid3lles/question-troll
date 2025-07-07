const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const questionInput = document.querySelector(".question-input");

const body = document.getElementsByTagName("body");
const questionDisplay = document.getElementById("question");

const queryParams = new URLSearchParams(window.location.search);
var renderCfg = {};

const offsetHeight = window.innerHeight - noBtn.offsetHeight;
const offsetWidth = window.innerWidth - noBtn.offsetWidth;

const QUESTION_REGEX = /\?$/;

const confettiConfig = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["heart"],
  colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
};

// Events
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

// Functions
const triggerActions = () => {
  noBtn.style.width = `${yesBtn.offsetWidth}px`;
  noBtn.classList.add("triggered");
  noBtn.style.top = `${Math.floor(Math.random() * offsetHeight)}px`;
  noBtn.style.left = `${Math.floor(Math.random() * offsetWidth)}px`;
};

const getQueryParameters = async () => {
	if (queryParams.has("cfg")) {
		let decodedObj = atob(queryParams.get('cfg'));
		renderCfg = JSON.parse(decodedObj);
	}
};

const changeBgColor = (hex) => {
	console.log();
	document.body.style.backgroundColor = hex;
};

const setQuestionText = (question) => {
    questionDisplay.textContent += QUESTION_REGEX.test(question.trim()) ? question : `${question}?`;
};

// First calls
await getQueryParameters();
console.log(renderCfg.question);
changeBgColor(renderCfg.colorHex);
setQuestionText(renderCfg.question);
