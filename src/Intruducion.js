import React from 'react';
import { AnimatedSocialIcon } from 'react-animated-social-icons';

function Intruduce() {
    return (
        <div id="particles-js">
            <div className="btext">
                <h1>Shir Bata</h1>
                <h3>CS student</h3>
                <div className="horizontal_dotted_line"></div>
                <div className="skills">JavaScript, HTML, CSS, ReactJs, Redux, C, C++, Java, MySQL</div>

                <AnimatedSocialIcon
                    brandName="github"
                    url="https://github.com/shirbata?tab=repositories"
                    animation="bounce"
                    animationDuration={0.8}
                    defaultColor="#892185"
                    hoverColor="black"
                    width="2.6em"
                    style={{ padding: '1%', marginBottom: '4%' }}
                />
                <AnimatedSocialIcon
                    brandName="facebook"
                    url="https://www.facebook.com/shir.bata"
                    animation="bounce"
                    defaultColor="#271E9F"
                    hoverColor="black"
                    width="2.6em"
                    animationDuration={0.8}
                    style={{ padding: '1%' }}
                />
                <AnimatedSocialIcon
                    brandName="linkedin"
                    url="https://www.linkedin.com/in/shir-bata-ba7b9a197/"
                    animation="bounce"
                    defaultColor="#3182D2"
                    hoverColor="black"
                    width="2.6em"
                    animationDuration={0.8}
                    style={{ padding: '1%' }}
                />
            </div>
        </div>
    );
}

export default Intruduce;
