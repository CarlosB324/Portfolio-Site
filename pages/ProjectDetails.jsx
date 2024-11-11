import React from "react"
import { Link, useParams } from "react-router-dom"
import { getWebsite } from "../api"

export default function ProjectDetails() {
    const [website, setWebsite] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()
    
    React.useEffect(() => {
        async function loadWebsite() {
            setLoading(true)
            try {
                const data = await getWebsite(id)
                setWebsite(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadWebsite()
    }, [id])
    
    if (loading) {
        return <h1 className="sec-pad">Loading...</h1>
    }
    
    if (error) {
        return <h1 className="sec-pad">There was an error: {error.message}</h1>
    }
    
    function skillsElement() {
        website.skills.map(skill => (
            <div className="skills__skill" key={skill}>{skill}</div>
        ))
    }
    
    return (
        <>
        {website && (
        <div>
            <section className="project-cs-hero">
                <div className="project-cs-hero__content">
                    <h1 className="heading-primary">{website.name}</h1>
                    <div className="project-cs-hero__info">
                        <p className="text-primary">{website.shortInfo}</p>
                    </div>
                    <div className="project-cs-hero__cta">
                        <a 
                            href={website.liveLink} 
                            className="btn btn--bg" 
                            target="_blank"
                        >
                            Live Link
                        </a>
                    </div>
                </div>
            </section>
            <section className="project-details">
                <div className="main-container">
                    <div className="project-details__content">
                        <div className="project-details__showcase-img-cont">
                            <img
                                src={`../assets/images/${website.image}`}
                                alt="Project Image"
                                className="project-details__showcase-img"
                            />
                        </div>
                        <div className="project-details__content-main">
                            <div className="project-details__desc">
                                <h3 className="project-details__content-title">Project Overview</h3>
                                <p className="project-details__desc-para">{website.longInfo}</p>
                            </div>
                        <div className="project-details__tools-used">
                            <h3 className="project-details__content-title">Tools Used</h3>
                            <div className="skills">
                                {website.skills.map(skill => (
                                    <div className="skills__skill" key={skill}>{skill}</div>
                                ))}
                            </div>
                        </div>
                            <div className="project-details__links">
                                <h3 className="project-details__content-title">See Live</h3>
                                <a
                                    href={website.liveLink}
                                    className="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank"
                                >
                                    Live Link
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )}
        </>
    )
}
                                // <a
                                //     href="#"
                                //     className="btn btn--med btn--theme-inv project-details__links-btn"
                                //     target="_blank"
                                // >
                                //     Code Link
                                // </a>