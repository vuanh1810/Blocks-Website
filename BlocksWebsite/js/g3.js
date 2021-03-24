const img = document.getElementById("img");

const flagQuiz = [
  {
    image: (img.src = "./img/Australia.png"),    
    correct: "australia",
  },
  {
    image: (img.src = "./img/Canada.png"),    
    correct: "canada",
  },
  {
    image: (img.src = "./img/Japan.png"),    
    correct: "japan",
  },
  {
    image: (img.src = "./img/Singapore.png"),    
    correct: "singapore",
  },
  {
    image: (img.src = "./img/Vietnam.png"),    
    correct: "vietnam",
  },
  
];

const quiz = document.getElementById("quiz");
const countryAnswer = document.getElementById("country");
const nextBtn = document.getElementById("next");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  reloadAnswers();
  
  const currentFlagData = flagQuiz[currentQuiz];
  img.src = currentFlagData.image; 
	
}

function reloadAnswers() {
  countryAnswer.value = "";
}

nextBtn.addEventListener("click", () => {
  
  if (countryAnswer.value != "") {
    if (countryAnswer.value === flagQuiz[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < flagQuiz.length && currentQuiz > 0) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                  <h2>You answered ${score}/${flagQuiz.length} questions scorrectly</h2>
  
                  <button id="reload" onclick="location.reload()">Reload</button>
              `;
    }
  }  
});
