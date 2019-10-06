import React from 'react';

import '../styles/HowToPlay.css';

const HowToPlay = props => {
  return (
    <section id="howTo">
      <h2>What do I do?</h2>
      <p>This is a more advanced version of Rock Paper Scissors</p>
      <ul>
        <li>Pick one of the options below</li>
        <li>When you hit submit, I will randomly select one of the other options</li>
        <li>Below you will get feedback on who won each round</li>
        <li>You can select how many rounds we are playing "the best of"</li>
        <li>Whoever wins the necessary rounds first, wins the game!</li>
        <li>You can press "New Game" at any time to reset</li>
      </ul>
    </section>
  );
}

export default HowToPlay;
