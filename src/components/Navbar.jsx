import filmIcon from '../images/film_icon.svg';
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div>
        <div className="header__top">
            <img src={filmIcon} alt="film icon"/>
            <p>See no special offer restrictions</p>
        </div>
        <nav className="header__nav">
            <div className="container">
                <a href="" className="header__logo">
                    <img src={logo} alt="logo"/>
                    <span>cinemas</span>
                </a>
                <ul className="header__list">
                    <li className="header__item"><a href="" className="header__link">Films</a></li>
                    <li className="header__item"><a href="" className="header__link">Serials</a></li>
                    <li className="header__item"><a href="" className="header__link">Cartoons</a></li>
                    <li className="header__item"><a href="" className="header__link">Collections</a></li>
                </ul>
            </div>  
        </nav>
    </div>
  )
}

export default Navbar