import React from "react" 
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="main-container">
                <div className="main-footer__upper">
                    <div className="main-footer__row main-footer__row-1">
                        <h2 className="heading heading-sm main-footer__heading-sm">
                        <span>Social</span>
                        </h2>
                        <div className="main-footer__social-cont">
                            <a 
                                target="_blank" 
                                rel="noreferrer" 
                                href="https://www.linkedin.com/in/carlos-bonilla-b845061b0/"
                            >
                                <img
                                    className="main-footer__icon"
                                    src="../assets/images/icon/linkedin-ico.png"
                                    alt="icon"
                                />
                            </a>
                            <a 
                                target="_blank" 
                                rel="noreferrer" 
                                href="https://github.com/CarlosB324"
                            >
                                <img
                                    className="main-footer__icon"
                                    src="../assets/images/icon/github-ico.png"
                                    alt="icon"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="main-footer__row main-footer__row-2">
                        <h4 className="heading heading-sm text-lt">Carlos Bonilla</h4>
                        <p className="main-footer__short-desc">
                            This website is made by remaking <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">Ram Maheshwari</a> template to use React and React Router
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
                //     <!-- If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :)
                // <div className="main-footer__lower">
                //   &copy; Copyright 2021. Made by
                //   <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com"
                //     >Ram Maheshwari</a
                //   >
                // </div>
                //  -->