import classNames from "https://cdn.skypack.dev/classnames/bind";
import * as Tone from "https://cdn.skypack.dev/tone";

const playBTN1 = document.getElementById('play-btn1');

const polySynth = new Tone.PolySynth().toDestination();

const notes = ["C3", "Eb3", "G3", "Bb3"];

const synthPhrase1 = new Tone.Sequence(
  function(time, note) {
    polySynth.triggerAttackRelease(note, "10hz", time);
  },
  notes,
  "4n"
);

playBTN1.addEventListener("click", (e) => {
  if (!started) {
    Tone.start();
    synthPhrase1.start();
    Tone.getDestination().volume.rampTo(-10, 0.001)
    configLoop();
    started = true;
  }

  if (playing) {
    e.target.innerText = "Play";
    Tone.Transport.stop();
    synthPhrase1.stop();
    playing = false;
  }

  else {
    e.target.innerText = "Stop";
    Tone.Transport.start();
    synthPhrase1.start();
    playing = true;
  }
});

playBTN1.addEventListener ('click', () => {
  if (Tone.Transport.state !== "running" ) {
    Tone.start();
    synthPhrase1.start();
    Tone.Transport.start();
  }
});