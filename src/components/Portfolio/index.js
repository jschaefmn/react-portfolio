import React, {useState} from 'react';
import Project from '../Project';

function Portfolio() {
  const [projects] = useState([
    {
      name: "Run Buddy",
      appUrl: 'https://jschaefmn.github.io/run-buddy/',
      repoUrl: 'https://github.com/jschaefmn/run-buddy',
      asset: 'run-buddy.png',
    },
    {
      name: "Suds on Sale",
      appUrl: "https://group-project-dos.herokuapp.com/",
      repoUrl: "https://github.com/jschaefmn/suds-on-sale",
      asset: "suds-on-sale.png",
    },
    {
      name: "Social Network API Demonstration",
      appUrl: "https://www.youtube.com/watch?v=WcHN1Leafq8",
      repoUrl: "https://github.com/jschaefmn/social-network-api",
      asset: "social-network-api.png",
    },
    {
      name: "Note Taker App",
      app: 'https://serene-hamlet-02089.herokuapp.com/',
      repoUrl: 'https://github.com/jschaefmn/note-taker-app',
      asset: 'note-taker-app.png',
    }
  ]);
  return (
    <section>
      <h2 id="portfolio">Portfolio</h2>
      <div className="project-flex">
        {projects.map((project, index) => (<Project project={project} key={"project" + index} />))}
      </div>
    </section>
  );
}

export default Portfolio;