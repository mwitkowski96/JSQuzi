import Button from "./Button";

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-container">
      <h1>JavaScript Quiz</h1>
      <Button className="start-btn" onClick={() => onStart()}>
        Rozpocznij quiz
      </Button>
    </div>
  );
};
export default StartScreen;
