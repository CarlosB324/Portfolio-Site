import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    
    return (
        <section className="home-hero">
            <div className="home-hero__content">
                <h1 className="heading-primary">Hey, My name is Carlos Bonilla</h1>
                <div className="home-hero__info">
                    <p className="text-primary">
                        I am a passionate frontend developer based in Florida. My specialities are <strong>React</strong> and <strong>CSS</strong>, and I love building apps that are easy to use.
                    </p>
                </div>
                <div className="home-hero__cta">
                    <Link to="projects" className="btn btn--bg">See my projects</Link>
                </div>
            </div>
        </section>
    )
}