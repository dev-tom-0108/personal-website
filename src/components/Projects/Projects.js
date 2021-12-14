import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import project1 from "../../Assets/Projects/project-1.png";
import project2 from "../../Assets/Projects/project-2.png";
import project3 from "../../Assets/Projects/project-3.png";
import project4 from "../../Assets/Projects/project-4.png";
import project5 from "../../Assets/Projects/project-5.png";
import project6 from "../../Assets/Projects/project-6.png";
import Gallery from "./Gallery";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Bored Zilla Club NFT"
              description="In Bored Zilla NFT Minting website, I started from Figma design.
              It is based on ERC721 and I built it Next.js and Web3. The UI is Material-UI. Of course, the smart contract was made by me."
              link="https://boredzillaclub.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Fox Marketplace"
              description="I used Nuxt to build Fox marketplace. Present, the 21 NFTs are in the shop. I created the smart contract and build it in two weeks. This site is based on the BSC network and uses a special token called Fox 🦊."
              link="https://foxfinance.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Vethugs.com"
              description="Vethugs.com is based on the VeChain and uses the token called VET. I built it with React.js and SyncWallet - Desktop wallet. The client needed daily updates and I could make a perfect result."
              link="https://www.vethugs.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="LAID BACK LLAMAS"
              description="In this project, I was able to use React and GSAP. It was based on the Ethereum Rinkeby network and also Smart contract was not problem for me."
              link="https://www.laidbackllama.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="SHIBA SWAP"
              description="This project is a swap site I made. Running on the Ethereum maintet, this web app was built using React and Redact. The Figma design, smart contract, and front-end have been perfected by my passion for 2 months."
              link="https://shibaswap.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project6}
              isBlog={false}
              title="Pretty Wooshi NFT"
              description="I think this project is a good example of combining Dapp and shopping app. Only owners who have purchased a cute Wooshi can access a specific page and purchase discounted products. Really cute Wooshi! For two weeks I did some really lovely coding with the cute Wooshi."
              link="https://wooshi.world/"
            />
          </Col>
        </Row>
      </Container>
      <Gallery />
    </Container>
  );
}

export default Projects;
