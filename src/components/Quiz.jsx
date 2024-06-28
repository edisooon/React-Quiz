import { useState } from "react";

export default function Quiz() {
  const [currentActiveQuestion, setCurrentActiveQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return <p>Currently active Questions</p>;
}
