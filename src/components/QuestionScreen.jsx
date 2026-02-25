import Button from "./Button";

const QuestionScreen = ({ questionData, questionNumber, onAnswer }) => {
  return (
    <div className="question-container">
      <span>
        Pytanie {questionNumber}: {questionData.text}
      </span>
      <div className="answers-list">
        {questionData.answers.map((answer, index) => (
          <Button
            key={index}
            className="answer-btn"
            onClick={() => onAnswer(answer)}
          >
            {answer.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;
