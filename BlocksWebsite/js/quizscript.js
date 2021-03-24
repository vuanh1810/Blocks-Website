const img = document.getElementById("img");

const quizData = [
  {
    image: (img.src = "./img/question0.jpg"),
    question: "What is this character's name?",
    a: "Choper",
    b: "Tony",
    c: "Tony Tony Chopper",
    d: "Tony Tony Choper",
    correct: "c",
  },
  {
    image: (img.src = "./img/question1.png"),
    question: "What is his name?",
    a: "Green Hair",
    b: "3-Swords Man",
    c: "Zozo",
    d: "Roronoa Zoro",
    correct: "d",
  },
  {
    image: (img.src = "./img/question2.jpg"),
    question: "What does one piece's currency call?",
    a: "Beri",
    b: "Perry",
    c: "Belly",
    d: "Berry",
    correct: "a",
  },
  {
    image: (img.src = "./img/question3.png"),
    question: "What is this sword's name",
    a: "Black Pink",
    b: "Black",
    c: "Nero",
    d: "Shuusui",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  img.src = currentQuizData.image;
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

nextBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length && currentQuiz > 0) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                  <h2>You answered ${score}/${quizData.length} questions correctly</h2>
  
                  <button id="reload" onclick="location.reload()">Reload</button>
              `;
    }
  }
  console.log(score);
});

previousBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer != quizData[currentQuiz].correct && score > 0) {
    score--;
  }

  currentQuiz--;

  if (currentQuiz < quizData.length && currentQuiz > 0) {
    loadQuiz();
  } else {
    alert("No previous question available ");
  }
  console.log(score);
});
