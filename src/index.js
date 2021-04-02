const init = () => {
  console.log('%c HI', 'color: firebrick')
  dogImages();
  dogListAll();
  breedMenu().addEventListener('change', onChange)
};

let breeds

function dogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
      return response.json();
    })
    .then(function(dogData) {
      renderDogs(dogData);
    });
};

function renderDogs(dogData) {
    const imageURLs = dogData.message
    imageURLs.forEach(URL => {
        let img = document.createElement('img')
        img.src = URL
        imgContainer().appendChild(img)
    });
};

function dogListAll() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json() )
    .then(dogListAll => {
      breeds = Object.keys(Array.from(dogListAll.message))
      renderList(breeds)
    });
};  

function renderList(listDogArray) {
    listDogArray.forEach(doggo => {
        let listItems = document.createElement('li')
        listItems.innerText = doggo
        listContainer().appendChild(listItems)
    });
    listContainer().addEventListener('click', changeColor)
};

function changeColor(e) {
  e.target.style.color='red'
};

function onChange(e) {
  console.log(e.target) 
  let letter = e.target.value
  listContainer().innerHTML = ' '
  const filteredBreeds = breeds.filter((breed, list) => breeds.lastIndexOf(breed) === list).sort((a, b) => a < b ? -1 : 1);
  renderList(filteredBreeds)
}
    

const breedMenu = () => document.getElementById('breed-dropdown')
const imgContainer = () => document.getElementById('dog-image-container');
const listContainer = () => document.getElementById('dog-breeds');
document.addEventListener('DOMContentLoaded', init);