import { useReducer, useEffect } from 'react';
import { questions } from '../Data/Questions';
import Start from './Start';
import Quiz from './Quiz';
import Result from './Result';

const pets = [
  {
    type: 'Dog',
    traits: {
      active: 4,
      social: 5,
      lowMaintenance: 2,
      homeSpace: 4,
      training: 5,
      budget: 5,
      cleaning: 3
    }
  },
  {
    type: 'Cat',
    traits: {
      active: 2,
      social: 3,
      lowMaintenance: 5,
      homeSpace: 3,
      training: 2,
      budget: 4,
      cleaning: 4
    }
  },
  {
    type: 'Bird',
    traits: {
      active: 3,
      social: 4,
      lowMaintenance: 4,
      homeSpace: 2,
      training: 3,
      budget: 3,
      cleaning: 4
    }
  },
  {
    type: 'Fish',
    traits: {
      active: 1,
      social: 1,
      lowMaintenance: 5,
      homeSpace: 1,
      training: 1,
      budget: 2,
      cleaning: 5
    }
  }
];

const initialState = {
  question: questions,
  status: "ready",
  index: 0,
  selectedAnswers: [],
  scores: {}
};

function reduce(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        status: 'active',
        scores: pets.reduce((acc, pet) => {
          acc[pet.type] = 0;
          return acc;
        }, {})
      };
    case "selectAnswer": {
      const { trait, score } = action.payload;
      const updatedScores = { ...state.scores };

      pets.forEach(pet => {
        updatedScores[pet.type] += Math.abs(pet.traits[trait] - score);
      });

      const isLastQuestion = state.index + 1 === state.question.length;

      if (isLastQuestion) {
        return {
          ...state,
          selectedAnswers: [...state.selectedAnswers, action.payload],
          scores: updatedScores,
          status: "finished"
        };
      }

      return {
        ...state,
        selectedAnswers: [...state.selectedAnswers, action.payload],
        scores: updatedScores,
        index: state.index + 1
      };
    }
    case "finish": {
      console.log('Finishing quiz');
      let bestMatch = null;
      let lowestScore = Infinity;

      // Check if there are scores to evaluate
      if (Object.keys(state.scores).length === 0) {
        console.error('No scores available to determine the best match.');
        return state;
      }

      for (let petType in state.scores) {
        console.log(`Score for ${petType}: ${state.scores[petType]}`);
        if (state.scores[petType] < lowestScore) {
          lowestScore = state.scores[petType];
          bestMatch = petType;
        }
      }

      console.log('Best match determined:', bestMatch);

      return {
        ...state,
        bestMatch
      };
    }
    default:
      return state;
  }
}

const App = () => {
  const [{ question, status, index, bestMatch }, dispatch] = useReducer(reduce, initialState);

  const numOfQuestions = questions.length;



  useEffect(() => {
    if (status === "finished" && bestMatch === undefined) {
      dispatch({ type: "finish" });
    }
  }, [status, bestMatch, dispatch]);

  console.log('Current bestMatch:', bestMatch);

  return (
    <div className='container'>

      {status === "ready" &&
        <Start dispatch={dispatch} />}

      {status === "active" &&
        <Quiz index={index} numOfQuestions={numOfQuestions} question={question} dispatch={dispatch} />}

      {status === "finished" &&
        <Result bestMatch={bestMatch} />}

    </div>
  );
};

export default App;
