import React from 'react';
import shirpic from './pictures/me.jpg';

function About() {
    return (
        <div className="AboutMe">
            <div className="title-1">ABOUT ME </div>
            <div className="dashed-line"></div>
            <div className="textaboutme">
                <p>I'm a 23 years old from Ramat-Gan, currently CS 3rd year student. </p>
                <p>I'm a Highly motivated student, an autodidact,</p>
                <p>constantly evolving and improving. </p>
                <p>I'm Responsiable, trustworthy and affable individual. </p>
                <p>Using programming languages such as React, </p>
                <p>HTML, CSS, and JavaScript, I wish to create various </p>
                <p>features for client websites. </p>
            </div>
            <div className="me">
                <img src={shirpic} alt="shirpic" className="shirpic" />
            </div>
        </div>
    );
}

export default About;
