import { motion } from "framer-motion";
const LanguageComponent = ({ mainColor, className, image, tag }) => (
  <>
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.2,
        },
      }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true, amount: 0.8 }}
      style={{
        color: mainColor || "#00ffb3",
        backgroundColor: `${mainColor}33` || "#00ffb333",
      }}
      className={className}
    >
      <img src={image || "./images/languages/code.svg"} alt={tag} />
      <span>{tag}</span>
    </motion.span>
  </>
);

export default LanguageComponent;
