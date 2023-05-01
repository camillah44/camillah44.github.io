const playBTN1 = document.getElementById('play-btn1');
const synth1 = new Tone.Synth().toDestination();

playBTN1.addEventListener('click', () => {
  //this is just to make things work idk
  if(Tone.context.state !== 'running') {
    Tone.start();
  }
  //the note that plays on clicking the button
  synth1.triggerAttackRelease('C3', '1s');
});

playBTN1.addEventListener( "click", function toggleWords ( event ) {
  // A few variables to help us track important values/references
  var target = event.target, values = [], placed;
  // If the clicked element has multiple values
  if ( target.hasAttribute( "data-values" ) ) {
      // Split those values out into an array
      values = target.getAttribute( "data-values" ).split( "," );
      // Find the location of its current value in the array
      placed = values.indexOf( target.textContent );
      // Set its text to be the next value in the array
      target.textContent = values[ ++placed % values.length ];   
  }
});