import { useState, useEffect } from "react";
import Header from "../components/Header";
import PromptCard from "../components/PromptCard";
import SaveButton from "../components/SaveButton";
import History from "../components/History";
import MotivationQuote from "../components/MotivationQuote";

const fullPrompts = [
  { text: "What System am I improving today?", icon: "🛠️" },
  { text: "How am I investing in my Reputation today?", icon: "🤝" },
  { text: "What's my Energy Priority today?", icon: "⚡" },
  { text: "What's one way I will use Leverage today?", icon: "🎯" },
  { text: "What Infinite Game am I playing right now?", icon: "♾️" },
];

const lightningPrompts = [
  { text: "What's the one highest leverage thing I can do today?", icon: "🚀" },
  { text: "What Infinite Game am I still playing no matter what?", icon: "🌟" },
];

export default function HighPerformanceCompass() {
  const [mode, setMode] = useState("full");
  const [answers, setAnswers] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("compassHistory")) || [];
    setHistory(savedHistory);
    setAnswers(Array(mode === "full" ? fullPrompts.length : lightningPrompts.length).fill(""));
  }, [mode]);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const saveEntry = () => {
    const today = new Date().toLocaleDateString();
    const newEntry = { date: today, mode, answers };
    const updatedHistory = [...history, newEntry];
    setHistory(updatedHistory);
    localStorage.setItem("compassHistory", JSON.stringify(updatedHistory));
    setAnswers(Array(mode === "full" ? fullPrompts.length : lightningPrompts.length).fill(""));
    alert("Entry Saved!");
  };

  const prompts = mode === "full" ? fullPrompts : lightningPrompts;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-tr animate-gradient-x font-poppins">
      <Header mode={mode} setMode={setMode} />
      <div className="space-y-6 mb-10">
        {prompts.map((prompt, index) => (
          <PromptCard
            key={index}
            prompt={prompt}
            index={index}
            answer={answers[index]}
            onChange={handleAnswerChange}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <SaveButton onSave={saveEntry} />
      </div>
      <h2 className="text-3xl font-bold mt-14 mb-6 text-center text-purple-600">📜 History</h2>
      <History history={history} />
      <MotivationQuote />
    </div>
  );
}
