function play() {
  // document.getElementById('home-screen').classList.add('hidden')
  // document.getElementById('playground').classList.remove('hidden')
  hide_element_by_id("home-screen");
  hide_element_by_id("final-score");
  show_element_by_id("playground");
  //reset scores
  set_element_value_by_id("life-score", 5);
  set_element_value_by_id("current-score", 0);
  continue_game();
  //   remove_background_color_by_id()
}
function continue_game() {
  const alphabet = get_random_alphabet();
  document.getElementById("display-value").innerText = alphabet.toUpperCase();
  set_highlighter_by_id(alphabet);
}

document.addEventListener("keyup", function (event) {
  const currentAlphabetElement = document.getElementById("display-value");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  if (event.key == "Escape" || event.key == "Enter") {
    game_over();
  }
  console.log(event.key)
  if (event.key == expectedAlphabet) {
    //New round started
    remove_background_color_by_id(expectedAlphabet);
    continue_game();
    const currentScore = get_element_value_by_id("current-score");
    const updatedScore = currentScore + 1;
    set_element_value_by_id("current-score", updatedScore);
    return updatedScore;
  } else {
    const currentLife = get_element_value_by_id("life-score");

    const updatedLife = currentLife - 1;
    set_element_value_by_id("life-score", updatedLife);
    if (currentLife == 0) {
      game_over();
    }
  }
});

document.getElementById("play-again").addEventListener("click", function () {
  play();
});
function game_over() {
  alert("Game Over");
  hide_element_by_id("playground");
  show_element_by_id("final-score");
  //Update Score
  const finalLastScore = get_element_value_by_id("game-score");
  const score = get_element_value_by_id("current-score");
  console.log(score);
  set_element_value_by_id("game-score", score);
  //Clear the last selected alphabet
  const currentAlphabet = get_text_element_by_id("display-value");
  console.log(currentAlphabet);
  remove_background_color_by_id(currentAlphabet);
}
