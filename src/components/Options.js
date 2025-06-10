function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((o) => (
        <button className="btn btn-option" key={o}>
          {" "}
          {o}
        </button>
      ))}
    </div>
  );
}

export default Options;
