import React from 'react';
import {headShot} from '../../assets/headShot.png';

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={headShot} className="my-2" style={{ width: "20%" }} alt="cover" />
            <div className="my-2">
                <p>
                    I am a full stack web developer in training with a background in hospitality and a passion for creating. I am a working towards a full-stack web development certificate at the University of Minnesota Coding Bootcamp, where I learned the skills needed to build web applications using HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, and React. I am currently seeking a position as a full stack web developer.
                </p>
            </div>
        </section>
    );
}


export default About;