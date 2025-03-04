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

const anotherTwenty = [
  { english: "father", romanian: "tatăl" },
  { english: "our", romanian: "nostru" },
  { english: "which", romanian: "care" },
  { english: "you", romanian: "ești" },
  { english: "in", romanian: "în" },
  { english: "Hallowed-be", romanian: "Sfințească-se" },
  { english: "names", romanian: "numele" },
  { english: "your", romanian: "tău" },
  { english: "vineyard", romanian: "vie" },
  { english: "kingdom", romanian: "împărăția" },
  { english: "your", romanian: "ta" },
  { english: "be-it-is", romanian: "facă-se" },
  { english: "will", romanian: "voia" },
  { english: "as", romanian: "precum" },
  { english: "heaven", romanian: "cer" },
  { english: "so", romanian: "așa" },
  { english: "and", romanian: "și" },
  { english: "on", romanian: "pe" },
  { english: "earth", romanian: "pământ" },
  { english: "bread", romanian: "pâine" },
  { english: "our", romanian: "noastră" },
  { english: "the", romanian: "cea" },
  { english: "To-(for)", romanian: "spre" },
  { english: "being", romanian: "ființă" },
  { english: "give-us", romanian: "dă-ne-o" },
  { english: "nine", romanian: "nouă" },
  { english: "today", romanian: "astǎzi" },
  { english: "us", romanian: "ne" },
  { english: "forgive", romanian: "iartă" },
  { english: "mistakes", romanian: "greșelile" },
  { english: "our", romanian: "noastre" },
  { english: "we", romanian: "noi" },
  { english: "debtors", romanian: "greșiților" },
  { english: "our", romanian: "noștri" },
  { english: "no", romanian: "nu" },
  { english: "cause", romanian: "duce" },
  { english: "temptation", romanian: "ispită" },
  { english: "but", romanian: "ci" },
  { english: "deliver-from", romanian: "izbăveștede" },
  { english: "heaven", romanian: "cel" },
  { english: "river", romanian: "rău" },
];

const table = document.createElement("table");
table.className = "table";

const headerRow = document.createElement("tr");

const engHead = document.createElement("td");
const romHead = document.createElement("td");

const engHeaderText = document.createTextNode("English: ");
engHead.appendChild(engHeaderText);
engHead.className = "table-header";

const romHeaderText = document.createTextNode("Românǎ: ");
romHead.appendChild(romHeaderText);
romHead.className = "table-header";

headerRow.appendChild(engHead);
headerRow.appendChild(romHead);
headerRow.className = "table-header";

table.appendChild(headerRow);

anotherTwenty.forEach((word) => {
  const newRow = document.createElement("tr");
  const engWord = document.createElement("td");
  const romWord = document.createElement("td");

  const englishText = document.createTextNode(word.english);
  engWord.appendChild(englishText);

  const romanianText = document.createTextNode(word.romanian);
  romWord.appendChild(romanianText);

  newRow.appendChild(engWord);
  newRow.appendChild(romWord);

  newRow.addEventListener("click", (event_) => {
    const targetColor = "aliceblue";
    if (newRow.style.background === targetColor) {
      newRow.style.background = "white";
    } else {
      newRow.style.background = targetColor;
    }
  });

  table.appendChild(newRow);
});

stage.appendChild(table);
