const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  // minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  // minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
}

function printMinutes() {

}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
let li = document.createElement('li')
li.innerHTML=chronometer.splitClick()
splits.appendChild(li)
}

function clearSplits() {
let allSplits = document.getElementById('splits')
allSplits.innerHTML=''
}

function setStopBtn() {
  btnLeft.className = 'btn stop'
  btnLeft.innerText = 'STOP'
}

function setSplitBtn() {
  btnRight.className = 'btn split'
  btnRight.innerText = 'SPLIT'
}

function setStartBtn() {
  btnLeft.className = 'btn start'
  btnLeft.innerText = 'START'
}

function setResetBtn() {
  btnRight.className = 'btn reset'
  btnRight.innerText = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains('start')){
    chronometer.startClick(printTime)
    setStopBtn()
    setSplitBtn()
  } else {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains('reset')){
    chronometer.resetClick()
    printTime()
  }  else {
    // chronometer.stopClick()
    setStartBtn()
    printSplit()
  }
});
