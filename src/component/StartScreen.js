function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React knowledge</h3>
      <button className="btn btn-ui" onClick={dispatch({ type: "start" })}>
        let's start
      </button>
    </div>
  );
}

export default StartScreen;
