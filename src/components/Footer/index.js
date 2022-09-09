import React from 'react';

function Footer() {
  return (
    <footer>
      <h2>Connect with me</h2>
      <ul>
        <li>
          &copy; {new Date().getFullYear()} by Jacob Schaefbauer
        </li>
        <li>
          <a href="https://github.com/jschaefmn" target="_blank" rel="noreferrer">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jacob-schaefbauer-095107140/" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="https://twitter.com/MrCoolJakey">Twitter</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;