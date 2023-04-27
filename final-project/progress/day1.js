//defining my variables
const playBTN1 = document.getElementById('play-btn1');
const playBTN2 = document.getElementById('play-btn2');
const playBTN3 = document.getElementById('play-btn3');

//simple synth
const synth1 = new Tone.Synth().toDestination();
// synth that makes play multiple notes at once
const synth2 = new Tone.PolySynth().toDestination();
//synth2.set({ detune: -400 });

// the notes that play during my sequence
const notes = ["C3", "Eb3", "G3", "Bb3"];

/*
in this sequence, each note in the array called "notes" 
plays one at a time, for a quarter note
*/
const synthPart = new Tone.Sequence(
  function(time, note) {
    synth2.triggerAttackRelease(note, "10hz", time);
  },
  notes,
  "4n"
);

playBTN3.addEventListener('click', () => {
  if (Tone.Transport.state !== "running" ) {
    Tone.start();
    synthPart.start();
    Tone.Transport.start();
  }
  else {
    Tone.pause();
    synthPart.pause();
    Tone.Transport.pause()
  }
  //makes the sequence start on click
});

/*
if(Tone.context.state !== 'running') {
  Tone.start();
  synthPart.start();
  Tone.Transport.start();
}

  if (Tone.Transport.state === "paused" ) {  
          Tone.Transport.start("+0.1") })
    else {
          Tone.Transport.pause()  }
    }

/* 
with audio in the browser users have to interact with 
the page in order for the audio to play, so I added a button
that plays the music when you click on it
*/

playBTN1.addEventListener('click', () => {
  //this is just to make things work idk
  if(Tone.context.state !== 'running') {
    Tone.start();
  }
  //the note that plays on clicking the button
  synth1.triggerAttackRelease('C3', '1s');
});

playBTN2.addEventListener('click', () => {
  if(Tone.context.state !== 'running') {
    Tone.start();
  }
  //using an array to make a chord
  //note to self I added the notes in backward (it should be lowest to highest) but it works either way
  synth2.triggerAttackRelease(['A4', 'E3', 'C3'], '1s');
});

