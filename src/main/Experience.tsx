import { useEffect, useState } from 'react'
import './Experience.css'
import ScrollDown from '../components/ScrollDown';
import { TypeAnimation } from 'react-type-animation';

interface ExperienceItem {
    Date: string;
    JD: string;
    TechStack: string;
}
function Experience() {
    const [Experience, SetExperience] = useState<ExperienceItem[]>([]);

    useEffect(() => {
        SetExperience([
            {
                Date: "June 2023 - July 2023",
                JD: "Internship At Software House (NDA)",
                TechStack: "Backend Develoepr | ASP.NET"
            },
            {
                Date: "July 2023 - September 2023",
                JD: "Internship At Phetkasem Management Technological College",
                TechStack: "IT Support"
            }
        ])
    }, [])
    return (
        <section className='Experience' id="Experience">
            <ScrollDown></ScrollDown>
            <div className="container">
                <div className="fake-tag-container">
                    <h4 className='fake-tag' dangerouslySetInnerHTML={{__html: '{p className="thank-you"}'}}></h4>
                    <TypeAnimation
                        sequence={[
                        "this is my work experience. There isn't much to it. But if there is a chance to work again I will do my best",
                        500,
                        ]}
                        wrapper="h4"
                        speed={50}
                        style={{display: 'inline-block',fontSize:'.7rem',color:'var(--fake-tag)',marginLeft:'1rem'}}
                        repeat={Infinity}
                    />
                    <h4 className='fake-tag' dangerouslySetInnerHTML={{__html: '{/p}'}}></h4>
                </div>
                <h1>🧑‍💻 Experience 🧑‍💻</h1>
                <div className="timeline">
                    { Experience.length? Experience.map((t,i)=>(
                        (i%2 == 0? 
                        <div className="box left" data-aos="zoom-in-left" key={i}>
                            <div className="content">
                                <h3>{t.Date}</h3>
                                <p>{t.JD}</p>
                                <div className="bottom">{t.TechStack}</div>
                            </div>
                        </div>
                        :
                            <div className="box right" data-aos="zoom-in-right" key={i}>
                                <div className="content">
                                    <h3>{t.Date}</h3>
                                    <p>{t.JD}</p>
                                    <div className="bottom">{t.TechStack}</div>
                                </div>
                            </div>
                        )
                    ))
                    :null}
                </div>
            </div>
        </section>
    )
}

export default Experience
