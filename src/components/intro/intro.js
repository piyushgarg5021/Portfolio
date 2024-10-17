import React from 'react';
import '../../assets/image.png';
import bg from '../../assets/image.png';
import './intro.css';
const Intro = () => {
  return (
    // <div>intro</div>
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Piyush Garg</span> <br />Full Stack Developer</span>
            <p className="introPara">Hii, I am a fresher and frontend <br></br>and backend developer</p>
            {/* <Link><button className="btn"><img src="" alt=""></img></button></Link> */}
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro
