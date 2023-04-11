
const button = document.querySelector('button');
const wrapper = document.querySelector('.wrapper');

button.addEventListener('click',() => {
  let colorGenerator = '#';
  colorGenerator += Math.random().toString(16).slice(2,8);
  wrapper.style.backgroundColor = colorGenerator;
  console.log(colorGenerator);
})