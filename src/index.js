const init = () => {

console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(response) {
  console.log(response);
  return response.json();
})
.then(function(json) {
  console.log(json);
});
}

const imgContainer = document.querySelector('div.dog-image-container');
const imgDrop = document.querySelector('body.breed-dropdown');


document.addEventListener('DOMContentLoaded', init);