let riddleAnswers = ['', 'towel', 'sponge', 'lunch n dinner', 'clock', 'Piano', 'Computer', 'Birthday Candle', 'Candle'];
let riddleContainers = document.getElementsByClassName('riddles-container');

for (let i = 0; i < riddleContainers.length; i++) {
  riddleContainers[i].addEventListener("mouseout", mouseOut);
  riddleContainers[i].addEventListener("mouseover", mouseOver);
  riddleContainers[i].addEventListener("click", clickEventHandling);
 // riddleContainers[i].addEventListener("mouseout", mouseOut);
}
function mouseOver(event) {
  let id = getRiddleElementId(event);
  if (id != -1) {
    let parent = document.getElementById(id);
    changeElementVisibility(parent, ".riddle-question", 'none');
    changeElementVisibility(parent, ".riddle-hover", 'block');
  }
}
function mouseOut(event) {
  let id = getRiddleElementId(event);
  if (id != -1) {
    let parent = document.getElementById(id);
    changeElementVisibility(parent, ".riddle-question", 'inline');
    changeElementVisibility(parent, ".riddle-hover", 'none');
  }
}
function clickEventHandling(event) {
  let id = getRiddleElementId(event);
  if (id != -1) {
    let parent = document.getElementById(id);
    changeElementVisibility(parent, ".riddle-question", 'none');
    changeElementVisibility(parent, ".riddle-hover", 'none');
    changeElementVisibility(parent, ".riddle-answer", 'inline');
    //parent.addEventListener('mouseout',mouseOut());
  }
}

function getRiddleElementId(event) {
  let number = Number(event.target.id);
  if (number == NaN) {
    return -1;
  }
  return number;
}
function changeElementVisibility(parent, className, rule) {
  let el = parent.querySelector(className);
  if (el != undefined) {
    el.style.display = rule;
  }
}
