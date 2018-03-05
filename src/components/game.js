import React from 'react';
import {connect} from 'react-redux'
import {addGuess, restartGame} from '../actions'

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';


export function Game(props) {
  console.log(props.feedback);
    return (
      <div>
        <Header
          onRestartGame={() => props.dispatch(restartGame())}/>
        <main role="main">
          <GuessSection
            feedback={props.feedback}
            guessCount={props.guesses.length}
            onMakeGuess={value => props.dispatch(addGuess(value))}
          />
          <StatusSection guesses={props.guesses} 
          />
          <InfoSection />
        </main>
      </div>
    );
  };

export const mapStateToProps = state => ({
  feedback: state.feedback,
  correctAnswer: state.correctAnswer,
  guesses: state.guesses
});

export default connect(mapStateToProps)(Game)
