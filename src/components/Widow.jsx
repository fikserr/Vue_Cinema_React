import widow from '../videos/video.mp4';
import widowLogo from '../images/widow.png';
function Widow() {
  return (
    <div>
          <section className="widow">
            <video src={widow }  className="widow__bg" autoPlay muted></video>
            <div className="widow__content">
                <div className="container">
                    <img src={widowLogo} alt="" className="widow__image"/>
                    <p className="widow__text">After the events at the Leipzig-Halle airport, Natasha was overtaken by the mistakes of the past. The Red Room again made itself felt - a program to create Widows - professional killers and spies - just like her. Natasha decides once and for all to deal with people whose efforts she herself became a Widow.</p>
                    <button className="watch__btn">Watch Now</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Widow