import { motion } from "framer-motion";
import Navigation from "./Navigation";

function Slide17() {
  return (
    <motion.div
    className="marginal bg-white overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
        <div className="">
      <img src="/images/slide17.webp" alt="Slide 15" className="fs" />

        </div>
        <Navigation theme="black" page={17} />
    </motion.div>
  );
}

export default Slide17;