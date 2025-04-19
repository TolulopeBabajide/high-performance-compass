import { motion } from "framer-motion";

export default function MotivationQuote() {
  const quotes = [
    "✨ Small daily steps lead to big dreams.",
    "🌱 Growth happens quietly, every day.",
    "🚀 Action beats perfection.",
    "🎯 Focus on systems, not just goals.",
    "🔥 Your energy is your greatest asset.",
    "🌟 Play infinite games. Stay in motion.",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="mt-12 text-center">
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 italic text-lg"
      >
        {randomQuote}
      </motion.p>
    </div>
  );
}
