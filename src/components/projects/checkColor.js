import LanguageComponent from "./LanguageComponent";

const tags = [
  "javascript",
  "react",
  "node",
  "mongodb",
  "html",
  "css",
  "typescript",
  "express",
];

const checkColor = (tag, i, className) => {
  if (tag.toLocaleLowerCase() === "javascript")
    return (
      <LanguageComponent
        className={className}
        mainColor="#f0db4f"
        key={i}
        tag={tag}
        image="./images/languages/js.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "react")
    return (
      <LanguageComponent
        className={className}
        mainColor="#58c6e5"
        key={i}
        tag={tag}
        image="./images/languages/react.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "node")
    return (
      <LanguageComponent
        className={className}
        mainColor="#16b501"
        key={i}
        tag={tag}
        image="./images/languages/node.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "mongodb")
    return (
      <LanguageComponent
        className={className}
        mainColor="#6cac48"
        key={i}
        tag={tag}
        image="./images/languages/mongo.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "html")
    return (
      <LanguageComponent
        className={className}
        mainColor="#e44d26"
        key={i}
        tag={tag}
        image="./images/languages/html.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "css")
    return (
      <LanguageComponent
        className={className}
        mainColor="#1572b6"
        key={i}
        tag={tag}
        image="./images/languages/css.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "typescript")
    return (
      <LanguageComponent
        className={className}
        mainColor="#007acc"
        key={i}
        tag={tag}
        image="./images/languages/ts.svg"
      />
    );
  if (tag.toLocaleLowerCase() === "express")
    return (
      <LanguageComponent
        className={className}
        mainColor="#ffffff"
        key={i}
        tag={tag}
        image="./images/languages/express.svg"
      />
    );
  else return <LanguageComponent className={className} key={i} tag={tag} />;
};

export default checkColor;
