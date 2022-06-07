// Challenge 1
const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let ulContainer = document.querySelector("#dog-breeds")
const dropdown = document.querySelector("#breed-dropdown")
let breedsArray = []

dropdown.addEventListener('change', handleChange)

//fetch API for images
function getImages(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(images => {
        const imgs = images.message
        let imgsArray = createImgElement(imgs)
        renderElement(imgsArray)
    })
}

function createImgElement(imgs){
    return imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
    })
}

function renderImgs(imgsArray){
   imgsArray.forEach(element => {
       renderElement(element)
   })
}

function renderElement(element){
    ulContainer.innerHTML += element
}

function getBreeds(){
    fetch(breedUrl)
    .then(response => response.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message)
        const breedsLis = createLiElement(breedsArray)
        renderLis(breedsLis)
    })
}

function createLiElement(breedsArray){
    return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`
        return li
    })
}

function renderLis(breedsLis){
    breedsLis.forEach(element => {
        renderElement(element)
    })
 }

function handleChange(event){
    const letter = event.target.value 
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    const filteredBreedsLis = createLiElement(filteredBreeds);
    ulContainer.innerHTML = ''
    renderLis(filteredBreedsLis)

}

//getImages();

getBreeds();
 
    const colorArray = ['red', 'orange', 'green', 'blue', 'purple']
    ulContainer.addEventListener('click', (event) => {
        const randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
        event.target.style.color = randomColor
    })


