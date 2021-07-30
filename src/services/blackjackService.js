import { setDeckID, getDeckID } from "./carddeckService";

const BASE_URL = 'https://deckofcardsapi.com/api/deck/';


function dealBlackJack() {
    return fetch(BASE_URL+'new/shuffle/?deck_count=6'
        ).then(response => {
            if(response.ok) return response.json();
            throw new Error('Well this is embarassing, something went wrong ');
        }).then(data => setDeckID(data.deck_id))
}

function shuffleBlackJackDeck() {
    let id = getDeckID();
    return fetch(BASE_URL+id+'/shuffle/'
    ).then(response => {
        if(response.ok) return response.json();
        throw new Error(`Sorry can't do that right now!`);
    }).then(data => console.log(data))
}

export {
    dealBlackJack,
    shuffleBlackJackDeck,
}