import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import ProjectCard from "../../components/projects/ProjectCard";
import checkColor from "../../components/projects/checkColor.js";
import SectionTitle from "../../components/Section";

const Projects = () => {
  const [url, setUrl] = useState("/projects/");

  const { data: projects, isPending, error } = useFetch(url);

  return (
    <SectionTitle
      className="projects"
      id="projects"
      icon="uil uil-folder-open"
      sectionTitle="Projects"
      sectionSubtitle="my projects"
    >
      <div className="project__container container">
        {isPending && <div>Loading .....</div>}
        {error && <div>{error} .....</div>}
        {projects &&
          projects.map(
            (
              {
                _id: id,
                slug,
                imgurl,
                title,
                description,
                github,
                tags,
                website,
              },
              i
            ) => {
              return (
                <ProjectCard
                  key={id}
                  image={imgurl}
                  title={title}
                  description={description}
                  github={github}
                  tags={tags.map((tag, i) => {
                    return checkColor(tag, i, "project__language");
                  })}
                  website={website}
                  link={url + slug}
                />
              );
            }
          )}
      </div>
    </SectionTitle>
  );
};

export default Projects;
