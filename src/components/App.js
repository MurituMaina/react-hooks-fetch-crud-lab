import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState([]);
  let url = "http://localhost:4000/questions";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  function deleteQuestion(id) {
    console.log(id);

    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .catch((err) => console.log(err));
  }

  function updateCorrectAnswer(id, correctIndex) {
    fetch(`http://localhost:3000/questions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correctIndex: correctIndex }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newQuestions = questions.map((question) => {
          if (question.id === data.id) {
            return data;
          }
          return question;
        });
  
        setQuestions(newQuestions);
      })
      .catch((err) => console.log(err));
  }
 


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm />
      ) : (
        <QuestionList questions={questions} deleteQuestion ={deleteQuestion } updateCorrectAnswer = {updateCorrectAnswer}/>
      )}
    </main>
  );
}

export default App;
