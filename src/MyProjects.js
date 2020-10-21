import React from 'react';
import pic1 from './pictures/pic1.jpg';
import pic2 from './pictures/pic2.jpg';
import pic3 from './pictures/pic3.jpg';
import pic4 from './pictures/pic4.jpg';
import pic5 from './pictures/pic5.jpg';
import pic6 from './pictures/pic6.jpg';
import pic7 from './pictures/pic7.jpg';
function MyProjects() {
    return (
        <div className="MyProjects">
            <div className="title-3">Projects</div>
            <div className="dashed-line"></div>
            <div className="cards-line1">
                <div className="card2">
                    <div className="card">
                        <div className="card text-center">
                            <div className="overflow">
                                <img src={pic2} alt="im 1" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">PORTFOLIO </h4>
                                <p className="text-secondary">React, HTML, CSS</p>
                                <a href="https://github.com/shirbata/Youtube" className="Button">
                                    GIT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card1">
                    <div className="card">
                        <div className="card text-center">
                            <div className="overflow">
                                <img src={pic1} alt="im 1" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">VIDEOS PLAYER </h4>
                                <p className="text-secondary">React, HTML, CSS</p>
                                <a href="https://github.com/shirbata/Youtube" className="Button">
                                    GIT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card3">
                    <div className="card">
                        <div className="card text-center">
                            <div className="overflow">
                                <img src={pic3} alt="im 3" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">VOTING </h4>
                                <p className="text-secondary">React, HTML, CSS</p>
                                <a href="https://github.com/shirbata/vote.git" className="Button">
                                    GIT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line-2">
                <div className="card4">
                    <div className="card">
                        <div className="card text-center">
                            <div className="overflow">
                                <img src={pic4} alt="im 4" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">POLYNOMIAL-MONOMIAL</h4>
                                <p className="text-secondary">C</p>
                                <a href="https://github.com/shirbata/PolynomialMonomial" className="Button">
                                    GIT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card5">
                    <div className="card">
                        <div className="card text-center">
                            <div className="overflow">
                                <img src={pic5} alt="im 5" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">GREEDY COLORING ALGO</h4>
                                <p className="text-secondary">C</p>
                                <a href="https://github.com/shirbata/GreedyColoring" className="Button">
                                    GIT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card6">
                    <div className="card">
                        <div className="card text-center">
                            <div className="overflow">
                                <img src={pic6} alt="im 6" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">PATTERN SEARCHING</h4>
                                <p className="text-secondary">JAVA</p>
                                <a href="#" className="Button">
                                    GIT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line3">
                <div className="card7">
                    <div className="card">
                        <div className="card text-center">
                            <div className="overflow">
                                <img src={pic7} alt="im 7" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">DICE GAME </h4>
                                <p className="text-secondary">React, HTML, CSS</p>
                                <a
                                    href="https://https://github.com/shirbata/DiceGame.git.com/shirbata/Youtube"
                                    className="Button"
                                >
                                    GIT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
