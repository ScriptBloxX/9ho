import { useState } from 'react';
import './Project.css'
function Project() {
    const [cursorX, setCursorX] = useState<number>(0);
    const [cursorY, setCursorY] = useState<number>(0);

    window.addEventListener('mousemove', (e: any) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
    })

    const data = [
        {
            title:"Cashbag",
            desc:"Cash Bag is a website for recording your income and expenses. Now the era of writing down on paper is over!",
            visit:'https://cashbag.klmaemn.repl.co/',
            source: 'https://github.com/ScriptBloxX/cashbag',
            tag:['EJS','JAVASCRIPT','CSS','FIREBASE','FIRESTORE','EXPRESS'],
            date:'Dec 11, 2022',
            thumbnail:'https://cdn.discordapp.com/attachments/1089099102492561429/1185937970159685672/image.png?ex=65916dcd&is=657ef8cd&hm=b27e845f4912d6e14e360e01d167eb289a571e26abea67ae9daa785cb942da18&'
        },
        {
            title:"PHOTOPHIC",
            desc:"“It is more important to click with people than to click the shutter”",
            visit:'https://photophic.klmaemn.repl.co/',
            source: 'https://github.com/ScriptBloxX/Photo-Responsive-Website',
            tag:['HTML','CSS','JAVASCRIPT'],
            date:'Apr 2, 2022',
            thumbnail:'https://cdn.discordapp.com/attachments/1089099102492561429/1185946741531496580/image.png?ex=659175f9&is=657f00f9&hm=70ef249c1a10e25e7a70f571a545c3f64e01602666d9c6cb6ab39103d6076c3c&'
        },
        {
            title:"STUDENT BLOG",
            desc:"Create your blog here. to share experiences with others!",
            visit:'https://studentblog.klmaemn.repl.co/',
            source: 'https://github.com/ScriptBloxX/Full-Stack-Blog-Website',
            tag:['EJS','JAVASCRIPT','CSS','FIREBASE','FIRESTORE','EXPRESS'],
            date:'Jul 19, 2022',
            thumbnail:'https://cdn.discordapp.com/attachments/1089099102492561429/1185948333999673344/image.png?ex=65917774&is=657f0274&hm=b225f43085bcb6e1b4580a97fbf51eb71627b9f04b34389fd4a6204576efce8e&'
        },
        {
            title:"MUSIC BOT",
            desc:"A music bot that lets you play music in Discord!",
            visit:'https://www.youtube.com/watch?t=417&v=m_kQQR9EnT4&feature=youtu.be',
            source: 'https://github.com/ScriptBloxX/MusicBot',
            tag:['NODE.JS','DISCORD.JS'],
            date:'Oct 20, 2022',
            thumbnail:'https://cdn.discordapp.com/attachments/1089099102492561429/1089101509867868191/image.png'
        },
        {
            title:"CHAT-GPT DISCORD BOT",
            desc:"A ChatGPT bot on Discord",
            visit:'https://discord.com/oauth2/authorize?client_id=1054288896453771274&permissions=8&scope=bot',
            source: 'https://replit.com/@klmaemn/Nene',
            tag:['NODE.JS','OPENAI','EXPRESS'],
            date:'Dec 19, 2022',
            thumbnail:'https://cdn.discordapp.com/attachments/1089099102492561429/1089108728755781673/image.png'
        },
        {
            title:"UNITY HORROR GAME",
            desc:"this game is not finished and has not been continuously developed due to laziness and a lack of ideas.",
            visit:'https://www.youtube.com/watch?v=bQ0qy2UXIfo&feature=youtu.be',
            source: 'https://github.com/ScriptBloxX/Unity-Horror-Game',
            tag:['C#','UNITY'],
            date:'Mar 26, 2023',
            thumbnail:'https://cdn.discordapp.com/attachments/1089099102492561429/1089493672711700580/image.png'
        },
        {
            title:"UNITY ZOMBIE GAME",
            desc:"This game is not finished and has not been continuously developed due to laziness and a lack of ideas.",
            visit:'https://www.youtube.com/watch?v=dfn46FAe90c&t=2077s',
            source: 'https://github.com/ScriptBloxX/Zombie-Game-Unity',
            tag:['C#','UNITY'],
            date:'Mar 26, 2023',
            thumbnail:'https://cdn.discordapp.com/attachments/1089099102492561429/1185953835169091594/maxresdefault.png?ex=65917c94&is=657f0794&hm=d4ac02e7c923b37255e4e54c50b387d3dcda0ab0ffc4db5aaa49760bb8563b57&'
        },
        {
            title:"WAR OF TOWERS (ROBLOX GAME)",
            desc:"Use your tower to defeat the zombies. Protect your base.",
            visit:'https://www.roblox.com/games/4813086672/War-of-towers',
            source: '',
            tag:['LUA','ROBLOX STUDIO'],
            date:'Mar 24, 2020',
            thumbnail:'https://tr.rbxcdn.com/e5893e04ea8ef71a54e965095500636f/768/432/Image/Png'
        },
        {
            title:"Mutiply Gas Sensor",
            desc:"Smoke detection with multiple sensors",
            visit:'https://www.youtube.com/watch?v=4pSShxoy-BA',
            source: 'https://github.com/ScriptBloxX/Arduino-Mutiply-Gas-Sensor/tree/main',
            tag:['C++','ARDUINO','ESP8266','MQ-2'],
            date:'Apr 4, 2023',
            thumbnail:'https://cdn.discordapp.com/attachments/1089099102492561429/1092056626267160686/image.png'
        }
    ]

    return (
        <section className="project">
            <div className="cursor" style={{ left: cursorX - 35 + 'px', top: cursorY - 35 + 'px' }}></div>
            <h2>PROJECT</h2>
            <div className="project-container">
            {data.map((project, index) => (
                    <div className="project-box" key={index}>
                        <img src={project.thumbnail} alt="Project Thumbnail" />
                        <div className="title">
                            <h3><i className="ri-time-line"></i> {project.date}</h3>
                        </div>
                        <div className="content">
                            <h2>{project.title}</h2>
                            <h3>{project.desc}</h3>
                        </div>
                        <div className="btn">
                            <a href={project.visit} target='_blank'><i className="ri-eye-2-line"></i>View</a>
                            {project.source?
                            <a href={project.source} target='_blank'><i className="ri-code-s-slash-line"></i>Source</a>                            
                            :null}
                        </div>
                        <div className="bottom-tag">
                            {project.tag.map((tag, tagIndex) => (
                                <span key={tagIndex} className='purple'>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Project