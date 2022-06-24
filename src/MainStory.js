import React from 'react';
import './App.css';
import styled, { keyframes } from "styled-components"


function MainStory() {
  return (
    <div className="App" >
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Wrapper>You must make haste for you sense it is not safe to linger by the smoking remains of the ruined monastery. The black-winged beasts could return at any moment. You must set out for the Sommlending capital of Holmgard and tell the King the terrible news of the massacre: that the whole élite of Kai warriors, save yourself, have been slaughtered. Without the Kai Lords to lead her armies, Sommerlund will be at the mercy of their ancient enemy, the Darklords.

Fighting back tears, you bid farewell to your dead kinsmen. Silently, you promise that their deaths will be avenged. You turn away from the ruins and carefully descend the steep track.

At the foot of the hill, the path splits into two directions, both leading into a large wood.</Wrapper>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const textAnimation = keyframes`
0% { opacity: 0}
100% { opacity: 1}
`

const Wrapper = styled.span `
opacity 1;
animation-name: ${textAnimation};
animation-duration: 10s;
animation-fill-mode: forward;
`

export default MainStory;
