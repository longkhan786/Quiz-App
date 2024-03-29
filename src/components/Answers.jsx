import { useRef } from "react";

// million-ignore
export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer, index) => {
        let isSelected = selectedAnswer === answer;
        let answerClass = "";

        if (answerState === "answered" && isSelected) {
          answerClass = "selected";
        } 
        if ((answerState === "correct" || answerState === "wrong") && isSelected) {
          answerClass = answerState;
        }

        return (
          <li key={index} className="answer">
            <button onClick={() => onSelect(answer)} className={answerClass} disabled={answerState !== ''}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}