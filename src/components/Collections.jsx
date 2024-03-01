import collect from '../images/collect1.png';
import collectTwo from '../images/collect2.png'; 
import collectThree from '../images/collect3.png'; 
import rectangle from '../images/rectangle.png';
import svg from '../images/play.svg'
function Collections() {
  return (
    <div>
        
        <section className="collect">
            <div className="container">
                <h2 className="section__title">Collections</h2>
                <div className="collect__content">
                    <div className="collect__box">
                        <img src={collect} alt="collections" className="collect__bg"/>
                        <div className="collect__info">
                            <img src={rectangle} alt="rectangle" className="collect__rectangle"/>
                            <div className="collect__title">
                                <img src={svg} alt="play" className="collect__play"/>
                                <p>All Marvel Films</p>
                            </div>
                            <img src={rectangle} alt="rectangle" className="collect__rectangle"/>
                        </div>
                    </div>
                    <div className="collect__box">
                        <img src={collectTwo} alt="collections" className="collect__bg"/>
                        <div className="collect__info">
                            <img src={rectangle} alt="rectangle" className="collect__rectangle"/>
                            <div className="collect__title">
                                <img src={svg} alt="play" className="collect__play"/>
                                <p>Fast and the Furious</p>
                            </div>
                            <img src={rectangle} alt="rectangle" className="collect__rectangle"/>
                        </div>
                    </div>
                    <div className="collect__box">
                        <img src={collectThree} alt="collections" className="collect__bg"/>
                        <div className="collect__info">
                            <img src={rectangle} alt="rectangle" className="collect__rectangle"/>
                            <div className="collect__title">
                                <img src={svg} alt="play" className="collect__play"/>
                                <p>Star Wars</p>
                            </div>
                            <img src={rectangle} alt="rectangle" className="collect__rectangle"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Collections