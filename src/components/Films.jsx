import film1 from '../images/film1.png';
import filmTwo from '../images/film2.png';
import filmThree from '../images/film3.png';
import filmFour from '../images/film4.png';
import svg from '../images/play.svg';



const data = [
    {
        id: 1,
        image: film1,
        svg: svg,
        hours: "2:14:33",
        title: "Black Panther",
        txt: `At first glance, you can decide that Wakanda is an ordinary territory of wild Africa, but this is not so. Here, in the bowels of the desert lands, there are hidden deposits of a unique metal capable of absorbing...`

    },
    {
        id: 2,
        image: filmTwo,
        svg: svg,
        hours: "2:32:13",
        title: "The Dark Knight",
        txt: `Batman raises stakes in the war on crime. With the help of Lieutenant Jim Gordon and Attorney Harvey Dent, he intends to clear the streets of crime that is poisoning the city. The cooperation is effective, but soon they...`

    },
    {
        id: 3,
        image: filmThree,
        svg: svg,
        hours: "1:53:45",
        title: "The Gentlemen",
        txt: `One cunning American, from his student years, had been selling drugs, and now he came up with a scheme of illegal enrichment using the estates of an impoverished English aristocracy and made a very good fortune on ...`

    },
    {
        id: 4,
        image: filmFour,
        svg: svg,
        hours: "2:58:20",
        title: "The Lord of the..",
        txt: `Tales of Middle-earth is a chronicle of the Great War for the Ring, a war that lasted more than one thousand years. The one who owned the Ring received power over all living creatures, but was obliged to serve evil...`

    },
]

function Films() {
  return (
    <div>
        <section className="films">
            <div className="container">
                <h2 className="section__title">films</h2>
                <div className="films__content">
                    {
                    data.map((item)=>{
                        return <div className="films__box" key={item.id}>
                        <img src={item.image} alt="Black Panther" className="films__bg"/>
                        <div className="films__info">
                            <img src={item.svg} alt="play" className="films__icon"/>
                            <div className="films__time">{item.hours}</div>
                            <p className="films__title">{item.title}</p>
                            <p className="films__text">{item.txt}</p>
                        </div>
                    </div>
                    })
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default Films