import './css/main.css';
import './css/endBox.css';
import upArrow from './svg/upArrow.svg';


function EndBox(){
  function scrollTop(){
    window.scrollTo({top: 0});
  }
  return(
    <div className="endBox">
      <div className="container">
        <div className="left-container">
        COPYRIGHT 2021. CREATIVE PARTNERS. ALL RIGHTS Reserved
        </div>
        <a href="#" onClick={scrollTop}>
        <span className="homeButton">
          TOP
          <img src={upArrow} className="upper-arrow"/>
        </span>  
        </a>
      </div>
    </div>
  )
}

export default EndBox;
