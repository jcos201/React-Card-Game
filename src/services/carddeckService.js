function setDeckID(id) {
    if(id) {
        localStorage.setItem('deckID', id);
    } else {
        removeDeckID()
    }
}

function removeDeckID() {
    localStorage.removeItem('deckID');
}

function getDeckID() {
    let id = localStorage.getItem('deckID');
    return id;
}

export {
    setDeckID,
    removeDeckID,
    getDeckID,
}