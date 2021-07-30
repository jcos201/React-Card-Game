import styled from "styled-components";
import { useState} from "react";

import { dealBlackJack, shuffleBlackJackDeck } from "../../services/blackjackService";

const Table = styled.section `
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: space-around;
min-height: 80vh;
min-width: 90vw;
border: 18px solid brown;
background-color: green;
border-radius: 0 0 170px 170px;
`

const UserInputs = styled.section `
display: flex;
justify-content:space-around;
`

const Cardholder = styled.div `
border: 5px dashed white;
min-height: 10vh;
min-width: 10vw;
width: 10vw;
margin: 0 10px;
`

const Cardrow = styled.section `
display: flex;
justify-content: space-around;
`

const DeckButton = styled.button `
border: 1px solid white;
border-radius: 50%;
`

function GameBoard(props) {
    const [cardsDealt, setCardsDealt] = useState(false)

    async function handleDeal(event) {
        event.preventDefault();
        try {
            await dealBlackJack();
            setCardsDealt(true)
        } catch (error) {
            alert(error.message)
        }
    }

    async function handleShuflle(event) {
        event.preventDefault();
        try {
            await shuffleBlackJackDeck();
        } catch (error) {
            alert(error.message)
        }
    }

    return(<div>


        <Table>
            <Cardrow>
                <Cardholder></Cardholder>
            </Cardrow>
            <section>

            <p>Blackjack 21!</p>
            </section>
        {cardsDealt ? <p>Cards have been dealt</p> : <p>cards have not been dealt</p>}
            <Cardrow>
            <Cardholder/>
            <Cardholder/>
            <Cardholder/>
            </Cardrow>
        </Table>
        <UserInputs>

        {cardsDealt ? 
            <DeckButton onClick={handleShuflle}>Restart</DeckButton> : 
            <DeckButton onClick={handleDeal}>Deal</DeckButton> }
        </UserInputs>
            
            
        </div>
    )   
}

export default GameBoard;