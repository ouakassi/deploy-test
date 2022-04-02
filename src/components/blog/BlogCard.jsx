import React from "react";
import "./BlogCrad.css";
import { ShowMoreButton } from "../../styles/Buttons/ShowMoreButton";
import StyledTitle from "../../styles/StyledTitle";

const BlogCard = (props) => {
  return (
    <article className="article">
      <img src={props.image} alt={props.title} />
      <div className="article__data">
        <StyledTitle>{props.title}</StyledTitle>
        <p>{props.description}</p>
      </div>
      <ShowMoreButton />
    </article>
  );
};

export default BlogCard;
