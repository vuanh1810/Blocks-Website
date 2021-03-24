const img = document.getElementById("img");

const cityQuiz = [
  {
    image: (img.src = "./img/london.jpg"),    
    correct: "london",
  },
  {
    image: (img.src = "./img/paris.jpg"),    
    correct: "paris",
  },
  {
    image: (img.src = "./img/rome.jpg"),    
    correct: "rome",
  },
  {
    image: (img.src = "./img/sydney.jpg"),    
    correct: "sydney",
  },
  {
    image: (img.src = "./img/toronto.jpg"),    
    correct: "toronto",
  },
  
];

const quiz = document.getElementById("quiz");
const cityAnswer = document.getElementById("city");
const nextBtn = document.getElementById("next");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  reloadAnswers();
  
  const currentCityData = cityQuiz[currentQuiz];
  img.src = currentCityData.image; 
	
}

function reloadAnswers() {
  cityAnswer.value = "";
}

nextBtn.addEventListener("click", () => {
  
  if (cityAnswer.value != "") {
    if (cityAnswer.value === cityQuiz[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < cityQuiz.length && currentQuiz > 0) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                  <h2>You answered ${score}/${cityQuiz.length} questions scorrectly</h2>
  
                  <button id="reload" onclick="location.reload()">Reload</button>
              `;
    }
  }  
});
