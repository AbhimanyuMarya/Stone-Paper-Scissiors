function rpmDisplayMessage(yourChoice, botChoice, result) {
  const yourChoiceH4Element = document.createElement("h3");
  const botChoiceH4Element = document.createElement("h3");
  const finalResultH4Element = document.createElement("h3");

  const yourChoiceTextNode = document.createTextNode(
    `Your choice: ${yourChoice}`
  );
  const botChoiceTextNode = document.createTextNode(`Bot choice: ${botChoice}`);
  const finalResultTextNode = document.createTextNode(
    `FINAL RESULT: ${result}`
  );

  yourChoiceH4Element.appendChild(yourChoiceTextNode);
  botChoiceH4Element.appendChild(botChoiceTextNode);
  finalResultH4Element.appendChild(finalResultTextNode);

  document.getElementById("YourChoice").appendChild(yourChoiceH4Element);
  document.getElementById("BotChoice").appendChild(botChoiceH4Element);
  document.getElementById("FinalResult").appendChild(finalResultH4Element);
}

function playRPSResults(yourChoice, botChoice) {
  console.log("Your choice: " + yourChoice);
  console.log("Bot choice: " + botChoice);

  const result = rpsDatabase[yourChoice][botChoice];

  if (result === "equal") {
    const result = "Tie !! ROLL AGAIN !!!";
    rpmDisplayMessage(yourChoice, botChoice, result);
  } else if (result === "won") {
    const result = "YOU WON 🎂🎂🎂🎂";
    rpmDisplayMessage(yourChoice, botChoice, result);
  } else if (result === "lost") {
    const result = "BETTER LUCK NEXT TIME 🤢🤢🤢🤢🤢";
    rpmDisplayMessage(yourChoice, botChoice, result);
  }
}

function rpsGame(yourChoice) {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  yourChoice = yourChoice.id;
  let botChoice = choices[randomIndex];
  playRPSResults(yourChoice, botChoice);
}

let rpsDatabase = {
  rock: {
    paper: "lost",
    rock: "equal",
    scissors: "won",
  },
  paper: {
    paper: "equal",
    rock: "won",
    scissors: "lost",
  },
  scissors: {
    paper: "won",
    rock: "lost",
    scissors: "equal",
  },
};

function resetDisplayMessage() {
  document.getElementById("YourChoice").textContent="";
  document.getElementById("BotChoice").textContent="";
  document.getElementById("FinalResult").textContent="";
}
