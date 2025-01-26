const stage = document.getElementById("stage");

const firstTwenty = [
  { english: "I", romanian: "eu" },
  { english: "you", romanian: "tu" },
  { english: "he", romanian: "el" },
  { english: "she", romanian: "ea" },
  { english: "it", romanian: "el/ea" },
  { english: "we", romanian: "noi" },
  { english: "you", romanian: "voi" },
  { english: "they", romanian: "ei/ele" },
  { english: "what", romanian: "ce" },
  { english: "who", romanian: "cine" },
  { english: "where", romanian: "unde" },
  { english: "why", romanian: "de ce" },
  { english: "how", romanian: "cum" },
  { english: "which", romanian: "care" },
  { english: "when", romanian: "când" },
  { english: "then", romanian: "apoi" },
  { english: "if", romanian: "dacă" },
  { english: "really", romanian: "chiar" },
  { english: "but", romanian: "dar" },
  { english: "because", romanian: "deoarece" },
];

// This function generates a list of wrong answers
const genWrongAnswers = (cantUse, allEntries) => {
  // Assigns an answer that is randomly selected
  let thisAnswer = allEntries[Math.floor(Math.random() * allEntries.length)];

  // This checks if the supposed wrong answer is actually wrong, and dumps it if so
  while (cantUse.includes(thisAnswer)) {
    thisAnswer = allEntries[Math.floor(Math.random() * allEntries.length)];
  }
  return thisAnswer;
};

//  This is a Dorian Yates shuffle confunction
const shuffle = (array) => {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
};

const genCorrectAnswer = () => {
  // We set our "stage", the wondow in which our question and answers will both live
  const stage = document.getElementById("stage");

  // Here we grab an answer to question, and create it's tags and append etc..
  const questionObject =
    firstTwenty[Math.floor(Math.random() * firstTwenty.length)];
  const question = questionObject.english;
  const questHead = document.createElement("h2");
  const englishElement = document.createTextNode(question);
  questHead.appendChild(englishElement);
  stage.appendChild(questHead);

  // Here we create unordered (and unpopulated) answer list
  const answerList = document.createElement("ul");

  // We don't want to add this again as we collect our wrong answers
  const notAllowed = [questionObject];

  // Loop and call genWrongAnswers till we have our 3 other incorrect options
  for (let i = 0; i < 3; i++) {
    const wrongAnswer = genWrongAnswers(notAllowed, firstTwenty);

    notAllowed.push(wrongAnswer);
  }

  // Shuffle our entire list of answers
  shuffle(notAllowed);

  // Loop through shuffled list and append to the dom
  notAllowed.forEach((answer) => {
    const wrongAnsElement = document.createTextNode(answer.romanian);
    const wrongAnsTag = document.createElement("li");
    wrongAnsTag.appendChild(wrongAnsElement);
    wrongAnsTag.className = "answer";
    answerList.appendChild(wrongAnsTag);

    // Add event listener for some interactivity with our answer options
    wrongAnsTag.addEventListener("click", (event_) => {
      if (questionObject === answer) {
        wrongAnsTag.style.color = "lightyellow";
        const correctAlertElement = document.createTextNode("Correct!");
        const correctAlertTag = document.createElement("span");
        correctAlertTag.appendChild(correctAlertElement);
        stage.appendChild(correctAlertTag);
      } else {
        wrongAnsTag.style.color = "red";
        wrongAnsTag.style.textDecoration = "line-through";
      }
    });
  });
  stage.appendChild(answerList);
};

const main = () => {
  genCorrectAnswer();

  const clearButton = document.createElement("button");
  clearButton.addEventListener("click", (event_) => {
    clearStage();
  });
  clearButton.innerText = "Next >>";
  document.getElementById("body").appendChild(clearButton);
};

const clearStage = () => {
  while (stage.hasChildNodes()) {
    stage.lastChild.remove();
  }
  genCorrectAnswer();
};

main();
