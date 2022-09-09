import { useState } from "react";
import "./AboutStyle.css";
import Section from "../../components/Section";
import checkColor from "../../components/projects/checkColor";
import StyledParagraph from "../../components/StyledParagrapgh";

export default function About() {
  const stackLangs = [
    "html",
    "css",
    "javascript",
    "react",
    "node",
    "express",
    "mongodb",
    "typescript",
  ];

  return (
    <Section
      className="about"
      id="about"
      icon="uil uil-files-landscapes-alt"
      sectionTitle="About me"
      sectionSubtitle="everything about me"
    >
      <div className="about__container container">
        <div className="about__heading">
          <img
            className="about__stack-img"
            src="./images/me.jpg"
            alt="it's me"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            illum modi veniam vitae, amet voluptatem saepe tenetur maiores hic
            recusandae?
          </p>
        </div>

        <div className="about__stack__paragraphs">
          <StyledParagraph>
            Over 3 years of professional exposure in JavaScript technology such
            as Node JS , Express.js ,<b>React JS</b> , D3 JS, MongoDB and .
          </StyledParagraph>
          <StyledParagraph>
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and Ui / Ux design, delivering quality
            work.
          </StyledParagraph>
          <StyledParagraph>
            Expertise in developing web pages using HTML5, CSS3, MVC, SASS,
            LESS, Object Oriented Java script, ES6, JQuery, AJAX, JSON, XML.
            Good understanding of Document Object Model (DOM) and DOM Functions.
          </StyledParagraph>
        </div>
        <div className="about__stack__languages">
          {stackLangs.map((lang, i) => {
            return checkColor(lang, i, "about__stack__languages-lang");
          })}
        </div>
      </div>
    </Section>
  );
}
