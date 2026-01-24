import React from 'react'
import { useEffect } from 'react'
import './About.css'
import about_image from '../assets/hero_setup_portfolio.jpg'
import cv from '../assets/Aadil_Resume.pdf'

const About = () => {

   
   const contacthandler = () => {
        const contact = document.querySelector(".container")
        const width = 1510;
        if(contact){
             contact.style.transform = `translate(-${width})px `
        }
        
        
        
    }

   useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((items) => {
            if (items.isIntersecting) {
                items.target.classList.add("about-opacity");
            } else {
                items.target.classList.remove("about-opacity");
            }
        });
    }, { threshold: 0.1 });

    const aboutElements = document.querySelectorAll(".about");
    aboutElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
}, []);






    return (

        <div className="container">
            <div className='about' id='about'>

                <div className="about-title">
                    <p>About <span>Me</span></p>
                </div>
                <div className="about-info">
                    <div className="about-image">
                        <a href={about_image} download={about_image}> <img src={about_image} alt="md aadil updated resume " /></a>
                    </div>
                    <div className="about-paragraph">
                        <p>I'm passionate about creating digital experiences that are both
                            beautiful and functional. With a strong focus on user-centered design,
                            I develop solutions that solve real problems. <br /> <br />My approach combines technical expertise with creative thinking to build applications
                            that are not only efficient but also delightful to use. </p>
                        <a href={cv} download={cv}>View CV</a>
                        
                    </div>
                </div>


            </div>
            <div className="contact" id='contact'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perferendis molestiae fugiat repellat pariatur? Molestiae, mollitia ullam unde
                nam nesciunt deserunt quos ea, numquam dolor corrupti deleniti recusandae in voluptates.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa inventore dicta nihil vero, quod ex magnam quidem? Cupiditate quidem dolore id suscipit 
                nostrum repudiandae dicta molestias quasi aspernatur sunt.
            </div>
        </div>
    )
}

export default About