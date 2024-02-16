function play_game() {
  show_element_by_id("playground");
  hide_element_by_id("home");
  const alphabet = get_alphabet();
  continue_game();
  set_element_value("live-score", 0);
  set_element_value("life-score", 5);
  hide_element_by_id("final-score");
  
}
let currentScore = 0;
// Playground
document.addEventListener("keyup", function (event) {
  const currentAlphabet = document
    .getElementById("play-screen")
    .innerText.toLowerCase();
  if (event.key == currentAlphabet) {
    remove_highlighter(currentAlphabet);
    const score = parseInt(document.getElementById("live-score").innerText);
    continue_game();
    const updatedScore = score + 1;
    set_element_value("live-score", updatedScore);
  } else if (event.key !== currentAlphabet) {
    // remove_highlighter(currentAlphabet);
    const score = parseInt(document.getElementById("life-score").innerText);
    const updatedScore = score - 1;
    set_element_value("life-score", updatedScore);
    if (updatedScore < 0) {
      alert("Game Over !");
      let updatedScore = 0;
      set_element_value("life-score", updatedScore);
      show_element_by_id("final-score");
      hide_element_by_id("playground");

      const score = parseInt(document.getElementById("live-score").innerText);
      document.getElementById("last-score").innerText = score;
      remove_highlighter(currentAlphabet)
    }
  }
  if(event.key=="Escape"||event.key=="Enter"){
    game_over();
  }
});
// Playground
// Play Again

// Play Again
// Utility Function Starts here
function show_element_by_id(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function hide_element_by_id(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function get_alphabet() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const getAlphabet = alphabets.split("");
  return alphabets[Math.floor(Math.random() * alphabets.length)];
}
function continue_game() {
  const alphabet = get_alphabet();
  document.getElementById("play-screen").innerText = alphabet.toUpperCase();
  document.getElementById(alphabet).classList.add("bg-orange-400");
}

function remove_highlighter(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function set_element_value(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function get_element_value(elementId) {
  const element = document.getElementById(elementId).innerText;
  const value = parseInt(element);
  return value;
}
function game_over(elementId){
  hide_element_by_id('home')
  hide_element_by_id('playground')
  show_element_by_id("final-score");
  const currentAlphabet = document
    .getElementById("play-screen")
    .innerText.toLowerCase();
  remove_highlighter(currentAlphabet)
  
}
// Utility Function ends here
