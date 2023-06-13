import React from 'react';
import '../styles/Contact.css'
import {GoLocation} from 'react-icons/go'
import face from '../assets/facebook (1) 1.png'
import linked from '../assets/linkedin (1) 1.png'
import insta from '../assets/instagram (1) 1.png'
import {BiChevronsRight} from 'react-icons/bi'
import exma from '../assets/exams 1.png'
import socials from '../assets/Group 1283.png'
import { Link } from 'react-router-dom';


 const Contact = () => {
    return(
        <div>
            <div className='blog'>
                <h4>Support</h4>
                <h2>How can we help you?</h2>
                <h6>We Will Open The World Of Knowledge For You! This is the latest online <br /> examination system you will ever need!</h6>
            </div>
            <div className='contact'>
                <div className='conhead'>
                    <div className='cont'>
                        <h2>Contact Us</h2>
                        <h4>We Will Open The World Of Knowledge For You! This is <br /> the latest online examination system you will ever need!</h4>
                    </div>
                    <div className='head'>
                        <h4>Head Office</h4>
                        <h6>17/18 Folabi Baker street <br /> Agungi, Lekki, Lagos Nigeria</h6>
                        <div className='location'>
                            <GoLocation/> 
                            <h6 style={{color: "#002099"}}>Get directions </h6>    
                        </div>     
                        <div className='number'>
                            <h6>+234 4863 33773</h6>
                            <h6>Examsafricainfo.com</h6>
                        </div>
                        <div>
                            <img src={face} />
                            <img src={insta} />
                            <img src={linked} />
                        </div>
                    </div>
                </div>
                <div className='name-info'>
                    <div className='namemail'>
                        <div className='name'>
                            <h3>Name</h3>
                            <input type="text" placeholder='Garba Garba' style={{width:'177px',height:'40px'}} />
                        </div>
                        <div className='email'>
                            <h3>Email Address</h3>
                            <input type="email" placeholder='grababegd@gmail.com'style={{width:'177px',height:'40px'}} />
                        </div>
                    </div>
                    <div className='subj'>
                        <h3>Subject</h3>
                        <input type="text" placeholder='Can’t find a subject' style={{width:'400px',height:'40px'}} />
                    </div>
                    <div>
                        <h3>How can we help you?</h3>
                        <input type="text" placeholder='I need to study for a hausa exam and i can’t find the course' style={{width:'400px',height:'40px'}} />
                    </div>
                    <button className='message'>Send message
                    <BiChevronsRight/>
                    </button>
                </div>
            </div>
            <div className='help'>
                <h3>Need specific help?</h3>
                <h5>Visit our frequently asked questions section here or make use our social media platforms <br /> to get in contact with us.  Click on any of the social media icons to be redirected.</h5>
            </div>
            <footer>
                <div className='foot'>
                    <div className='main-foot'>
                        <div className='MF1'>
                            <h4>Main</h4>
                            <Link to="/">Home</Link>
                         </div>
                        <div className='fofaq'>
                            <h4>Need Help</h4>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/faq">FAQ</Link>
                        </div>
                        <div>
                            <h4>Features</h4>
                            <h6>Categories</h6>
                            <h6>Past Questions</h6>
                            <h6>Subjects</h6>
                        </div>
                        <div className='MF1'>
                            <h4>Informative</h4>
                            <Link to="/blog">Blog</Link>
                        </div>
                    
                    </div>
                    <div className='footex'>
                        <img src={exma} />
                    </div>
                    <div className='know'>
                        <h4>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! With our easy online exam site, you will set up your own engaging exams that fit any kind of difficulty level and be a learning expert.</h4>
                        <div className='socials'>
                            <img src={socials} />
                         </div>
                    </div>
                    <div style={{backgroundColor: "#00070F"}}>
                        
                    </div>
                </div>
                <div className='rights'>
                    <h5> © 2022 All Rights reserved by Exams Africa</h5>
                </div>
            </footer>
        </div>
    )
 }



export default Contact 