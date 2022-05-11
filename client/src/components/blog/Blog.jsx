import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./BlogStyle.css";
import Section from "../../styles/Section";
import BlogCard from "./BlogCard";
import { ShowMoreButton } from "../../styles/Buttons/ShowMoreButton";
import { useFetch } from "../../hooks/useFetch";

const Blog = () => {
  const url = "http://localhost:3000/articles";

  const { data: articles, isPending, error } = useFetch(url);

  const [articleNumber, setArticleNumber] = useState(4);

  return (
    <Section
      className="blog"
      id="blog"
      icon="uil uil-files-landscapes-alt"
      sectionTitle="Blog"
      sectionSubtitle="recent articles"
    >
      <article className="articles__container container">
        {isPending && <div>Loading .....</div>}
        {error && <div>{error} .....</div>}
        {articles &&
          articles.map(({ id, title, description, image }, index) => {
            if (index >= articleNumber) return null;
            return (
              <BlogCard
                key={id}
                title={title}
                description={description}
                image={image}
              />
            );
          })}
      </article>
      <Link to="/blog">
        <ShowMoreButton title="all articles" icon="uil uil-arrow-up-right" />
      </Link>
    </Section>
  );
};

export default Blog;
