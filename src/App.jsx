import './styles/style.css';
import './styles/fonts.css';
import './styles/media.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Films from './components/Films';
import Widow from './components/Widow';
import Collections from './components/Collections';
import Series from './components/Series';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Navbar/>
      <Intro/>
      <Films/>
      <Widow/>
      <Collections/>
      <Series/>
      <Footer/>
    </>
  )
}

export default App
