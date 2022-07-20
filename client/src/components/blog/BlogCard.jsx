import "./BlogCard.css";
import { ShowMoreButton } from "../../components/Buttons/ShowMoreButton";
import StyledTitle from "../../components/StyledTitle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCard = ({
  slug,
  id,
  image,
  title,
  description,
  tags,
  publishedDate,
  readTime,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, transition: 0.4 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Link to={`/blog/${slug}`}>
        <div className="article" key={id}>
          <img className="article__image" src={image} alt={title} />
          <div className="article__data">
            <StyledTitle>{title}</StyledTitle>
            <p>{description}</p>
            <div className="article__tags">{tags}</div>
            <div className="article__data-dates">
              <span className="article__data-date">
                {publishedDate && publishedDate.split("T")[0]}
              </span>
              <span>{readTime}</span>
            </div>
          </div>

          <ShowMoreButton title="read more" icon="uil-corner-down-right-alt" />
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
