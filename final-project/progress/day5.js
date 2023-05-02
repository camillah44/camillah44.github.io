onload = init;


function init() {
    //defining variables
    var onclick = clickUpdates();
    var wrapper = document.getElementById("wrapper");
    wrapper.addEventListener("click", onclick, false);  
    var audio1 = document.getElementById("audio1")
    var audio2 = document.getElementById("audio2")
    
}

//functions that play each individual mp3
function playAudio1 () {
  audio1.play();
  audio1.volume = 0.3;
}

function playAudio2 () {
  audio2.play();
  audio2.volume = 0.3;
}

function playAudio3 () {
  audio3.play();
  audio3.volume = 0.3;
}

function playAudio4 () {
  audio4.play();
  audio4.volume = 0.3;
}

function playAudio5 () {
  audio5.play();
  audio5.volume = 0.3;
}

function playAudio6 () {
  audio6.play();
  audio6.volume = 0.3;
}

function playAudio7 () {
  audio7.play();
  audio7.volume = 0.3;
}

function playAudio8 () {
  audio8.play();
  audio8.volume = 0.3;
}

function playAudio9 () {
  audio9.play();
  audio9.volume = 0.3;
}

function playAudio10 () {
  audio10.play();
  audio10.volume = 0.3;
}

function playAudio11 () {
  audio11.play();
  audio11.volume = 0.3;
}

function playAudio12 () {
  audio12.play();
  audio12.volume = 0.3;
}

function playAudio13 () {
  audio13.play();
  audio13.volume = 0.3;
}

function playAudio14 () {
  audio14.play();
  audio14.volume = 0.3;
}

function playAudio15 () {
  audio15.play();
  audio15.volume = 0.3;
}

// rewrites the html to erase the instructions and start the poem
var startSong = function() {
  document.getElementById("changer").innerHTML = 
  '<p id="song-start"> Do you ever just...? <p>';
  var para1 = document.getElementById("start-song");
  //para1.classList.add("poem-class");
  return startSong;
}

//idk why I named the variables this way...
//adding each new line of the poem here
var startPoem = function() {
  var para2 = document.createElement("p");
  var text2 = document.createTextNode("Want to stop rushing the world");
  para2.appendChild(text2);
  document.getElementById("song-start").appendChild(para2);
  para2.classList.add("poem-class");
}

var poem2 = function() {
  var para3 = document.createElement("p");
  var text3 = document.createTextNode("Around you so it fits");
  para3.appendChild(text3);
  document.getElementById("song-start").appendChild(para3);
  para3.classList.add("poem-class");
}

var poem3 = function() {
  var para4 = document.createElement("p");
  var text4 = document.createTextNode("Your 9-5 reality");
  para4.appendChild(text4);
  document.getElementById("song-start").appendChild(para4);
  para4.classList.add("poem-class");
}

var poem4 = function() {
  var para5 = document.createElement("p");
  var text5 = document.createTextNode("If you give this place");
  para5.appendChild(text5);
  document.getElementById("song-start").appendChild(para5);
  para5.classList.add("poem-class");
  para5.classList.add("stanza-space");
}

var poem5 = function() {
  var para6 = document.createElement("p");
  var text6 = document.createTextNode("Your full attention");
  para6.appendChild(text6);
  document.getElementById("song-start").appendChild(para6);
  para6.classList.add("poem-class");
}

var poem6 = function() {
  var para7 = document.createElement("p");
  var text7 = document.createTextNode("I hope it transports you");
  para7.appendChild(text7);
  document.getElementById("song-start").appendChild(para7);
  para7.classList.add("poem-class");
}

var poem7 = function() {
  var para8 = document.createElement("p");
  var text8 = document.createTextNode("To a world far away");
  para8.appendChild(text8);
  document.getElementById("song-start").appendChild(para8);
  para8.classList.add("poem-class");
}

var poem8 = function() {
  var para9 = document.createElement("p");
  var text9 = document.createTextNode("A world where silence is quiet");
  para9.appendChild(text9);
  document.getElementById("song-start").appendChild(para9);
  para9.classList.add("poem-class");
  para9.classList.add("stanza-space");
}

var poem9 = function() {
  var para10 = document.createElement("p");
  var text10 = document.createTextNode("A world where pausing for a second is okay");
  para10.appendChild(text10);
  document.getElementById("song-start").appendChild(para10);
  para10.classList.add("poem-class");
}

var poem10 = function() {
  var para11 = document.createElement("p");
  var text11 = document.createTextNode("A world where joy is normal");
  para11.appendChild(text11);
  document.getElementById("song-start").appendChild(para11);
  para11.classList.add("poem-class");
}

var poem11 = function() {
  var para12 = document.createElement("p");
  var text12 = document.createTextNode("A world where balloons will lift you");
  para12.appendChild(text12);
  document.getElementById("song-start").appendChild(para12);
  para12.classList.add("poem-class");
}

var poem12 = function() {
  var para13 = document.createElement("p");
  var text13 = document.createTextNode("Up and up and up and up");
  para13.appendChild(text13);
  document.getElementById("song-start").appendChild(para13);
  para13.classList.add("poem-class");
  para13.classList.add("stanza-space");
}

var poem13 = function() {
  var para14 = document.createElement("p");
  var text14 = document.createTextNode("Your house of dreams awaits");
  para14.appendChild(text14);
  document.getElementById("song-start").appendChild(para14);
  para14.classList.add("poem-class");
}

var poem14 = function() {
  var para15 = document.createElement("p");
  var text15 = document.createTextNode("Floating on the resonant frequencies of the song you play");
  para15.appendChild(text15);
  document.getElementById("song-start").appendChild(para15);
  para15.classList.add("poem-class");
}

//making each click different
//base code for this function found here:
//https://www.sololearn.com/compiler-playground/WWXqYfP2FVEK/?ref=app
function clickUpdates() {
    var count = 0;
    var next = function() {
        switch(count) {
            case 0:
            // function click 1 here
            //return startSong;
            var words1 = startSong();
            var play1 = playAudio1();
            console.log("First Click: Display a block of paragraph.");
            break;
            case 1:
            // function click 2 here
            var words2 = startPoem();
            var play2 = playAudio2();
            console.log("Second Click: Replace the current paragraph with a new one.");
            break;
            case 2:
            // function click 3 here
            var words3 = poem2();
            var play3 = playAudio3();
            console.log("Third Click: The new paragraph gets replaced with another different paragraph.");
            break;
            case 3:
            // function click 4 here
            var words4 = poem3();
            var play4 = playAudio4();
            console.log("Fourth Click: The paragraph starts rotating.");
            break;
            case 4:
            // function click 5 here
            var words5 = poem4();
            var play5 = playAudio5();
            console.log("Fifth Click: The paragraph disappears.");
            break;
            case 5:
            // function click 6 here
            var words6 = poem5();
            var play6 = playAudio6();
            console.log("Sixth Click: //next function.");
            break;
            case 6:
            // function click 7 here
            var words7 = poem6();
            var play7 = playAudio7();
            console.log("Seventh Click: //some other function.");
            break;
            case 7:
            // function click 8 here
            var words8 = poem7();
            var play8 = playAudio8();
            console.log("Eigth Click: //some other function.");
            break;
            case 8:
            // function click 9 here
            var words9 = poem8();
            var play9 = playAudio9();
            console.log("Ninth Click: //some other function.");
            break;
            case 9:
            // function click 10 here
            var words10 = poem9();
            var play10 = playAudio10();
            console.log("Tenth Click: //some other function.");
            break;
            case 10:
            // function click 11 here
            var words11 = poem10();
            var play11 = playAudio11();
            console.log("Eleventh Click: //some other function.");
            break;
            case 11:
            // function click 12 here
            var words12 = poem11();
            var play12 = playAudio12();
            console.log("Twelfth Click: //some other function.");
            break;
            case 12:
            // function click 13 here
            var words13 = poem12();
            var play13 = playAudio13();
            console.log("Thirteenth Click: //some other function.");
            break;
            case 13:
            // function click 14 here
            var words14 = poem13();
            var play14 = playAudio14();
            console.log("Fourteenth Click: //some other function.");
            break;
            case 14:
            // function click 15 here
            var words15 = poem14();
            var play15 = playAudio15();
            console.log("Fifteenth Click: //some other function.");
            break;
            default:
            // function click 1 here
            console.log("Show's over. Stop clicking.");
            break;
           
        }
        count = count<15?count+1:15;
    }
    
    return next;
}