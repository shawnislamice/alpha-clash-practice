function hide_element_by_id(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function show_element_by_id(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

//PLayground

function get_random_alphabet() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabet.split("");
  return alphabets[Math.floor(Math.random() * alphabets.length)];
}
function set_highlighter_by_id(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function remove_background_color_by_id(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function get_element_value_by_id(elementId) {
  const element = document.getElementById(elementId).innerText;
  const value = parseInt(element);
  return value;
}

function set_element_value_by_id(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function get_text_element_by_id(elementId){
  const element=document.getElementById(elementId)
  const text=element.innerText.toLowerCase()
  return text
}
