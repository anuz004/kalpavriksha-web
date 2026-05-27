import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 200, damping: 14 }}
    className="bg-white xs:w-[320px] w-full rounded-3xl p-8 hover:shadow-lg"
    role="article"
    aria-label={`Testimonial from ${name}`}
  >
    <p className="text-[40px] font-black text-[#222] leading-none">“</p>

    <div className="mt-2">
      <p className="text-[17px] tracking-wider text-[#222]">{testimonial}</p>

      <div className="mt-6 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-semibold text-[#222]">{name}</p>
          <p className="text-[#666] mt-1 text-[13px]">
            {designation} {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div id="feedbacks" className="bg-[#7b3f00] mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-[#a0522d] min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
