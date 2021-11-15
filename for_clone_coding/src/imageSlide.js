import './css/main.css';
import './css/imageSlide.css';
import leftArrow from './svg/leftArrow.svg';
import rightArrow from './svg/rightArrow.svg';
import lineImage from './svg/line.png';
import cat from './svg/cat.svg';

function ImageSlide(){
  return(
    <div className="four">
      <div className="container">
        <div className="title">CREATIVE PARTNERS TEAM</div>
        <p className="text">고객을 진심으로 이해하는 최고의 전문가가 함께 합니다.<br/>
          업종별 전문 회계사와 세무사가 고객의 성공을 위한 사업 파트너가 되어드립니다.</p>
        <img src={cat} className="imgSlide"/>
        
        <div className="slide-controler">
          <img src={leftArrow} className="icon-arrow"/>
          <img src={rightArrow} className="icon-arrow2"/>
        </div>
        <div className="slide-step">
          <img src={lineImage} className="line-image"/>
        </div>
      </div>
    </div>
  )
}
export default ImageSlide;