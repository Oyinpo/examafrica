import React from 'react';
import '../styles/Blog.css'
import book from '../assets/Rectangle 70.png'
import exma from '../assets/exams 1.png'
import socials from '../assets/Group 1283.png'
import {BiChevronsRight} from 'react-icons/bi'
import { Link } from 'react-router-dom';

 const Blog = () => {
    return(
        <div>
            <div className='blog'>
                <h4>Blog</h4>
                <h2>Get the latest Updates</h2>
                <h6>We Will Open The World Of Knowledge For You! This is the latest online <br /> examination system you will ever need! </h6>
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
 {/* //footer */}
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



export default Blog 