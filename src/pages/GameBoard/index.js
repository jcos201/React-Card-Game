import styled from "styled-components";
import { useState, useEffect } from "react";

import Card from "./Card";

import { dealBlackJack, shuffleBlackJackDeck, drawCards, calculateHand } from "../../services/blackjackService";

const Table = styled.section `
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: space-around;
min-height: 75vh;
min-width: 90vw;
border: 18px solid brown;
background-color: green;
border-radius: 0 0 170px 170px;
box-shadow: inset 0 0 10px #000000;
margin-bottom: 10px;
`

const UserInputs = styled.section `
display: flex;
justify-content:space-around;
`

const Cardholder = styled.div `
display: flex;
min-height: 10vh;
min-width: 10vw;
margin: 0 10px;
`

const Cardrow = styled.section `
display: flex;
justify-content: space-around;
`

const DeckButton = styled.button `
height: 25px;
line-height: 20px;
width: 55px;
border: 1px solid orange;
border-radius: 5%;
`



const ScoreRow = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Score = styled.div `
height: 30px;
background-color: white;
color: black;
text-align: center;
box-shadow: inset 0 0 10px #000000;
line-height: 30px;
width: 20%;
`


function GameBoard(props) {
    const [cardsDealt, setCardsDealt] = useState(false);

    const [playerCards, setPlayerCards] = useState([]);
    const [playerHand, setPlayerHand] = useState(0);
    const [dealerCards, setDealerCards]  = useState([]);
    const [dealerHand, setDealerHand] = useState(0);

    const [showDealerCards, setShowDealerCards] = useState(false);

    /*
    handleDeal function is only used at the beginning of a new hand
    */
    async function handleDeal(event) {
        event.preventDefault();
        try {
            await dealBlackJack();
            let cards = await drawCards(4);

            let player = [cards[0][0],cards[2][0]]
            let dealer = [cards[1][0],cards[3][0]]

            setPlayerCards(prevState => ([
                ...prevState,
                ...player,
            ]));

            setDealerCards(prevState => ([
                ...prevState,
                ...dealer,
            ]))

            setCardsDealt(true);
        } catch (error) {
            alert(error.message)
        }
    };

    async function handleHit(event){
        event.preventDefault();
        try{
            let card = await drawCards(1);

            setPlayerCards(prevState => ([
                ...prevState,
                card[0][0],
            ]));
        } catch (error) {
            alert(error.message)
        }
        
    }
    
    async function handleShuflle(event) {
        event.preventDefault();
        try {
            await shuffleBlackJackDeck();
            setPlayerCards([]);
            setDealerCards([]);
            setShowDealerCards(false);
            setCardsDealt(false);
            handleDeal(event);
        } catch (error) {
            alert(error.message)
        }
    }

    function playerStay(event) {
        event.preventDefault();
        setShowDealerCards(true);
    }

    useEffect(() => {
        setPlayerHand(calculateHand(playerCards));
        if(showDealerCards) {
            setDealerHand(calculateHand(dealerCards));
        } else if(cardsDealt){
            setDealerHand(calculateHand([dealerCards[0]]));
        }
    }, [playerCards, dealerCards,showDealerCards,cardsDealt])

    return(<div>


        <Table>
            <Cardrow>
                <Cardholder>


                {dealerCards && dealerCards.length > 0 ?
                dealerCards.map((card, idx) => {
                    return(<Card 
                        {...props}
                        value={card.value}
                        image={card.image}
                        showCard={idx === 1 ? showDealerCards : true}
                        key={idx}
                        />)
                })
                :
                <>
                    <p></p>
                </>

                }
                </Cardholder>
            </Cardrow>
            <ScoreRow>
            <div>
            {showDealerCards ? 
                    "Dealer Score:"
                    :
                    "Dealer is showing:"
                }
            </div>
            <Score>
                
                {dealerHand}
            </Score>
                <div>
                {cardsDealt ?
                    <p>Your Score:</p>
                    :
                    <p>Click on 'Deal' to start game</p>
                }
                </div>
            <Score>
                
                {playerHand}
            </Score>
            </ScoreRow>
            <Cardrow>
            <Cardholder>
                {playerCards && playerCards.length > 0 ?
                playerCards.map((card, idx) => {
                    return(<Card 
                        {...props}
                        value={card.value}
                        image={card.image}
                        showCard={true}
                        key={idx}
                        />)
                })
                :
                <p>No cards drawn yet</p>

                }
            </Cardholder>
            </Cardrow>
        </Table>
        <UserInputs>
            <DeckButton onClick={handleHit}>Hit</DeckButton>
            <DeckButton onClick={playerStay}>Stay</DeckButton>
            {cardsDealt ? 
                <DeckButton onClick={handleShuflle}>Restart</DeckButton> : 
                <DeckButton onClick={handleDeal}>Deal</DeckButton> }
        </UserInputs>
            
            
        </div>
    )   
}

export default GameBoard;