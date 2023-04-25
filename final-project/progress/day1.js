//defining my variables
const playBTN = document.getElementById('play-btn');
const synth = new Tone.Synth().toDestination();

/* 
with audio in the browser users have to interact with 
the page in order for the audio to play, so I added a button
that plays the music when you click on it
*/
playBTN.addEventListener('click', () => {
  //this is just to make things work idk
  if(Tone.context.state !== 'running') {
    Tone.start();
  }
  //the note that plays on clicking the button
  synth.triggerAttackRelease('C3', '1s');
});