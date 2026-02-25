const SummaryItem = ({ index, questionText, userAnswerText, isCorrect }) => {
  return (
    <div className="summary-item">
      <h3>
        Pytanie: {index} : {questionText}
      </h3>
      <p>
        <span className="bold">Twoja odpowiedź:</span>
        <span style={{ color: isCorrect ? "green" : "red", marginLeft: "5px" }}>
          {userAnswerText || "Brak"}
        </span>
      </p>
    </div>
  );
};

export default SummaryItem;
