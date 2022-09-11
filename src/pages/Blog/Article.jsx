import "./Article.css";
import { useEffect, useLayoutEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import Section from "../../components/Section";

export default function Article() {
  let { slug } = useParams();
  let navigate = useNavigate();
  let location = useLocation();

  const url = process.env.REACT_APP_API_URL + "/articles/" + slug;

  const { data: article, isPending, error } = useFetch(url);

  // change ARTICLE page theme

  useLayoutEffect(() => {
    if (location.pathname === "/blog/" + slug) {
      document.querySelector(".header").classList.add("blog-header");
      document.querySelector("body").classList.add("blog-body");
      document.querySelector(".floated-contact").style.display = "none";
    } else {
      document.querySelector(".header").classList.remove("blog-header");
      document.querySelector("body").classList.remove("blog-body");
      // document.querySelector(".floated-contact").style.display = "none";
    }
  });

  // redirect if there is an error

  useEffect(() => {
    if (error)
      setTimeout(() => {
        navigate("/blog");
      }, 1000);
  }, [error, navigate]);

  return (
    <div className="article-ds">
      {isPending && <div>Loading .....</div>}
      {error && <div>{error} .....</div>}

      {article && (
        <Section
          className="blog"
          id="blog"
          sectionTitle={article.title}
          sectionSubtitle={`${article.publishedDate.split("T")[0]} ${
            article.readTime
          } min `}
        >
          <div>{article.description}</div>
        </Section>
      )}
    </div>
  );
}
