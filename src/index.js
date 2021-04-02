const init = () => {
console.log('%c HI', 'color: firebrick')
dogImages();
dogListAll();
function dogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
      return response.json();
    })
    .then(function(dogData) {
      renderDogs(dogData);
    });
    }
function renderDogs(dogData) {
    const imageURLs = dogData.message
    imageURLs.forEach(URL => {
        let img = document.createElement('img')
        img.src = URL
        imgContainer().appendChild(img)
    });
    }
const imgContainer = () => document.getElementById('dog-image-container');

function dogListAll() {
fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
      return response.json();
    })
    .then(function(dogListAll) {
      renderList(dogListAll);
    });
    }  
function renderList(dogListAll) {
    const listDogArray = dogListAll.message
    listDogArray.forEach(doggo => {
        let listItems = document.createElement('li').src
        listItems.src = doggo
        listContainer().appendChild(listItems)
    });
    }
const listContainer = () => document.getElementById('dog-breeds');
}
document.addEventListener('DOMContentLoaded', init);

// const imgDrop = document.querySelector('body.breed-dropdown');