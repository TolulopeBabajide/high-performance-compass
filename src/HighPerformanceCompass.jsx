import { useState, useEffect } from "react";

const fullPrompts = [
  "What System am I improving today?",
  "How am I investing in my Reputation today?",
  "What's my Energy Priority today?",
  "What's one way I will use Leverage today?",
  "What Infinite Game am I playing right now?",
];

const lightningPrompts = [
  "What's the one highest leverage thing I can do today?",
  "What Infinite Game am I still playing no matter what?",
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

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-center">High-Performance Compass</h1>

      <div className="flex justify-center mb-6">
        <button onClick={() => setMode("full")} className={`px-4 py-2 mx-2 rounded ${mode === "full" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>Full Mode</button>
        <button onClick={() => setMode("lightning")} className={`px-4 py-2 mx-2 rounded ${mode === "lightning" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>Lightning Mode</button>
      </div>

      <div className="space-y-4 mb-8">
        {(mode === "full" ? fullPrompts : lightningPrompts).map((prompt, index) => (
          <div key={index}>
            <p className="font-semibold mb-1">{prompt}</p>
            <textarea
              className="w-full p-2 border rounded"
              rows="2"
              value={answers[index] || ""}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button onClick={saveEntry} className="bg-green-500 text-white px-6 py-2 rounded">Save Entry</button>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">History</h2>
      <div className="space-y-4">
        {history.length === 0 && <p>No entries yet.</p>}
        {history.map((entry, idx) => (
          <div key={idx} className="p-4 bg-white rounded shadow">
            <p className="text-gray-600 text-sm mb-2">{entry.date} ({entry.mode} mode)</p>
            <ul className="list-disc ml-5">
              {entry.answers.map((ans, i) => (
                <li key={i} className="mb-1">{ans}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
