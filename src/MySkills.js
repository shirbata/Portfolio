import React, { Component } from 'react';
import reactpic from './pictures/logo192.png';
import htmlpic from './pictures/html.png';
import csspic from './pictures/css2.png';
import jspic from './pictures/js.png';
import cpic from './pictures/c.png';
import cpluspic from './pictures/c++.png';
import javapic from './pictures/Java.png';
import mysqlpic from './pictures/mysqlpic.png';

class MySkills extends React.Component {
    state = {
        icons: [
            [reactpic, 'React'],
            [htmlpic, 'HTML'],
            [csspic, 'CSS'],
            [jspic, 'JavaScript'],
            [cpic, 'C'],
            [cpluspic, 'C++'],
            [javapic, 'Java'],
            [mysqlpic, 'MySQL'],
        ],
    };

    renderIcons = () => {
        return this.state.icons.map((icon, index) => {
            return (
                <div className="skill-icon-warp" key={index}>
                    <img className="skill-icon" alt="error" src={icon[0]} />
                    <h1 className="skill-text">{icon[1]}</h1>
                </div>
            );
        });
    };

    render() {
        return (
            <div className="ui-container" id={this.props.id}>
                <div className="title-2">Skills </div>
                <div className="dashed-line"></div>
                <center>
                    <div className="skill-list">{this.renderIcons()}</div>
                </center>
            </div>
        );
    }
}
export default MySkills;
