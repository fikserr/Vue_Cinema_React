import google from '../images/google.svg';
import app from '../images/app.svg';

function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="container">
                    <div className="footer__media">
                        <a href="" className="footer__link"><img src={google} alt="google play"/></a>
                        <a href="" className="footer__link"><img src={app} alt="app store"/></a>
                    </div>
                <p className="footer__text">© PROWEB. В целях обучения 2021</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer