import "./styles.css";
import Questions from "./data";
import { useEffect, useState } from "react";
import options from "./options";

export default function App() {
  const [question, setQuestion] = useState(Questions);
  const [option, setOption] = useState(options);
  const [count, setCount] = useState(0);
  const [getAns, setGetAns] = useState(0);
  const [wrong, setWrong] = useState(0);

  function increaseCount() {
    if (count + 1 < question.length) {
      setCount(count + 1);
    } else {
      alert("No More Questions");
    }
  }

  function getAnswer(ans, id) {
    if (ans === true) {
      alert("Correct Answer");
      setGetAns(getAns + 1);
    } else {
      alert("Answer Is not Correct! Please Try Again");
      setWrong(wrong + 1);
    }
  }

  return (
    <div className="App">
      <div className="heading">
        <h1 className="title">
          Questions {count + 1}/{question.length}
        </h1>
        <div className="get-ans">
          <span className="correct-ans">Correct Ans: {getAns}</span>
          <span className="correct-ans">Wrong Ans: {wrong}</span>
        </div>
      </div>
      <div className="card">
        <h2>{question[count].question}</h2>
        <div className="options">
          {option[count].questions.map((q) => (
            <button key={q.id} onClick={() => getAnswer(q.isCorrect, q.id)}>
              {q.option}
            </button>
          ))}
        </div>
        <button
          className={wrong > 3 ? "next disable" : "next"}
          onClick={increaseCount}
        >
          {wrong > 3 ? "You Lost" : "Next"}
        </button>
        {getAns === option.length ? (
          <div>
            <h2>Congratulations!! For Your Victory</h2>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
