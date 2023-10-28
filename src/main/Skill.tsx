import './Skill.css'
import { TypeAnimation } from 'react-type-animation';

function Skill() {
  return (
    <section className='Skill' id="Skill">
        <div className="header-title">
            <TypeAnimation
                sequence={[
                'Today I may not be good at it. But in the future I will be better.',
                1500,
                "My skills may be lacking. But at least I'm proud to have learned it myself.",
                1500,
                'Haha this is my skill.',
                1000,
                ]}
                wrapper="h1"
                speed={50}
                style={{display: 'inline-block',textTransform:'uppercase'}}
                repeat={Infinity}
            />
        </div>
        <div className="container">
            <div data-aos="fade-right" className="skill-card">
                {/* <h1 className='title'>Web Development</h1> */}
                <div className="content">
                    <div className="card">
                        <h1>Frontend</h1>
                        <div className="logo-container">
                            <div className="logo">
                                <img alt='react' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167940453300187206/react-1-logo-png-transparent.png?ex=654ff44f&is=653d7f4f&hm=6ae005d459f8df6aff82ff96bef9cefcefc3c6a46cd93753aaeb3309905ce3fd&'></img>
                            </div>
                            <div className="logo">
                                <img alt='js' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167941257071439933/640px-JavaScript-logo.png?ex=654ff50e&is=653d800e&hm=802a4ec8086f57e2f367689f0c1b23ea6003a49b0f5eb95b8342c1737146dff8&'></img>
                            </div>
                            <div className="logo">
                            <img alt='ts' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167941628556746883/typescript_original_logo_icon_146317.png?ex=654ff567&is=653d8067&hm=5c94c709af6bacaa9bd70c899da73ebdd273f33cf46da2123700440605d67de7&'></img>
                            </div>
                            <div className="logo">
                                <img alt='css3' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167941216902586377/800px-CSS3_logo.png?ex=654ff505&is=653d8005&hm=c01b42134cf62b8a230b823f6081083ab7973b777e34f949bd93749bd4833fd8&'></img>
                            </div>
                            <div className="logo">
                                <img alt='tailwind' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167942465098096671/kgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgyPLfwFZMU1iqvnnkQAAAABJRU5ErkJggg.png?ex=654ff62f&is=653d812f&hm=698db8d67469473d7903cea5eb260193bfdbdcbb960d6646007eb9e854b89e5d&'></img>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h1>Backend</h1>
                        <div className="logo-container">
                            <div className="logo">
                                <img alt='nodejs' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167944231491473460/1bc9pmTiyKR0WNPka2w3e0Q.png?ex=654ff7d4&is=653d82d4&hm=61aacb7f1f7b59a9ea5aca6fa04c8a59fc335f9d6ed46ce1fc78b95498270ab6&'></img>
                            </div>
                            <div className="logo">
                                <img alt='ts' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167941628556746883/typescript_original_logo_icon_146317.png?ex=654ff567&is=653d8067&hm=5c94c709af6bacaa9bd70c899da73ebdd273f33cf46da2123700440605d67de7&'></img>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h1>Database</h1>
                        <div className="logo-container">
                            <div className="logo">
                                <img alt='mysql' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167944149123743804/62debc4fff3c6e4b8b5de8d3.png?ex=654ff7c0&is=653d82c0&hm=373c2c70d971457bca378afbcfa1dd130650ce71e85caa46357eea8809606474&'></img>
                            </div>
                            <div className="logo">
                                <img alt='postgresql' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167944862751015032/1985px-Postgresql_elephant.png?ex=654ff86a&is=653d836a&hm=0931d553af20dc4fa44fe6d8dbd598515dae7aa22dd27e618a002bf73296c416&'></img>
                            </div>
                            <div className="logo">
                                <img alt='firestore' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167951877435052033/logo-logomark.png?ex=654ffef3&is=653d89f3&hm=590d27aa9dc3f5fe88865b2134da8c3f1a1cee9a13a3963a577436f377cd19bf&'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" className="skill-card">
                {/* <h1 className='title'>Others</h1> */}
                <div className="content">
                    <div className="card">
                        <h1>Game Development</h1>
                        <div className="logo-container">
                            <div className="logo">
                                <img alt='c#' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167947704886902875/1200px-Logo_C_sharp.png?ex=654ffb10&is=653d8610&hm=7572d4defb7031479898354441233ca9134afcb5506d286b7450157d225586f4&'></img>
                            </div>
                            <div className="logo">
                                <img alt='lua' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167947903214555136/2048px-Lua-Logo.png?ex=654ffb3f&is=653d863f&hm=29e6ecbbf0b3de9d4100791393acb9200a61038ff8c3dc74f1965206852e8f8b&'></img>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h1>Arduino / ESP 8266</h1>
                        <div className="logo-container">
                        <div className="logo">
                                <img alt='cpp' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167947755537313913/cpp_logo.png?ex=654ffb1c&is=653d861c&hm=35e5633b4fff4803a47c217e6154b4cc64ca6bdb7207e665496325e5e810ab0f&'></img>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h1>Other</h1>
                        <div className="logo-container">
                            <div className="logo">
                                <img alt='py' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167947856221585578/1869px-Python-logo-notext.png?ex=654ffb34&is=653d8634&hm=e34e47efd0e75ef6850fb0be00023d1e99c9283adbe923c387679c250cadb415&'></img>
                            </div>
                            <div className="logo">
                                <img alt='vb' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167949595981119498/VB.png?ex=654ffcd3&is=653d87d3&hm=f86a47f1c698fbd8223b3362a500881f32183f088363f19e0e7e18b39f197ac3&'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" className="skill-card">
                {/* <h1 className='title'>Tools</h1> */}
                <div className="content">
                    <div className="card">
                    <h1>Version Control</h1>
                        <div className="logo-container">
                            <div className="logo">
                                <img alt='github' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167951171458170951/GitHub-Mark-ea2971cee799.png?ex=654ffe4a&is=653d894a&hm=3bb4c24bade17d53a003153754296f993dddf3bd665479f57b565d6e27fde920&'></img>
                            </div>
                            <div className="logo">
                                <img alt='gitlab' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167951559125106708/gitlab_icon_130930.png?ex=654ffea7&is=653d89a7&hm=9e656c0d87a20f727b77ccd7423904994da25e1e522ef8aa9b15befb37fbcaf7&'></img>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                    <h1>Hosting</h1>
                        <div className="logo-container">
                            <div className="logo">
                                <img alt='firebaes' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167951823085244566/logo-vertical.png?ex=654ffee6&is=653d89e6&hm=c6134cafd888e88d164c281c6b5d7d826207ba850e593633c4423787452c10fb&'></img>
                            </div>
                            <div className="logo long">
                                <img alt='vercel' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167951762062315651/vercel1868.png?ex=654ffed7&is=653d89d7&hm=7bbf82f0957a749a89cbbd66def22a109c737cefeb1327624712adb2012fff82&'></img>
                            </div>
                            <div className="logo long">
                                <img alt='replit' src='https://cdn.discordapp.com/attachments/1089099102492561429/1167952166372249681/logotype.png?ex=654fff37&is=653d8a37&hm=3aea17542be35408d538d9ab71ef5594e0e5397226e22d1212fa4f070f5e6473&'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill