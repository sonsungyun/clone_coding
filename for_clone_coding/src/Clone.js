import AnotherPage from './fixedComponent';
import Header from './header';
import Title from './title';
import Context from './context';
import ImageSlide from './imageSlide';
import Footer from './footer';
import EndBox from './endBox';
import './css/main.css';

function Clone() {
  return (
    <div >
      <AnotherPage/>
      <Header/>
      <div className="absolute-container">
        <Title/>
        <Context/>
        <ImageSlide/>
        <Footer/>
        <EndBox/>
      </div>
    </div>
  );
}

export default Clone;
