import "./ShowMoreButton.css";
import { motion } from "framer-motion";

export const ShowMoreButton = ({ style, method, title, icon }) => {
  return (
    <motion.span
      initial={{ opacity: 0.8, x: -2 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ transition: 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      style={style}
      className="show-more__button"
      onClick={method}
    >
      {title ? title : "Show More"}
      {icon && <i className={`${icon} button__icon`}></i>}
    </motion.span>
  );
};

// uil uil-direction
