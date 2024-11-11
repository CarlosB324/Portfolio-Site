import React from "react"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <section className="about sec-pad">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-med">
                    <span className="heading-sec__main">About Me</span>
                    <span className="heading-sec__sub">
                        <p>I'm a frontend developer based out of Florida. I enjoy building apps that solve problems, and that are easy to use. My specialities include JavaScript, React, and CSS.
                        </p>
                    </span>
                </h2>
                <div className="about__content">
                    <div className="about__content-main">
                        <h3 className="about__content-title">Get to know me!</h3>
                        <div className="about__content-details">
                            <p className="about__content-details-para">
                                My background is in 3D art. I have a bachelors degree in Game Arts from Full Sail University. When I'm not coding, I am gaming, making 3d art, or watching art videos.
                            </p>
                        </div>
                        <Link to="/contact" className="btn btn--med btn--theme dynamicBgClr">
                            Contact
                        </Link>
                    </div>
                    <div className="about__content-skills">
                        <h3 className="about__content-title">My Skills</h3>
                        <div className="skills">
                            <div className="skills__skill">HTML</div>
                            <div className="skills__skill">CSS</div>
                            <div className="skills__skill">JavaScript</div>
                            <div className="skills__skill">React</div>
                            <div className="skills__skill">GitHub</div>
                            <div className="skills__skill">Figma</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}