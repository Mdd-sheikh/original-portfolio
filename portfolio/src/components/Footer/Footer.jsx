import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="left-footer">
                <div className="left-side">
                    <div className="heading">
                        <h1>What happens next usually starts with a conversation.</h1>
                    </div>

                    <div className="right-side">
                        <p>mda231034@gmail.com</p>
                        <a href="#" target='_blank'><div className="contact-us">
                            <div className="dot"><i class="fa-solid fa-arrow-right"></i></div>
                            <span>Contact Us</span>
                        </div></a>
                    </div>
                </div>

            </div>
            <hr className='footer-hr-tag' />
            <div className="right-footer">
                <div className="left-side-right-footer">
                    <a href="#navbar"><div className="blinkad-logo">
                        <i class="fa-solid fa-arrow-right"></i>
                        <div className="footer-circle"></div>
                        <p>Blinkad</p>
                    </div></a>
                    <div className="copy-right-text">
                        © 2025 Blinkpath. All rights reserved.
                    </div>
                </div>
                <div className="right-side-right-footer">
                    <div className="one-side">
                        <p>Email</p>
                        <p className='email '>mda231034@gmail.com</p>
                    </div>
                    <div className="two-side">
                        <div className="section-heading">
                            Social
                        </div>
                        <div className="two-side-section">

                            <div className="instagram">
                                <i class="fa-solid fa-arrow-right"></i>

                                <p>Instagram</p>
                            </div>
                            <div className="x-link">
                                <i class="fa-solid fa-arrow-right"></i>
                                <p>X</p>
                            </div>
                            <div className="linkedin-link">
                                <i class="fa-solid fa-arrow-right"></i>
                                <a href="https://www.linkedin.com/in/md-aadil-a171a4261/" target='_blank'> <p>LinkedIn</p></a>
                            </div>
                        </div>
                        <div className="privacy-policy">
                            <p>Privacy Policy</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer