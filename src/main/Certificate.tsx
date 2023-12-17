import './Certificate.css'

function Certificate() {
    function ViewCertificate(e:string){
        window.open(e);
    }
    return (
        <div id='Certificate' className="certificate-container">
            <h2>😹 Certificate 😹</h2>
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img onClick={(e)=>ViewCertificate((e.target as HTMLImageElement).src)} alt='dek-d fair' src='https://cdn.discordapp.com/attachments/1160522295517925448/1166670456972124180/image.png?ex=654b5588&is=6538e088&hm=019223f67c456c84a4f8c12ffc4a333744542f8a8479205d6ef50ac91a722775&'></img>
                        <h3>Dek-D's TCAS Fair</h3>
                    </div>
                    <div className="slide">
                        <img onClick={(e)=>ViewCertificate((e.target as HTMLImageElement).src)} alt='devlab' src='https://cdn.discordapp.com/attachments/1160522295517925448/1160522378464464986/devlab_new.png?ex=65476cb0&is=6534f7b0&hm=795be0ee7c74c6a6f564f10628544713aebe32c9c3f12582a1ec86d58d9058e4&'></img>
                        <h3>BorntoDev</h3>
                    </div>
                    <div className="slide">
                        <img onClick={(e)=>ViewCertificate((e.target as HTMLImageElement).src)} alt='freecodecamp' src='https://cdn.discordapp.com/attachments/1160522295517925448/1160522404666290267/codecamp_new.png?ex=65476cb6&is=6534f7b6&hm=8d9dd08577f8211130b0558e9f1dde71749c7ad65bcdf3834b359702a4792b15&'></img>
                        <h3>freeCodeCamp</h3>
                    </div>
                    <div className="slide">
                        <img onClick={(e)=>ViewCertificate((e.target as HTMLImageElement).src)} alt='py' src='https://cdn.discordapp.com/attachments/1160522295517925448/1167513207062138910/image.png?ex=654e6667&is=653bf167&hm=4d6153aeb206a3d6bfa360e044332b0e042077e72132ee9ef5a1fe9b124340fd&'></img>
                        <h3>GTC : Introduction to Python</h3>
                    </div>
                    <div className="slide">
                        <img onClick={(e)=>ViewCertificate((e.target as HTMLImageElement).src)} alt='tobeit67-online' src='https://cdn.discordapp.com/attachments/1160522295517925448/1175772053362712586/tobeit67_online.png?ex=656c720e&is=6559fd0e&hm=94ef4b68b6023051f99751722e4b1bb6425101a39d957f499d556051fbe4a1e8&'></img>
                        <h3>ToBeIT'67 The Second (Online)</h3>
                    </div>
                    <div className="slide">
                        <img onClick={(e)=>ViewCertificate((e.target as HTMLImageElement).src)} alt='tobeit67-onsite' src='https://cdn.discordapp.com/attachments/1160522295517925448/1185473044446203984/img009.jpg?ex=658fbcce&is=657d47ce&hm=60d46baef77cf4df0ace1522ba8c36a10ed7bb006ccc2067a730d1cbb5e48b5c&'></img>
                        <h3>ToBeIT'67 The Second (Onsite)</h3>
                    </div>
                    <div className="slide">
                        <img onClick={(e)=>ViewCertificate((e.target as HTMLImageElement).src)} alt='kmitl-masterclass' src='https://cdn.discordapp.com/attachments/1160522295517925448/1185686930256572556/image.png?ex=65908401&is=657e0f01&hm=98912adbe801da4735446b5d5bdca2a8aadc01c13236750b88085c6d4b9c7e49&'></img>
                        <h3>KMITL MASTERCLASS</h3>
                    </div>
                    <div className="slide">
                        <img onClick={(e)=>ViewCertificate((e.target as HTMLImageElement).src)} alt='js-hr' src='https://cdn.discordapp.com/attachments/1160522295517925448/1167513338931056640/js_hackerrank.png?ex=654e6687&is=653bf187&hm=6fce5ef923a8f131a66b17a07c54d0ef0ea8324cab1c2544bac958c613fb335b&'></img>
                        <h3>HackerRank</h3>
                    </div>
                    <div className="slide">
                        <img onClick={(e)=>ViewCertificate((e.target as HTMLImageElement).src)} alt='sql-hr' src='https://cdn.discordapp.com/attachments/1160522295517925448/1167513358157750362/sql_hackkerrank.png?ex=654e668b&is=653bf18b&hm=42cb49872f32db9f8536ac2a82fe191312fe4f2959a6a68e6cc02db34a00aa7c&'></img>
                        <h3>HackerRank</h3>
                    </div>
                    <div className="slide">
                        <img onClick={(e)=>ViewCertificate((e.target as HTMLImageElement).src)} alt='kmutt' src='https://cdn.discordapp.com/attachments/1160522295517925448/1172114424597848115/image.png?ex=655f239f&is=654cae9f&hm=db9461c6ef72ad2fa22e07c8feab6f6e373561dd7d43bc7d423e3e91c902a99d&'></img>
                        <h3>Open House CPE KMUTT</h3>
                    </div>
                    <div className="slide">
                        <img onClick={(e)=>ViewCertificate((e.target as HTMLImageElement).src)} alt='css-hr' src='https://cdn.discordapp.com/attachments/1160522295517925448/1167513304210604073/css_hackerrank.png?ex=654e667f&is=653bf17f&hm=6c4386ab4e4057d36a066dc574d101519ecfa9a123212fd094b2649ceb8c72bf&'></img>
                        <h3>HackerRank</h3>
                    </div>
                    <div className="slide">
                        <img onClick={(e)=>ViewCertificate((e.target as HTMLImageElement).src)} alt='kmitl' src='https://cdn.discordapp.com/attachments/1160522295517925448/1160522545813016656/image.png?ex=65476cd8&is=6534f7d8&hm=130a1172ecca81414c20f4e80f2f153000e5e8fea21d73430f5192488d56e982&'></img>
                        <h3>KMITL Open House</h3>
                    </div>
                </div>
            </div>
            <button onClick={()=>window.open('/project')}>View Projects</button>
        </div>
    )
}

export default Certificate
