import { setDeckID, getDeckID } from "./carddeckService";

const BASE_URL = 'https://deckofcardsapi.com/api/deck/';


function dealBlackJack() {
    return fetch(BASE_URL+'new/shuffle/?deck_count=6'
        ).then(response => {
            if(response.ok) return response.json();
            throw new Error('Well this is embarassing, something went wrong ');
        }).then(data => setDeckID(data.deck_id));

}

function shuffleBlackJackDeck() {
    let id = getDeckID();
    return fetch(BASE_URL+id+'/shuffle/'
    ).then(response => {
        if(response.ok) return response.json();
        throw new Error(`Sorry can't do that right now!`);
    }).then(data => console.log(data))
}

function drawCards(num) {
    let id = getDeckID();
    return fetch(BASE_URL+id+'/draw/?count='+num
    ).then(response=>{
        if(response.ok) return response.json();
        throw new Error(`The dealer is missing, can't deal cards right now.`)
    }).then(data => {
        let arr = [];
        data.cards.map(card => {
            arr.push([card])
        })
        return arr;
    })
}

function calculateHand(cards) {
    if(cards){
        const reducer = (currentValue, card) => {
            let val = card.value;
            if(val === "KING" || val === "JACK" || val === "QUEEN"){
                return currentValue += 10;
            } else if(val !== "ACE") {
                let num = parseInt(val);

                return currentValue += num;
            } else if(val < 12) {
                return currentValue += 10;
            } else {
                return currentValue += 1;
            }
        }

        return cards.reduce(reducer, 0);
    } else return 0;
}

export {
    dealBlackJack,
    shuffleBlackJackDeck,
    drawCards,
    calculateHand,
}