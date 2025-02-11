// export const inputData = [];
const inputData = [];

document.getElementById("submit").addEventListener("click", (event_) => {
  const englishInput = document.getElementById("english");
  const romanianInput = document.getElementById("romanian");

  let englishValue = englishInput.value;
  let romanianValue = romanianInput.value;

  const wordObj = { english: englishValue, romanian: romanianValue };

  console.log(wordObj);
  inputData.push(wordObj);
});
