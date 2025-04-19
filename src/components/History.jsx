import { motion } from "framer-motion";

export default function History({ history }) {
  return (
    <div className="space-y-6">
      {history.length === 0 ? (
        <p className="text-center text-gray-600">No entries yet. Start your journey today!</p>
      ) : (
        history.map((entry, idx) => (
          <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5 bg-white rounded-2xl shadow-md">
            <p className="text-gray-500 text-sm mb-3">{entry.date} ({entry.mode} mode)</p>
            <ul className="list-disc ml-6 space-y-2">
              {entry.answers.map((ans, i) => (
                <li key={i} className="text-gray-700">{ans}</li>
              ))}
            </ul>
          </motion.div>
        ))
      )}
    </div>
  );
}
