import { motion } from "framer-motion";
import { RocketIcon } from "./ui/RocketIcon";
import { useLoadingProgress } from "../hooks/useLoadingProgress";

const RocketLoader = () => {
  const progress = useLoadingProgress();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: progress === 100 ? 0 : 1,
        pointerEvents: progress === 100 ? "none" : "auto",
      }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative w-24 h-96">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: progress === 100 ? "-100vh" : 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <RocketIcon className="w-24 h-24 text-emerald-400" />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-t from-emerald-500/0 to-emerald-500/80"
          />
        </motion.div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-center text-emerald-400 mt-2">{progress}%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default RocketLoader;
