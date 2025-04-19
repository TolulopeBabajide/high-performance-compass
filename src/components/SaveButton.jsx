import { motion } from "framer-motion";

export default function SaveButton({ onSave }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onSave}
      className="bg-green-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      ✅ Save Entry
    </motion.button>
  );
}
