import series from '../images/series1.png';
import seriesTwo from '../images/series2.png';
import seriesThree from '../images/series3.png';
import seriesFour from '../images/series4.png';
import seriesFive from '../images/series5.png';
import seriesix from '../images/series6.png';
import svg from '../images/play.svg'
function Series() {
  return (
    <div>
         <section className="series">
            <div className="container">
                <h2 className="section__title">series</h2>
                <div className="series__content">
                    <div className="series__box">
                        <img src={series} alt="series" className="series__bg"/>
                        <div className="series__info">
                            <h3 className="series__title">Game of Thrones</h3>
                            <p className="series__text">The time of prosperity is drawing to a close, and the summer, which lasted almost a decade, is dying away. Around the center of power of the Seven Kingdoms, the Iron Throne, a conspiracy is ripening, and during this difficult time, the king decides to seek support from his youth friend Eddard Stark. In a world where everyone - from the king to the mercenary - is eager for power, intrigues and is ready to stick a knife in the back, there is ...</p>
                            <button className="watch__btn">Watch Now</button>
                        </div>
                    </div>
                    <div className="series__box">
                        <img src={seriesTwo} alt="series" className="series__bg"/>
                        <div className="series__info">
                            <img src={svg} alt="play" className="series__play"/>
                            <h4 className="series__box-title">Wanda Vision</h4>
                        </div>
                    </div>
                    <div className="series__box">
                        <img src={seriesThree} alt="series" className="series__bg"/>
                        <div className="series__info">
                            <img src={svg} alt="play" className="series__play"/>
                            <h4 className="series__box-title">The Flash</h4>
                        </div>
                    </div>
                    <div className="series__box">
                        <img src={seriesFour} alt="series" className="series__bg"/>
                        <div className="series__info">
                            <img src={svg} alt="play" className="series__play"/>
                            <h4 className="series__box-title">The Great</h4>
                        </div>
                    </div>
                    <div className="series__box">
                        <img src={seriesFive} alt="series" className="series__bg"/>
                        <div className="series__info">
                            <img src={svg} alt="play" className="series__play"/>
                            <h4 className="series__box-title">GOTHAM</h4>
                        </div>
                    </div>
                    <div className="series__box">
                        <img src={seriesix} alt="series" className="series__bg"/>
                        <div className="series__info">
                            <img src={svg} alt="play" className="series__play"/>
                            <h4 className="series__box-title">The witcher</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Series