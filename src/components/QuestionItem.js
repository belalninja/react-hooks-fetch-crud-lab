import React from "react";

function QuestionItem({ question, updateQuestions }) {
  const { id, prompt, answers, correctIndex } = question;
  const handleDelete = () => {
    fetch(`http://localhost:4000/questions/${id}`, { method: "DELETE" }).then(
      (res) => {
        if (res.status === 200) {
          updateQuestions(id);
        }
      }
    );
  };

  function handleCorrectAnswer(e) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: e.target.value,
      }),
    });
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleCorrectAnswer}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
