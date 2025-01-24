const stage = document.getElementById("stage")

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
]

const table = document.createElement("table");
table.className = "table"

const headerRow = document.createElement("tr")

const engHead = document.createElement("td")
const romHead = document.createElement("td")

const engHeaderText = document.createTextNode("English: ")
engHead.appendChild(engHeaderText)
engHead.className = "table-header"

const romHeaderText = document.createTextNode("Românǎ: ")
romHead.appendChild(romHeaderText)
romHead.className = "table-header"

headerRow.appendChild(engHead)
headerRow.appendChild(romHead)
headerRow.className = "table-header"

table.appendChild(headerRow)

firstTwenty.forEach((word) => {

    const newRow = document.createElement("tr")
    const engWord = document.createElement("td")
    const romWord = document.createElement("td")

    const englishText = document.createTextNode(word.english);
    engWord.appendChild(englishText);

    const romanianText = document.createTextNode(word.romanian);
    romWord.appendChild(romanianText);

    newRow.appendChild(engWord)
    newRow.appendChild(romWord)

    newRow.addEventListener("click", (event_) => {
        const targetColor = "aliceblue"
        if (newRow.style.background === targetColor) {
            newRow.style.background = "white"
        }
        else {
            newRow.style.background = targetColor
        }
    })

    table.appendChild(newRow)

});

stage.appendChild(table)

