const init = () => {
console.log('%c HI', 'color: firebrick')
dogImages();
dogListAll();
breedMenu().addEventListener('change', onChange)
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
function dogListAll() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
      return response.json();
    })
    .then(function(dogListAll) {
      renderList(dogListAll);
    });
    }  
// recreate dogListAll to be an array that gets passed into renderList 
//so that it can be then parsed through to be alphabatized and then found
//throught the drop down menu, and also only appear when each value
//[a, b, c] is called
function renderList(dogListAll) {
    const listDogArray = Object.keys(dogListAll.message)
    listDogArray.forEach(doggo => {
        let listItems = document.createElement('li')
        listItems.innerText = doggo
        listContainer().appendChild(listItems)
    });
    }
function onChange(e) {
        
    }
    
}
const breedMenu = () => document.getElementById('breed-dropdown')
const imgContainer = () => document.getElementById('dog-image-container');
const listContainer = () => document.getElementById('dog-breeds');
document.addEventListener('DOMContentLoaded', init);
// breedMenu().addEventListener('change', onChange)