// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
alert('Indicate your name, Level and press START');

document.addEventListener("DOMContentLoaded", function() {

        let buttons = document.getElementsByTagName("button");
            for (let button of buttons) {
            button.addEventListener("click", function() {
                if (this.getAttribute("data-type") === "start") {
                  const playerName = document.querySelector('[name="playerName"]').value;
                  var  playerLevel = document.querySelector('[name="Level"]').innerText;

                    runGame(); console.log('game started'); alert("game started");
                    } else if (this.getAttribute("data-type") === "submit") {
                checkAnswer(); console.log('running the game'); alert("keep going");
                }
                else {
                    alert('Press START button')
                      }
            })
          }

            document.getElementById("answer-box").addEventListener("keydown", function(event) {
                  if (event.key === "Enter") {
                      checkAnswer();
                  }})

        });

     function runGame() {
        document.getElementById("answer-box").value = "";
        document.getElementById("answer-box").focus();



    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 12) + 1;
    let num2 = Math.floor(Math.random() *12) +1;
    displayMultiplyQuestion(num1, num2);
     }

     function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;


}
/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
                incrementScore();
    } else {
                incrementWrongAnswer();
    }
    let oldq = parseInt(document.getElementById("q").innerText);
    if (oldq<10) { runGame(calculatedAnswer[1]);}
      else { oldq = 0;
            updateTabList(); Timer(0); displayMultiplyQuestion(0, 0);
            document.getElementById("Correct").innerText = 0;
            document.getElementById("inCorrect").innerText = 0;
        document.getElementById("q").innerText = 0;
        alert(`Game end.  START Again !!!`);
        throw `Game end.  START Again !!!`;
      }
}
/**
 * Gets the operands (the numbers)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    return [operand1 * operand2];

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("Correct").innerText);
    document.getElementById("Correct").innerText = ++oldScore;
    let oldq = parseInt(document.getElementById("q").innerText);
    document.getElementById("q").innerText = ++oldq;
}
     /**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("inCorrect").innerText);
    document.getElementById("inCorrect").innerText = ++oldScore;
    let oldq = parseInt(document.getElementById("q").innerText);
    document.getElementById("q").innerText = ++oldq;

}
  //   function Timer() {

     }

     function updateTabList() {
       let playerName = document.querySelector('[name="playerName"]').value;
       let cScore = parseInt(document.getElementById("Correct").innerText);
       let wScore = parseInt(document.getElementById("inCorrect").innerText);
  //     let timer = Timer();
  //     var player=[playerName, cScore, wScore, timer];
    //   document.getElementById("player-details").........incomplet. sorry
    }
