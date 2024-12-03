import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.jpg";
import projImg2 from "../assets/img/old-man-parkinson-free-vector.jpg";
import projImg3 from "../assets/img/3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Snake Game",
      description: "Click to visit",
      imgUrl: projImg1,
      link: "https://snake-bite-1.onrender.com/",
    },
    {
      title: "Parkinson's Disease Detection",
      description: "Click to visit",
      imgUrl: projImg2,
      link: "https://github.com/arhanbasu/Parkinsons_detect",
    },
    {
      title: "Edge Detector App",
      description: "Click to visit",
      imgUrl: projImg3,
      link: "https://github.com/arhanbasu/edge-detector",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Welcome to my Project Showcase! 
                  Here, you'll find a curated selection of projects that highlight my skills.
                   Each project represents a journey—solving challenges, applying innovative ideas, and learning along the way. 
                   I hope these examples offer a clear view of my passion and expertise. Dive in and enjoy!</p>
                <Row>
                  {
                    projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};

