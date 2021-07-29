import styled from "styled-components";
import { useState, useEffect } from "react";

const Button = styled.a`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 0;
width: 11rem;
background: white;
color: #3A5F75;
border: 2px solid white;
`;

function HomePage (props) {
    const [userName, setUserName] = useState('Player 1');

    function handleNameSubmit() {
      setUserName("New Name")
    }
    return (
        <div>
        <p>BlackJack 21!</p>
        <p>{userName}</p>
        <Button onClick={handleNameSubmit}>Enter</Button>
        </div>
    )
}

export default HomePage;