import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./Projects.css";

import Section from "../../components/Section";
import ProjectCard from "./ProjectCard";
import checkColor from "./checkColor";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";
import { useFetch } from "../../hooks/useFetch";

const Projects = () => {
  const [projectTotal, setProjectTotal] = useState(3);

  const [url, setUrl] = useState(process.env.REACT_APP_API_URL + "/projects/");

  const { data: projects, isPending, error } = useFetch(url);

  return (
    <Section
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
              if (i >= projectTotal) return null;
              else
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
      <Link to="/projects">
        <ShowMoreButton icon="uil uil-direction" title="All projects" />
      </Link>
      <Outlet />
    </Section>
  );
};

export default Projects;
