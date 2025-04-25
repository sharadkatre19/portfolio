import React from 'react';
import data from "./../static/index.json";

// Define the structure of each skill item
interface SkillItem {
  src: string;
  title: string;
  description: string;
}

// Define the structure of the data we're importing
interface DataStructure {
  skills?: SkillItem[];
  // Add other properties from your data file as needed
}

export default function MySkills() {
  // Type assertion for the imported data
  const typedData = data as DataStructure;

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {typedData?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}