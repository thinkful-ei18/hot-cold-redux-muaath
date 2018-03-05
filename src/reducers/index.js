import * as actions from '../actions';

const  initialState = {
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    feedback: 'Make your guess!',
    guesses: []
}

export const hotColdReducer = (state=initialState, action) => {
    if(action.type === actions.RESTART_GAME){
        return Object.assign({}, state, {
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            feedback: 'Make your guess!',
            guesses:[]
        });
    }
    else if(action.type === actions.ADD_GUESS){
        const difference = Math.abs(action.guess - state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }
    
    return Object.assign({}, state, {
        feedback: feedback,
        guesses: [...state.guesses, action.guess ]
    });
    }
  

    return state;
}