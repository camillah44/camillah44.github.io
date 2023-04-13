const wordsContainer = document.getElementById('words-container');

wordsContainer.addEventListener('click',() => {
  wordsContainer.innerText = 'McLuhan was both a surprisingly easy and surprisingly difficult read. On one hand, the amount of pictures make this text fairly quick to get through on a first-read. On the other hand, on deeper inspection, McLuhan voices claims on so many topics, from copyright to audio to family. In the end, trying to decipher it all, I went back to the title, and somehow I think that describes this fluid mess pretty well. Double click to go back.';
});

wordsContainer.addEventListener('dblclick',() => {
  wordsContainer.innerText = 'click to see response';
});
