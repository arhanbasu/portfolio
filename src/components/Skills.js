import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { name: "C++", percentage: 97 },
    { name: "Python", percentage: 95 },
    { name: "JavaScript", percentage: 95 },
    { name: "React Js", percentage: 95 },
    { name: "Node Js", percentage: 94 },
    { name: "Database (MySql)", percentage: 96 },
    { name: "Tensorflow", percentage: 90 },
    { name: "Django", percentage: 88 },
  ];

  const CircularProgressBar = ({ percentage }) => {
    const circleRadius = 55;
    const circumference = 2 * Math.PI * circleRadius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg width="120" height="120" className="progress-bar">
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          fill="none"
          stroke="#2b2b2b"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fill="white"
          fontSize="18px"
          fontWeight="bold"
        >
          {percentage}%
        </text>
        
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a020f0" />
            <stop offset="100%" stopColor="#4a90e2" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Explore my Skills Section to get an overview of the tools and technologies I’ve mastered. 
                Here, I've rated my proficiency across various areas, giving you insight into my strengths and expertise.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <CircularProgressBar percentage={skill.percentage} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

