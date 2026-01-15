import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({ setContact }) => {







    return (

        <div className='navbar' id='navbar'>
            <div className="left">
                <i class="fa-solid fa-arrow-right"></i>
                <div className="circle-ar"></div>
                <p>Blinkad</p>
            </div>
            <div className="mid">
                <div className="circle"></div>
                <div className="items" id='items'>
                    <div className="nav-item">
                        <span className='default-text' id='home' >Home</span>
                        <a href="#new"><span className='hover-text' id='hover-text' >Home</span></a>
                    </div>
                    <div className="nav-item">
                        <span className='default-text' id='About'>About</span>
                        <a href="#about"> <span className='hover-text'>About</span></a>
                    </div>
                    <div className="nav-item">
                        <span className='default-text'>Skill</span>
                        <a href="#skill"><span className='hover-text'>Skill</span></a>
                    </div>
                    <div className="nav-item">
                        <span className='default-text'>Project</span>
                        <a href="#section"> <span className='hover-text'>Project</span></a>
                    </div>
                    <div className="nav-item color">
                        <span className='default-text '>contact</span>
                        <a href="#"><span className='hover-text '>contact</span></a>
                    </div>
                </div>
            </div>
            <div className="right nav-item">
                <span className='default-text'>Email Us</span>
                <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQbgcPLhkzCLlbgSCzrPplRZsGc?compose=new" target='_blank'><span className='hover-text'>Email Us</span></a>


            </div>
            <div className="color" >

                <div className="menu nav-item">
                    <span className='default-text'onClick={() => setContact(true)}>Menu</span>
                    <span className='hover-text' onClick={() => setContact(true)}>Menu</span>
                </div>

            </div>



        </div>


    )
}

export default Navbar;