import React from "react"
import { Link } from "react-router-dom"
import { getWebsites } from "../api"

export default function Projects() {
    const [websites, setWebsites] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    
    React.useEffect(() => {
        async function loadWebsites() {
            setLoading(true)
            try {
                const data = await getWebsites()
                setWebsites(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadWebsites()
    }, [])
    
    if (loading) {
        return <h1 className="sec-pad">Loading...</h1>
    }
    
    if (error) {
        return <h1 className="sec-pad">There was an error: {error.message}</h1>
    }
    
    function capitalizeWords(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    
    function reverseArr(input) {
        let ret = new Array;
        for(let i = input.length-1; i >= 0; i--) {
            ret.push(input[i]);
        }
        return ret;
    }
    
    const flipWebsitesArr = reverseArr(websites)

    
    const projectElements = flipWebsitesArr.map(website => (
        <div className="projects__row" key={website.id}>
            <div className="projects__row-img-cont">
                <img
                    src={`../assets/images/${website.image}`}
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                />
            </div>
            <div className="projects__row-content">
                <h3 className="projects__row-content-title">{capitalizeWords(website.name)}</h3>
                <p className="projects__row-content-desc">{website.shortInfo}</p>
                <Link
                    to={website.id}
                    className="btn btn--med btn--theme"
                >
                    Learn more
                </Link>
            </div>
            <div className="projects__row-break-line"></div>
        </div>
    ))
    
    return (
        <section className="sec-pad">
            <div className="main-container">
                <h2 className="heading-sec__mb-bg">
                    <span className="heading-sec__main">Projects</span>
                    <span className="heading-sec__sub">
                        All my projects include links to the live version. Click the button to learn more about each one.
                    </span>
                </h2>
                <div className="projects__content">
                    {projectElements}
                </div>
            </div>
        </section>
    )
}