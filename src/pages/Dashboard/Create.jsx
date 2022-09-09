import { useEffect, useLayoutEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Markdown from "markdown-to-jsx";

import Section from "../../components/Section";
import { useState } from "react";

export default function Create() {
  let { slug } = useParams();
  let navigate = useNavigate();
  let location = useLocation();

  const url = `/projects/${slug}`;

  const { data: project, isPending, error } = useFetch(url);
  const [content, setContent] = useState("");
  // change ARTICLE page theme

  console.log(content);

  return (
    <div className="article-ds">
      <Section
        className="projects"
        id="projects"
        sectionTitle="sqfsq"
        sectionSubtitle="fdsfsdf"
      >
        {/* <div>{project.description}</div> */}

        <div style={{ display: "flex" }}>
          <div style={{ padding: "3rem" }}>
            <textarea
              style={{ width: "100%", height: "100%", fontSize: "1.8rem" }}
              name=""
              id=""
              cols="100%"
              rows="100%"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            >
              {content}
            </textarea>
          </div>

          <Markdown style={{ padding: "3rem" }}>{content}</Markdown>
        </div>
      </Section>
      )
    </div>
  );
}
