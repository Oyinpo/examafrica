import React, {useState} from 'react';
import '../styles/Faq.css'
import {BiChevronDown} from 'react-icons/bi'
import {BiChevronsRight} from 'react-icons/bi'
import book from '../assets/Rectangle 70.png'
import exma from '../assets/exams 1.png'
import socials from '../assets/Group 1283.png'
import { Link } from 'react-router-dom';



 const Faq = () => {
    const [drop, setDrop] = useState(false)
    const dropDown=()=>{
        setDrop(!drop)
    }
    const [drop1, setDrop1] = useState(false)
    const dropDown1=()=>{
        setDrop1(!drop1)
    }
    const [drop2, setDrop2] = useState(false)
    const dropDown2=()=>{
        setDrop2(!drop2)
    }
    const [drop3, setDrop3] = useState(false)
    const dropDown3=()=>{
        setDrop3(!drop3)
    }
    const [drop4, setDrop4] = useState(false)
    const dropDown4=()=>{
        setDrop4(!drop4)
    }
    const [drop5, setDrop5] = useState(false)
    const dropDown5=()=>{
        setDrop5(!drop5)
    }
    const [drop6, setDrop6] = useState(false)
    const dropDown6=()=>{
        setDrop6(!drop6)
    }
    return(
        <div>
            <div className='faq-top'>
                <h4>FAQ</h4>
                <h2>What do people usually ask?</h2>
                <h6>We Will Open The World Of Knowledge For You! This is the latest online <br /> examination system you will ever need! </h6>
            </div>
           <div className='register2'>
                <div>
                    <div className='register' onClick={dropDown}>
                        <h6>How to register?</h6>
                        <BiChevronDown/>
                    </div>
                    {drop && <div className='drop1'>
                        <p>This is Exams Africa. Kindly click on the register button. <br /> Thank You.</p>
                    </div>}
                </div>
                
                <div>
                    <div className='register'onClick={dropDown1}>
                        <h6>How to register?</h6>
                         <BiChevronDown/>
                    </div>
                    {drop1 && <div className='drop1'>
                        <p>This is Exams Africa. Kindly click on the register button. <br /> Thank You.</p>
                    </div>}
                </div>
           </div>
           <div className='register2'>
                <div>
                    <div className='register' onClick={dropDown2}>
                        <h6>How to register?</h6>
                        <BiChevronDown/>
                    </div>
                    {drop2 && <div className='drop1'>
                        <p>This is Exams Africa. Kindly click on the register button. <br /> Thank You.</p>
                    </div>}
                </div>
                <div>
                    <div className='register' onClick={dropDown3}>
                        <h6>How to register?</h6>
                        <BiChevronDown/>
                    </div>
                    {drop3 && <div className='drop1'>
                        <p>This is Exams Africa. Kindly click on the register button. <br /> Thank You.</p>
                    </div>}
                </div>
           </div>
           <div className='register2'>
                <div>
                    <div className='register' onClick={dropDown4}>
                        <h6>How to register?</h6>
                        <BiChevronDown/>
                    </div>
                    {drop4 && <div className='drop1'>
                        <p>This is Exams Africa. Kindly click on the register button. <br /> Thank You.</p>
                    </div>}
                </div>
                <div>
                    <div className='register' onClick={dropDown5}>
                        <h6>How to register?</h6>
                        <BiChevronDown/>
                    </div>
                    {drop5 && <div className='drop1'>
                        <p>This is Exams Africa. Kindly click on the register button. <br /> Thank You.</p>
                    </div>}
                </div>
           </div>
           <div className='feed'>
                <h2>Get Every Latest News Feed</h2>
                <div className='line3'></div>
           </div>
           <div className='exam-book'>
                <div className='book'>
                    <img src={book} width={"500kb"}/>
                    <h2>Examination Preparations</h2>
                    <h4>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</h4>
                    <button className='view'>View This Article 
                    <BiChevronsRight/>
                    </button>
                </div>
                <div className='book'>
                    <img src={book} width={"500kb"}/>
                    <h2>Examination Preparations</h2>
                    <h4>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</h4>
                    <button className='view'>View This Article 
                    <BiChevronsRight/>
                    </button>               
                 </div>
           </div>
           <footer>
                <div className='foot'>
                    <div className='main-foot'>
                        <div>
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
                        <div>
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



export default Faq 