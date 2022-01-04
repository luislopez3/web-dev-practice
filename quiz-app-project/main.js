const quizDB = [
  {
    question:
      "Question 1: Which of the following is not a real eCommerce platform?",
    a: "Shopify",
    b: "WooCommerce",
    c: "ShopCommerce",
    d: "BigCommerce",
    ans: "ans3",
  },
  {
    question:
      "Question 2: If Shopify is so good, why are Shopify developers necessary?",
    a: "To save time on things like store setups and migrations",
    b: "To extend the limited design options and functionalities of themes with custom code",
    c: "To provide support with a deep understanding of how the platform works and what its limitations are",
    d: "All the above",
    ans: "ans4",
  },
  {
    question:
      "Question 3: Which of the following is true about Shopify developers?",
    a: "They are paid extremely well",
    b: "There is a high demand for them",
    c: "They need to know web development, the platform itself, and the liquid template language",
    d: "All the above",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const Option1 = document.querySelector("#option1");
const Option2 = document.querySelector("#option2");
const Option3 = document.querySelector("#option3");
const Option4 = document.querySelector("#option4");
const Submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const totalScore = document.querySelector("#showScore");

let score = 0;
let questionCount = 0;

const loadQuestions = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  Option1.innerText = questionList.a;
  Option2.innerText = questionList.b;
  Option3.innerText = questionList.c;
  Option4.innerText = questionList.d;
};
loadQuestions();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((currentAns) => {
    if (currentAns.checked) {
      answer = currentAns.id;
    }
  });
  return answer;
};

const deSelectAll = () => {
  answers.forEach((currentAns) => {
    currentAns.checked = false;
  });
};

Submit.addEventListener("click", () => {
  const checkAnswer = getCheckAnswer();

  if (checkAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;

  deSelectAll();
  if (questionCount < quizDB.length) {
    loadQuestions();
  } else {
    totalScore.classList.remove("scoreArea");
    totalScore.innerHTML = `<h3>Your total score is:<span id='score'>${score}</span></h3>
        <button onclick='location.reload()' >Try again?</button>`;
  }
});
