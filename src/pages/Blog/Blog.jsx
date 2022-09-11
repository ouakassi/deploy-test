import React, { useEffect, useState } from "react";

import "./Blog.css";
import Section from "../../components/Section";
import BlogCard from "../../components/blog/BlogCard";
import { useFetch } from "../../hooks/useFetch";
import checkColor from "../../components/projects/checkColor";
import ArticlesTags from "../../components/ArticlesTags";
import BlogCardSkeleton from "../../components/blog/BlogCardSkeleton";
import { ShowMoreButton } from "../../components/Buttons/ShowMoreButton";

const Blog = () => {
  const [url, setUrl] = useState(process.env.REACT_APP_API_URL + "/articles/");
  const [filterTags, setFilterTags] = useState([]);

  const { data: articles, isPending, error } = useFetch(url);

  const queryArticles = async (query) => {
    setUrl(`${process.env.REACT_APP_API_URL}/articles/?${query}`);
  };

  return (
    <Section
      className="blog"
      id="blog"
      icon="uil uil-files-landscapes-alt"
      sectionTitle="Blog"
      sectionSubtitle="all articles"
    >
      <ArticlesTags tagName={filterTags.sort()} queryArticles={queryArticles} />
      {articles &&
        articles.forEach((project) => {
          project &&
            project.tags.forEach((tag) => {
              if (!filterTags.includes(tag))
                setFilterTags([...filterTags, tag]);
            });
        })}

      <article className="articles__container container">
        {isPending && <BlogCardSkeleton cards={8} />}
        {error && <div>{error} .....</div>}
        {articles &&
          articles.map(
            ({
              _id: id,
              title,
              description,
              imgUrl,
              publishedDate,
              slug,
              tags,
              readTime,
            }) => {
              return (
                <BlogCard
                  title={title}
                  description={description.substring(0, 140) + "..."}
                  publishedDate={publishedDate}
                  tags={tags.map((tag, i) => {
                    return <ShowMoreButton />;
                  })}
                  image={imgUrl}
                  id={id}
                  link={"/blog/" + slug}
                  readTime={`${readTime} min read`}
                />
              );
            }
          )}
      </article>
    </Section>
  );
};

export default Blog;
