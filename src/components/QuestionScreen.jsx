import Button from "./Button";
import Card from "./Card";

const QuestionScreen = ({ questionData, questionNumber, onAnswer }) => {
  return (
    <Card>
      <span className="question">
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
    </Card>
  );
};

export default QuestionScreen;
