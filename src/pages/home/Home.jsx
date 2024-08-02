import React from "react";
import Profile from "../../assets/home.jpg"
import { Link } from "react-router-dom";
import {FaArrowRight} from "react-icons/fa"
import "./home.css"

const Home=()=>{
    return (
       <section className="home section grid">
        <img src={Profile} alt='' className='home__img'/>

        <div className="home__content">
            <div className="home__data">
                <h1 className="home__title"><span>I'm Zain Ishtiaq.</span> Flutter Developer</h1>

                <p className="home__description">To become a proficient Flutter Developer by utilizing my
                  programming skills and creativity to develop innovative and user-friendly applications 
                  that can make a positive impact on people's lives. I am committed to learning new things 
                  and growing personally, and I am always eager to improve my professional skills.</p>
                
                <Link to='/about' className="button">
                    More About Me <span className='button__icon py-5 px-5'><FaArrowRight/></span>
                </Link>
            </div>
        </div>
        <div className="color__block"></div>
       </section>
    )
}
export default Home