function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React </h3>
      <button btn btn-ui>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
