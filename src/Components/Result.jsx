function Result({ bestMatch }) {
    return (
        <>
            {bestMatch ? (
                <div className='result' >
                    <h1> Your Suitable Pet is:</h1 >
                    <h2 className='custom-underline'>--{bestMatch}--</h2>
                    <img src={`../public/${bestMatch}.jpg`} />
                    <p>Thank you for taking the Quiz!</p>
                    <button onClick={() => window.location.reload()}>Restart Quiz</button>
                </div >
            ) :
                <div className='result'>
                    <h1>There was an issue determining your suitable pet.</h1>
                    <p>Please try again.</p>
                    <button onClick={() => window.location.reload()}>Restart Quiz</button>
                </div>
            }
        </>
    )
}

export default Result
