
const apiKey = 'ZKA03SJniHXA8Ai2IrlbfrF8DNweDiXZdPONMAiWMR6vMM1IkeNILx3p';

function sito() {
    return fetch('https://api.pexels.com/v1/',{
    headers: {
        'Authorization' : apiKey
    }
})
}

sito().then(res => console.log('risposta: ', res)).catch(err => console.log('risp neg: ', err)).finally(() => console.log('fine'));
