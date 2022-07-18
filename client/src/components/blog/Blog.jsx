import { useState } from "react";
import { Link } from "react-router-dom";

import "./BlogStyle.css";
import Section from "../../components/Section";
import BlogCard from "./BlogCard";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";
import { useFetch } from "../../hooks/useFetch";

const Blog = () => {
  const [url, setUrl] = useState("/articles/");

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
          articles.map(({ _id: id, title, description, imgUrl }, index) => {
            if (index >= articleNumber) return null;
            return (
              <BlogCard
                key={id}
                title={title}
                description={description}
                image={imgUrl}
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
