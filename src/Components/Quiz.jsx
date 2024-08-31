import Options from "./Options"

function Quiz({ index, numOfQuestions, question, dispatch }) {
    return (
        <div className='quiz'>
            <p>{index + 1}/{numOfQuestions}</p>
            <h1><span>{index + 1}</span>, {question[index].question}</h1>
            <Options
                index={index}
                question={question}
                dispatch={dispatch}
            />
        </div>
    )
}

export default Quiz
