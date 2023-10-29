/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Word Counter React Project",
    description:
      "A web application that counts the number of words in a text input, built using React for a user-friendly experience.",
    url: "https://github.com/kartikhustles/Word-Counter-React-Task",
  },
  {
    title: "Color Picker React Project",
    description:
      "An interactive tool developed with React that allows users to select and explore a wide range of colors for various design and creative purposes.",
    url: "https://github.com/kartikhustles/Color-Picker-React-Task",
  },
  {
    title: "Calculator React Project",
    description:
      "A simple yet powerful calculator application created using React, providing basic arithmetic functions for quick and easy calculations.",
    url: "https://github.com/kartikhustles/Calculator-React-Task",
  },
  {
    title: "Age Calculator React Project",
    description:
      "A user-friendly React-based utility that calculates a person's age based on their birthdate, helping users quickly determine their age.",
    url: "https://github.com/kartikhustles/Age-Calculator-React-Task",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
