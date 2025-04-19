import { motion } from "framer-motion";

export default function PromptCard({ prompt, index, answer, onChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all"
    >
      <p className="font-semibold text-lg mb-2 flex items-center">
        <span className="mr-2 text-2xl">{prompt.icon}</span> {prompt.text}
      </p>
      <textarea
        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
        rows="2"
        value={answer}
        onChange={(e) => onChange(index, e.target.value)}
      />
    </motion.div>
  );
}
