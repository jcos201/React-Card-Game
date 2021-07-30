const BASE_URL = 'https://deckofcardsapi.com/api/deck/';

function dealBlackJack() {
    return fetch(BASE_URL+'new/shuffle/?deck_count=6'
        ).then(response => {
            if(response.ok) return response.json();
            throw new Error('Well this is embarassing, something went wrong ');
        }).then(data => console.log(data))
}

export {
    dealBlackJack,
}