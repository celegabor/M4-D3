
const apiKey = 'ZKA03SJniHXA8Ai2IrlbfrF8DNweDiXZdPONMAiWMR6vMM1IkeNILx3p';


let result = document.querySelector('#result')

function createCard(imageUrl, imageId, widthValue, heightValue, photographerUrl) {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = imageUrl;

    const widthElement = document.createElement('p');
    widthElement.innerText = 'WIDTH: ' + widthValue; 

    const heightElement = document.createElement('p');
    heightElement.innerText = 'HEIGHT: ' + heightValue; 

    const idElement = document.createElement('p');
    idElement.innerText = 'ID: ' + imageId;

    const photographerUrlElement = document.createElement('p');
    photographerUrlElement.innerHTML = 'Photographer URL: <a href="' + photographerUrl + '">' + photographerUrl + '</a>';

    card.appendChild(image);
    card.appendChild(idElement);
    card.appendChild(widthElement);
    card.appendChild(heightElement);
    card.appendChild(photographerUrlElement);
    
    return card;
}


function sito() {

    let inserimento = document.querySelector('#inserimento').value;

  return fetch('https://api.pexels.com/v1/search?query=' + inserimento, {
    headers: {
      'Authorization': apiKey
    }
  })
  .then(res => res.json())
  .then(res => {
    console.log(res);
    const images = res.photos;
    
    
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';
    
    
    images.forEach(photo => {
        const imageUrl = photo.src.small;
        const imageId = photo.id;
        const widthValue = photo.width;
        const heightValue = photo.height;
        const photographerUrl = photo.photographer_url;
    
        const card = createCard(imageUrl, imageId, widthValue, heightValue, photographerUrl);
        cardsContainer.appendChild(card);
    });
    
    result.innerText = 'La tua ricerca: ' + inserimento.toUpperCase() + ' ha generato: ' + images.length + ' risultati';
})
  .catch(err => console.log('risp neg: ', err));
}

sito()
