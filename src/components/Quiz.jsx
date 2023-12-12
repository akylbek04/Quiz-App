import { useCallback, useState } from "react";
import questions from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  let activeQuestion = userAnswers.length;

  const quizIsComplete = questions.length === activeQuestion;

  const handleSelect = useCallback(function handleSelect(answer) {
    setUserAnswers((prev) => {
      return [...prev, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelect(null),
    [handleSelect]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="trophy-img" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shaffledAnswers = [...questions[activeQuestion].answers];
  shaffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestion}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{questions[activeQuestion].text}</h2>
        <ul id="answers">
          {shaffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelect(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
