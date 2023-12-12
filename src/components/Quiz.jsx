import { useCallback, useState } from "react";
import questions from "../questions";

import Question from "./Question";
import Summary from "./Summary";

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
    function handleSkipAnswer() {
      handleSelect(null);
    },
    [handleSelect]
  );
  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestion}
        index={activeQuestion}
        onSelectAnswer={handleSelect}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
