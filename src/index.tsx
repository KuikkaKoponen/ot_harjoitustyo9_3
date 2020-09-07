import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import { CoursePart } from "./types";

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  
  // Osaa valita automaattisesti oikea typen, kun nimet mätsää interfacen kanssa
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
    }
  ];


  /**
  * Helper function for exhaustive type checking
  */

  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };


  // tarkastetaan onko oikean tyyppinen buildauksen jälkeen. Jos ei niin heitetään error message. Kokeile vaikka mitä ehdottaa "console.log(course.)"" perään.
  courseParts.forEach(course => {
    switch (course.name) {
      case "Fundamentals":
        //console.log(course.)
        break;
      case "Using props to pass data":
        break; 
      case "Deeper type usage": 
        break;
      default:
        return assertNever(course);
    }
  });

  return (
    <div>
      <Header name={courseName} />
      <Content list={courseParts}  />
      <Total list={courseParts}  />
    </div>
  );

};

ReactDOM.render(<App />, document.getElementById("root"));