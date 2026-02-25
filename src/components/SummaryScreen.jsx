import Button from "./Button";
import SummaryItem from "./SummaryItem"; //

const SummaryScreen = ({
  score,
  totalQuestions,
  userAnswers,
  questions,
  onRestart,
}) => {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);
  const isPassed = percentage >= 80;

  return (
    <div className="summary-container">
      <h2 style={{ color: isPassed ? "green" : "red" }}>
        {isPassed ? "Zaliczone!" : "Niestety, quiz niezaliczony"}
      </h2>
      <span className="summary-subheader">
        Twój wynik to:{" "}
        <span
          style={{
            color: isPassed ? "green" : "red",
          }}
        >
          {percentage}%
        </span>{" "}
        ({score} z {totalQuestions} poprawnych odpowiedzi)
      </span>
      <div className="answers-review">
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index];

          return (
            <SummaryItem
              key={index}
              index={index + 1}
              questionText={question.text}
              userAnswerText={userAnswer?.text}
              isCorrect={userAnswer?.isCorrect}
            />
          );
        })}
      </div>

      <Button className="restart-btn" onClick={() => onRestart()}>
        Powrót do startu
      </Button>
    </div>
  );
};

export default SummaryScreen;
