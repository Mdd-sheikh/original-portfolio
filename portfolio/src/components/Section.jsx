import './Section.css'
import html_icon from '../assets/HTML5_logo.png'
import css_icon from '../assets/css3-logo.svg'
import js_icon from '../assets/js_logo.png'
import react_icon from '../assets/React-icon.png'
import nodejs_icon from '../assets/js_logo.png'
import git_icon from '../assets/git_icon.svg'
import github_icon from '../assets/git hub_icon.png'
import python_icon from '../assets/python_icon.png'
import uiux_icon from '../assets/ui-ux-design-icon.png'
import saas_icon from '../assets/saas_icon.png'
import sql_icon from '../assets/sql_icon.jpeg'
import About from '../About/About'
import { useEffect } from 'react'


const Section = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((item) => {
                if (item.isIntersecting) {
                    item.target.classList.add("opacity")

                }
                else {
                    item.target.classList.remove("opacity")


                }
            })
        }, { threshold: 0.1 })
        const elements = document.getElementsByClassName("skill-sections");
        Array.from(elements).forEach((el) => observer.observe(el));

        return () => observer.disconnect()
    }, []);











    return (
        <>
            <div className="section" id="section">
                <div className="section-heading">
                    <p>MD AADIL</p>
                    <div className="description-text">
                        <span>Software Engineer ,Frontend End & backend End developer</span>
                    </div>
                </div>

            </div>


            <div className="about-section">
                <About />
            </div>
            <div className="new-section" id='skill'>
                <div className="new-section-headind-one">
                    <h2>MY Skill</h2>
                </div>

                <div className="slider-boxes">

                </div>
            </div>
            <hr className='new-section-hr' />
            <div className="skill-sections">

                <div className="logo-boxes">


                    <div className="html-box">
                        <img src={html_icon} alt="html icon" />
                        <p>HTML</p>
                    </div>
                    <div className="css-box">
                        <img src={css_icon} alt="css icon " />
                        <p>CSS</p>
                    </div>
                    <div className="js-box">
                        <img src={js_icon} alt="java script icon" />
                        <p>JAVA SCRIPT</p>
                    </div>
                    <div className="react-box">
                        <img src={react_icon} alt="react icon" />
                        <p>REACT</p>
                    </div>
                    <div className="node-box">
                        <img src={nodejs_icon} alt="react icon" />
                        <p>NODE JS</p>
                    </div>
                    <div className="git-box">
                        <img src={git_icon} alt="git icon" />
                        <p>GIT</p>
                    </div>
                    <div className="github-box">
                        <img src={github_icon} alt="github icon" />
                        <p>GIT HUB</p>
                    </div>
                    <div className="python-box">
                        <img src={python_icon} alt="python" />
                        <p>PYTHON</p>
                    </div>
                    <div className="ui-ux-box">
                        <img src={uiux_icon} alt=" ui-ux icon" />
                        <p>UI/UX</p>
                    </div>
                    <div className="saas-box">
                        <img src={saas_icon} alt="saas icon" />
                        <p>SAAS</p>
                    </div>
                    <div className="sql-box">
                        <img src={sql_icon} alt="" />
                        <p>SQL</p>
                    </div>
                </div>
            </div>

           <p>check again one more time</p>

        </>
    )

}
export default Section 