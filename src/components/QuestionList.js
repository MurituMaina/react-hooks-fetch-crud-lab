import React from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({ questions, deleteQuestion, updateCorrectAnswer}) {
   
  let questionItem = questions.map((question, index) => {
    return (
      <QuestionItem
        key={index}
        question={question}
        handleDelete={deleteQuestion}
        correctAnswer = {updateCorrectAnswer}
      />
    );
  });

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questionItem}
      </ul>
    </section>
  );
}

export default QuestionList;
