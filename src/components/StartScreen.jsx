import Button from "./Button";
import Card from "./Card";

const StartScreen = ({ onStart }) => {
  return (
    <Card>
      <h1 className="start-title">JavaScript Quiz</h1>
      <Button className="start-btn" onClick={() => onStart()}>
        Rozpocznij quiz
      </Button>
    </Card>
  );
};
export default StartScreen;
