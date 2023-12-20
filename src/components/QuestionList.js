import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  function updateQuestions(id) {
    const deletedQuestion = questions.findIndex((q) => q.id === id);
    if (deletedQuestion !== -1)
      setQuestions(questions.filter((q) => q.id !== id));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((q) => (
          <QuestionItem
            question={q}
            key={q.id}
            updateQuestions={updateQuestions}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
