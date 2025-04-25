window.onload = function() {
  let who = ['A duck', 'An alien', 'A sausage', 'Some weird guy', 'Deimián and Cristian'];
let action = ['got stuck in' , 'climbed', 'surfed', 'jumped over', 'starred at'];
let what = ['a chicken', 'my chocolate fondue', 'a goose', 'the left ear\'s dog', 'the Tindfjallajökull'];
let when = ['5 mn ago!', 'when making a strike at the same time!', 'while gently drinking a \"Cheesed to Meet Blue\"... ', 'in a way that could be your future!', 'at the worst moment of your fuzzy uncle\'s hiccups crisis!'];

function getRandomInt(max) {
  return Math.floor(Math.random() * 4);
}

document.getElementById("excuse").innerHTML = who[getRandomInt(1)]+" "+action[getRandomInt(1)]+" "+what[getRandomInt(1)]+" "+when[getRandomInt(1)];
};
