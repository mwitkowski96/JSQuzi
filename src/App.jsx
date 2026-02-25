import { useState } from "react";
import "./App.css";
import { QUESTIONS } from "./assets/quizQuestions";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import SummaryScreen from "./components/SummaryScreen";

function App() {
  const [step, setStep] = useState("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleStart = () => {
    setStep("quiz");
  };

  const handleAnswer = (selectedAnswerObject) => {
    setUserAnswers([...userAnswers, selectedAnswerObject]);

    if (selectedAnswerObject.isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep("summary");
    }
  };

  const handleRestart = () => {
    setStep("quiz");
    setScore(0);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      {step === "start" && <StartScreen onStart={handleStart} />}
      {step === "quiz" && (
        <QuestionScreen
          questionData={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          onAnswer={handleAnswer}
        />
      )}
      {step === "summary" && (
        <SummaryScreen
          score={score}
          totalQuestions={QUESTIONS.length}
          userAnswers={userAnswers}
          questions={QUESTIONS}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
