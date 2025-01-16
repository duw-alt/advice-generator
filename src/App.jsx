import "./App.css";
import AdviceContainer from './AdviceContainer'
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState({
    id: 117,
    advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  });

  const getAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice", {
        cache: 'no-store',
      });

      const data = await response.json();

      setAdvice({
        id: data.slip.id,
        advice: data.slip.advice
      });
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }

  return <AdviceContainer
    id={advice.id}
    advice={advice.advice}
    getAdviceFunc={getAdvice}
  />
}

export default App;
