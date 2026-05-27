import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Tech = () => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.8)}
      className="flex flex-row flex-wrap justify-center gap-10"
    >
      {technologies.map((technology) => (
        <div className="h-28 w-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech, "tech");
