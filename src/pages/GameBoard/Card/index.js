import styled from 'styled-components';

const CardImage = styled.img`
    height: 80px;
`
const CardBack = styled.div`
background-image: url('http://brainjar.com/css/cards/graphics/cardback.gif');
border-color: #808080 #000000 #000000 #808080;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    color: #000000;
    font-size: 20pt;
    height: 90px;
    width:65px;
    margin: 0 5px;
`



function Card(props) {
    const displayCard = props.showCard;

    if(displayCard){
        return (
            <CardImage src={props.image}/>
            )
    }

    return (
        <CardBack/>
        )
}

export default Card;