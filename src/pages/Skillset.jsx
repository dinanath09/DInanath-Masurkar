import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle';
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Hobbies from "../components/Skillset/Hobbies";       // <<< new import
import Achievements from "../components/Skillset/Achievements"; // <<< new import

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

{/* Beyond the Code subline */}
<h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-[length:300%_300%] animate-glitter">
  Beyond the Code
</h2>

<style jsx>{`
  @keyframes glitter {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .animate-glitter {
    animation: glitter 3s ease-in-out infinite;
  }
`}</style>

        {/* Hobbies Section */}
        <h1 className="project-heading">
          <strong className="yellow">Hobbies</strong> & Interests
        </h1>
        <Hobbies />

        {/* New Section for Achievements */}
        <h1 className="project-heading">
          <strong className="yellow">Achievements</strong>
        </h1>
        <Achievements />
      </Container>
    </Container>
  );
}

export default Skillset;
