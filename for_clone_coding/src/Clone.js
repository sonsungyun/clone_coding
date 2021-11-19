import AnotherPage from './fixedComponent';
import Header from './header';
import Title from './title';
import Content from './content';
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
        <Content/>
        <ImageSlide/>
        <Footer/>
        <EndBox/>
      </div>
    </div>
  );
}

export default Clone;
