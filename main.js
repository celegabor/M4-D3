
const apiKey = 'ZKA03SJniHXA8Ai2IrlbfrF8DNweDiXZdPONMAiWMR6vMM1IkeNILx3p';


let result = document.querySelector('#result')

function createCard(imageUrl) {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = imageUrl;

    card.appendChild(image);
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
        const card = createCard(imageUrl);
        cardsContainer.appendChild(card);
    });
    
    result.innerText = 'La tua ricerca: ' + inserimento.toUpperCase() + ' ha generato: ' + images.length + ' risultati';
})
  .catch(err => console.log('risp neg: ', err));
}



sito()
