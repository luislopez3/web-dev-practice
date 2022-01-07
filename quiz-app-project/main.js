const quizDB = [
  {
    question: "Which of the following is not a real eCommerce platform?",
    a: "Shopify",
    b: "WooCommerce",
    c: "ShopCommerce",
    d: "BigCommerce",
    ans: "ans3",
  },
  {
    question: "If Shopify is so good, why are Shopify developers necessary?",
    a: "To save time on things like store setups and migrations",
    b: "To extend the limited design options and functionalities of themes with custom code",
    c: "To provide support with a deep understanding of how the platform works and what its limitations are",
    d: "All the above",
    ans: "ans4",
  },
  {
    question: "Which of the following is true about Shopify developers?",
    a: "They are paid extremely well",
    b: "There is a high demand for them",
    c: "They need to know web development, the platform itself, and the liquid template language",
    d: "All the above",
    ans: "ans4",
  },
];

const questionCounter = document.querySelector(".question-count");
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const next = document.querySelector("#next");
const error = document.querySelector(".error");
const back = document.querySelector("#back");
const submit = document.querySelector("submit");
const answers = document.querySelectorAll(".answer");
const totalScore = document.querySelector("#showScore");

let score = 0;
let questionCount = 0;

const showBackBtn = () => {
  if (questionCount >= 1) {
    back.style.display = "inline";
  } else {
    back.style.display = "none";
  }
};

const loadQuestions = () => {
  showBackBtn();
  
  questionCounter.innerText = `Question ${questionCount + 1} of ${
    quizDB.length
  }:`;
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
  error.style.display = "none";
};
loadQuestions();



const getCheckedAnswer = () => {
  let answer;
  answers.forEach((currentAns) => {
    if (currentAns.checked) {
      answer = currentAns.id;
    }
  });
  return answer;
};

const noCheckNoAdvance = () => {
  answers.forEach((currentAns) => {
    if (currentAns.value === "on") {
      error.style.display = "block";
    }
  });
};

const removeCheck = () => {
  answers.forEach((currentAns) => {
    currentAns.checked = false;
  });
};

next.addEventListener("click", () => {
  const checkAnswer = getCheckedAnswer();

  if (checkAnswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;

  if (questionCount === quizDB.length - 1) {
    next.innerText = "Submit";
  }
  //noCheckNoAdvance();
  removeCheck();
  if (questionCount < quizDB.length) {
    loadQuestions();
  } else {
    totalScore.classList.remove("scoreArea");
    totalScore.innerHTML = `<h3>Your total score is:<span id='score'>${score}</span></h3>
        <button onclick='location.reload()' >Try again?</button>`;
    next.style.display = "none";
    back.style.display = "none";
  }
});
