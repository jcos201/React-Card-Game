import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import GameBoard from './pages/GameBoard';

const Container = styled.div `
  background-color: #3a5f75;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 10px;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {


  return (
    <Container>
      <Switch>
        <Route exact path="/" render={props => 
        <HomePage/>
      } />
        <Route exact path="/blackjack" render={props => 
        <GameBoard/>
      } />
      </Switch>
    </Container>
  );
}

export default withRouter(App);
