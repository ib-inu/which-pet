function Start({ dispatch }) {
    return (
        <div className='starting'>
            <h1>* Find Which Pet Suits You Better? *</h1>
            <p>Take the quiz to know which pet suits best for you.</p>
            <div className="images">
                <div className="img1">
                    <img src='/images/Dog.jpg' alt="Dog" />
                </div>
                <div className="img2">
                    <img src='/images/Fish.jpg' alt="Fish" />
                </div>
                <div className="img3">
                    <img src='/images/Bird.jpg' alt="Bird" />
                </div>
                <div className="img4">
                    <img
                        src='/images/Cat.jpg'
                        alt="Cat" />
                </div>
            </div>
            <p>Click here to start!</p>
            <button onClick={() => dispatch({ type: "start" })}>Start</button>
        </div>
    )
}

export default Start
