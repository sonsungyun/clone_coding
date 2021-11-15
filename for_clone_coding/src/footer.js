import './css/main.css';
import './css/footer.css';
import arrow from './svg/arrow.png';
import arrowHover from './svg/arrowHover.png';
import facebookIcon from './svg/facebook.svg';
import instagramIcon from './svg/instagram.svg';
import youtubeIcon from './svg/youtube.svg';
import brunchIcon from './svg/brunch.svg';
import linkIcon from './svg/linkIcon.svg';
import downArrow from './svg/downArrow.svg';


function Footer(){
  return(
    <div className="footer">
      <div className="container">
        <div className="footer-left">
          <a href="#" className="footer-title">
            <div className="sub-title">
              Contact Us 
              <img src={arrow} alt="" className="sub-image"/>
              <img src={arrowHover} alt="" className="sub-image-hover"/>
            </div>
          </a>
          <p className="text">고객의 시작부터 성장까지 모든 단계에 걸쳐<br/>
          세무, 회계, 재무, 투자 자문을 지원하고<br/>
          고객의 꿈을 이해하고 지지하는 전문 조직이 함께합니다.</p>
          <div className="left-item-container">
            <a href="#" className="left-item">
              <div className="inner-item">
                회사소개
                <img src={linkIcon} className="footer-left-icon"/>
              </div>
            </a>
            <a href="#" className="left-item">
              <div className="inner-item">
                채용공고
                <img src={linkIcon} className="footer-left-icon"/>
              </div>
            </a>
            <a href="#" className="left-item"> 
              <div className="inner-item">
                Family site
                <img src={downArrow} className="footer-left-icon-arrow"/>
              </div>
            </a>
          </div>
        </div>
        <div className="footer-center"/>
        <div className="footer-right">
          <div>
            <p className="footer-text">Follow Us</p>
            <ul className="icon-container">
              <li className="icon-box"><a href="#"><img src={facebookIcon} className="icon"/></a></li>
              <li className="icon-box"><a href="#"><img src={instagramIcon} className="icon-anothertype"/></a></li>
              <li className="icon-box"><a href="#"><img src={youtubeIcon} className="icon-anothertype"/></a></li>
              <li className="icon-box"><a href="#"><img src={brunchIcon} className="icon"/></a></li>
              <div className="icon-right-div"/>
            </ul>
            <div className="right-item-container">
            <a href="#" className="right-item">
              <div className="inner-item">
                회사소개
                <img src={linkIcon} className="footer-right-icon"/>
              </div>
            </a>
            <a href="#" className="right-item">
              <div className="inner-item">
                채용공고
                <img src={linkIcon} className="footer-right-icon"/>
              </div>
            </a>
            <a href="#" className="right-item"> 
              <div className="inner-item">
                Family site
                <img src={downArrow} className="footer-right-icon-arrow"/>
              </div>
            </a>
          </div>
            <p className="footer-text-address">Office</p>
            <p className="footer-text-inner-text">서울특별시 종로구 종로 51, 33층 (종로2가, 종로타워)<br/>
            대표: 김용현 사업자등록번호: 111-08-52482 개인정보관리책임자: 김용현<br/>
            Tel: 02-2088-6844 E-mail: roy@creativepartners.co.kr</p>
            <a href="/new" className="privacy">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;
