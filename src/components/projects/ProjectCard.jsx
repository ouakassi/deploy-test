import "./ProjectCard.css";
import StyledParagraph from "./../../components/StyledParagrapgh";
import StyledLinedTitle from "./../../components/StyledLinedTitle";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";
import { motion } from "framer-motion";

const patternBackground = "./images/pattern2.png";

const ProjectCard = ({ image, title, description, tags, link }) => {
  const cardAnimation = {
    initial: {
      y: 90,
      opacity: 0,
      scale: 1,
      backgroundPositionY: "50%",
    },
    whileInView: { y: 0, opacity: 1 },
    whileHover: { scale: 1.02, backgroundPositionY: "40%" },
  };

  return (
    <Link to={link}>
      <motion.div
        variants={cardAnimation}
        initial="initial"
        whileInView="whileInView"
        whileHover="whileHover"
        transition={{ type: "spring", mass: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        className="project__box"
        style={{ backgroundImage: `url(${patternBackground})` }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{ delay: 0.2, transition: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          className="project__img"
        >
          <img src={image} alt={title} />
        </motion.div>
        <div className="project__data">
          <StyledLinedTitle>{title}</StyledLinedTitle>
          <StyledParagraph className="project__description">
            {description}...
          </StyledParagraph>
          <div className="project__languages">{tags}</div>
          <div className="project__links">
            <ButtonPrimary
              title="Github"
              icon="uil uil-github"
              link="https://www.google.com"
            />
            <ButtonPrimary
              title="Website"
              icon="uil uil-globe"
              link="https://www.google.com"
            />
            <Link to={link}>
              <ShowMoreButton title="project details" />
            </Link>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
