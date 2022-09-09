import "./ContactBox.css";

import { motion } from "framer-motion";

export default function ContactBox({ icon, title, data }) {
  const boxAnimation = {
    initial: {
      y: 150,
      opacity: 0,
    },
    whileInView: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={boxAnimation}
      initial="initial"
      whileInView="whileInView"
      transition={{ type: "spring", mass: 0.5, delay: 0.6 }}
      viewport={{ once: true, amount: 0.8 }}
      className="contact__box"
    >
      <i className={`${icon} contact__icon`} />
      <div className="contact__info">
        <h2>{title}</h2>
        <p className="contact__title">{data}</p>
      </div>
    </motion.div>
  );
}
