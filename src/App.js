import React from 'react';
import About from './About';
import MySkills from './MySkills';
import Intruduction from './Intruducion';
import NAV from './NAV';
import MyProjects from './MyProjects';
import Contact from './Contact';
function App() {
    return (
        <div>
            <div>
                <NAV />
            </div>
            <div>
                <Intruduction />
            </div>
            <div>
                <About />
            </div>
            <div>
                <MySkills />
            </div>
            <div>
                <MyProjects />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    );
}
export default App;
