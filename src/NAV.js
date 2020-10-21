import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="nav-container">
            <div className="home" onClick={scrollToTop}>
                {' '}
                SB{' '}
            </div>
            <Link
                className="link"
                activeClass="active"
                to="AboutMe"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
            >
                About
            </Link>
            <Link
                className="link"
                activeClass="active"
                to="ui-container"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
            >
                Skills
            </Link>
            <Link
                className="link"
                activeClass="active"
                to="MyProjects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
            >
                Projects
            </Link>
            <Link
                className="link"
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
            >
                Contact
            </Link>
        </div>
    );
};

export default Navbar;
