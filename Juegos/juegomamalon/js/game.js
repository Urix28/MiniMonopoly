// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './helper';

// treasure coordinates
const WIDTH = 400;
const HEIGH = 400;

function perdio() {
  setTimeout(() => {
                window.location.replace("../../index.html");


            }, 100);
}

function ganar(){

  setTimeout(() => {

              window.location.replace("../../index.html");
  }, 100);
}

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

// click handler
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 20 ) {
    alert(`Felicidades, encontraste el tesoro en  ${clicks} clicks!`);
    ganar(); 
  }

  if (clicks === 20) {
    alert("perdiste no lograste encontra el tesoro en 20 intentos")
    perdio(); 
  }
});