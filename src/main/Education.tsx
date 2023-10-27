import { useEffect, useState } from 'react'
import './Education.css'

interface EducationItem {
  Date: string;
  School: string;
  Level: string;
}
function Education() {
  const [Education, SetEducation] = useState<EducationItem[]>([]);

  useEffect(() => {
    SetEducation([
      {
        Date: "2016",
        School: "WEERASAMPHANWIITTAYA SCHOOL",
        Level: "Kindergarten & Elementary School"
      },
      {
        Date: "2021",
        School: "Prayamonthaturachsripijit School",
        Level: "Elementary School & Junior High School"
      },
      {
        Date: "Current",
        School: "Phetkasem Management Technological College",
        Level: "Vocational College"
      }
    ])
  }, [])
  return (
    <section className='Education' id='Education'>
      <div className="container">
        <h1>🎓 Education 🎓</h1>
        <div className="timeline">
          {Education.length ? Education.map((t, i) => (
            (i % 2 == 0 ?
              <div className="box left" data-aos="zoom-in-left" key={i}>
                <div className="content">
                  <h3>{t.Date}</h3>
                  <p>{t.School}</p>
                  <div className="bottom">{t.Level}</div>
                </div>
              </div>
              :
              <div className="box right" data-aos="zoom-in-right" key={i}>
                <div className="content">
                  <h3>{t.Date}</h3>
                  <p>{t.School}</p>
                  <div className="bottom">{t.Level}</div>
                </div>
              </div>
            )
          ))
            : null}
        </div>
      </div>
    </section>
  )
}

export default Education
