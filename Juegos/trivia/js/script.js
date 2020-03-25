const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var Contador = 0;
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      
      
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    
  }else{
    if(Contador === 8){
      alert("Has ganado");
      setTimeout(() => {
        window.location.replace("../../index.html");
        
        
    }, 100);
    }else{
      alert("Has perdido");
      setTimeout(() => {
        window.location.replace("../../index.html");
        
        
    }, 100);
    }
  }
  
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    Contador +=1;
    console.log(Contador);
  } else {
    element.classList.add('wrong')
  }
  
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'nombre completo de mamberroi',
    answers: [
      { text: 'mamberroi ramirez peña', correct: false },
      { text: 'kike dui mamberroi', correct: true }
    ]
  },
  {
    question: 'cual es el apellido de goku',
    answers: [
      { text: 'son', correct: true },
      { text: 'kakaroto', correct: false },
      { text: 'maester yi', correct: false },
      { text: 'señor goku', correct: false }
    ]
  },
  {
    question: 'cual es el resultado de la derivada de una constante',
    answers: [
      { text: '1', correct: false },
      { text: 'cero', correct: true },
      { text: 'infinito', correct: false },
      { text: 'menos infinito', correct: false }
    ]
  },
  {
    question: 'como se llama el pelon de dragon ball',
    answers: [
      { text: 'krilin', correct: true },
      { text: 'thegrefg', correct: false }
    ]
  }
]