import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./ProjectsStyles.css";

import SectionTitle from "../../components/Section";
import ProjectCard from "./ProjectCard";
import checkColor from "./checkColor";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";
import { useFetch } from "../../hooks/useFetch";

const Projects = () => {
  const [projectTotal, setProjectTotal] = useState(1);

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
            ({ id, image, title, description, github, tags, website }, i) => {
              if (i >= projectTotal) return null;
              else
                return (
                  <ProjectCard
                    key={id}
                    image={image}
                    title={title}
                    description={description}
                    github={github}
                    tags={tags.map((tag, i) => {
                      return checkColor(tag, i, "project__language");
                    })}
                    website={website}
                  />
                );
            }
          )}
      </div>
      <Link to="/projects">
        <ShowMoreButton
          onClick={() =>
            setProjectTotal((prevProjetTotal) => prevProjetTotal + 1)
          }
          icon="uil uil-direction"
          title="All projects"
        />
      </Link>
      <Outlet />
    </SectionTitle>
  );
};

export default Projects;
