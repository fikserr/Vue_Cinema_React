import introBg from '../images/intro_bg.png'

function Intro() {
  return (
    <div>
        <section className="intro">
            <img src={introBg} alt="intro" className="intro__bg"/>
            <div className="intro-content">
                <div className="container">
                    <h1 className="intro__title">Kong: Skull Island</h1>
                    <p className="intro__text">The film takes the viewer to the 70s of the last century. The protagonist organizes an expedition to the Skull island, always covered in fog, on which King Kong was once caught to find the missing brother and some mysterious substance. During...</p>
                    <div className="intro__button">
                        <button className="watch__btn">Watch Now</button>
                        <button className="intro__load">Download</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Intro