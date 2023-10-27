import {useEffect} from 'react';
import me from '../assets/me3.png';
import './Home.css';
import aos from 'aos';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  useEffect(()=>{
    aos.init({
      duration: 1000,
    })    
  },[])

  return (
    <section className='home'>
      <div className="container">
        <div data-aos="fade-right" className="content-left">
          <h3>I'm</h3>
          <h2>Somchai Wantaeng</h2>
          <h3>I am a second year vocational student and I love programming.</h3>
          <h3>Currently, I am focusing on web development and I am determined to continue developing my skills.</h3>
          <h3>I hope that I can be of assistance to you in the future.</h3>
          <h3>Call me "Ton". I am 17 years old and currently studying at PM-TECH.</h3>
        </div>
        <div className="profile">
          <div className="circle">
            <img  data-aos="zoom-out" src={me}></img>
          </div>
            <div data-aos="fade-up" className="bottom-nav">
              <button><i className="ri-facebook-box-fill"></i>Facebook</button>
              <button><i className="ri-instagram-fill"></i>Instagram</button>
              <button><i className="ri-github-fill"></i> Github</button>
              <button><i className="ri-youtube-fill"></i>Youtube</button>
            </div>
        </div>
      </div>
      <div className="partition-container">
        <div className="Partition">
          <TypeAnimation
            sequence={[
              'A Full Stack Developer',
              1000,
              'A Game Developer',
              1000,
              'A Youtuber',
              1000,
              'ฅ^-^ฅ',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{display: 'inline-block'}}
            repeat={Infinity}
          />
        </div>
      </div>
    </section>
  )
}

export default Home
