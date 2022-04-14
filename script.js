//Global Variables
var pattern = [1, 3, 5, 8, 8, 7, 8, 5];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume =0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000;
var mistake =0;

//constants
 //how long each clue's  light and sound lasts
const cluePauseTime= 333;// interval of silence between each clue 
const nextClueWaitTime =1000; 
const mistakeNumber = 3;


function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    mistake = 0;
    rand();
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden")
document.getElementById("correct").classList.add("hidden");
document.getElementById("wrong").classList.add("hidden");

playClueSequence();
}



function stopGame(){
    //initialize game variables
    progress = 1;
    gamePlaying = false;
    clueHoldTime= 1000;
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden")
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 299.6,
  3: 329.6,
  4: 350.6,
  5: 400.6,
  6: 440.6,
  7: 500.6,
  8: 261*2
  
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button" + btn).classList.add("lit")

  }

function clearButton(btn){
  document.getElementById("button" + btn).classList.remove("lit")

  }



function playSingleClue(btn){
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime)
    setTimeout(clearButton,clueHoldTime,btn)
  }
}

function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime -20;
    
  
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return
  }
  
  if(btn==pattern[guessCounter]){
    document.getElementById("wrong").classList.add("hidden");
    document.getElementById("correct").classList.remove("hidden")
    if(guessCounter!=progress){guessCounter++;}
    else if(guessCounter==progress){
      if (progress==pattern.length-1){
        winGame();
      }
      else if (progress!=pattern.length-1){
        progress++;
        playClueSequence();
        
      }
    }
  }
  else{ mistake = mistake+1;
       document.getElementById("correct").classList.add("hidden");
       document.getElementById("wrong").classList.remove("hidden")
       
    if(mistake==mistakeNumber) {loseGame();}
    }
}

function rand(){
  let i= 0;
     while (i<9){
       pattern[i]=Math.floor(Math.random()*(8-1))+1;
       i++;
     }
  console.log(pattern)
  
}