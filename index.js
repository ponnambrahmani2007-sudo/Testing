const questions = [
  { category: "LINUX",
    question: "what command is used to create file?",
    choice: ["mkdir", "touch", "cat"],
    answer: "touch"
  },
  { category: "Computer science",
    question: "what is GUI?",
    choice: ["graphical user interface", "graphical performance", "graphical user"],
    answer: "graphical user interface"
  },
  { category: "social",
    question: "who is the prime minister of india?",
    choice: ["Narendra Modi", "Rahul Gandhi", "Indira Gandhi"],
    answer: "Narendra Modi"
  },
  { category: "HTML",
    question: "how many positions are there in html",
    choice: ["4", "5", "6"],
    answer: "4"
  },
  { category: "science",
    question: "what is formula of water",
    choice: ["H2O", "O2", "CO2"],
    answer: "H2O"
  },
];

function getRandomQuestion(questionsArray) {
  const random = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[random];
}

function getRandomComputerChoice(choicesArray) {
  const randomChoice = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomChoice];
}

function getResults(questionObj, computerChoice) {
  if (computerChoice.toLowerCase() === questionObj.answer.toLowerCase()) {
    return "The computer's choice is correct.";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}.`;
  }
}

const question = getRandomQuestion(questions);
console.log("Question:", question.question);
console.log("Choices:", question.choice);
const computerChoice = getRandomComputerChoice(question.choice);
console.log("Computer's Choice:", computerChoice);
const result = getResults(question, computerChoice);
console.log("Result:", result);
