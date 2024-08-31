function Options({ question, index, dispatch }) {
    return (
        <div className='options'>
            {question[index].answers.map(a =>
                <button key={a.text}
                    onClick={() => dispatch({ type: "selectAnswer", payload: a })}
                >{a.text}
                </button>)
            }
        </div>
    )
}

export default Options
