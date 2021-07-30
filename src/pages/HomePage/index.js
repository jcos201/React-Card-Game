import styled from "styled-components";
import { useState, useEffect } from "react";

const Button = styled.a`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 0;
width: 6rem;
background: white;
color: #3A5F75;
border: 2px solid white;
`;

const Input = styled.input`
display: flex;
justify-content: center;
text-align: center;
border-radius: 5px;
padding: 0.5rem 0;
margin: 0.5rem 0;
width: 20rem;
background: white;
color: #3A5F75;
border: 2px solid white;
`;

function HomePage (props) {
    const [formState, setFormState] = useState(getInitialFormState);

    function getInitialFormState(){
        return {
            username: "",
        }
    }

    function handleChange (event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const [userName, setUserName] = useState('Player 1');
    const [gamePicked, setGamePicked] = useState(0);
    const [namePicked, setNamePicked] = useState(false);

    function handleNameSubmit() {
        if(formState.username !== ""){
            setUserName(formState.username)
            setNamePicked(true);
        }
        setGamePicked(gamePicked + 1)
    }
    return (
        <div>
        <p>Welcome to MyCardGame!</p>
        <form>

        </form>
        <Input
            value={formState.username}
            onChange={handleChange}
            placeholder="Enter name then click submit to play"
            name="username"/>
        <Button onClick={handleNameSubmit}>submit</Button>
        </div>
    )
}

export default HomePage;