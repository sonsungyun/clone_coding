import { useState } from 'react';
import './css/fixedComponent.css';
import './css/main.css';
import MainLogo from './svg/mainlogo.jsx';
import menuIcon from './svg/menuicon.svg';
import menuIconHover from './svg/menuiconHover.svg';
import channeltalkIcon from './svg/channeltalk.svg';
import channeltalkIconBody from './svg/channeltalkbody.svg';
import facebookIcon from './svg/facebook.svg';
import instagramIcon from './svg/instagram.svg';
import youtubeIcon from './svg/youtube.svg';
import brunchIcon from './svg/brunch.svg';
import facebookIconHover from './svg/facebookHover.svg';
import instagramIconHover from './svg/instagramHover.svg';
import youtubeIconHover from './svg/youtubeHover.svg';
import brunchIconHover from './svg/brunchHover.svg';
import closeIcon from './svg/closeIcon.svg';
import closeIconHover from './svg/closeIconHover.svg';



function FixedComponent(){
  const [overlayDisplay,setOverlayDisplay] = useState("unvisible");
  const [mainLogo,setMainLogo]= useState("normal");
  const [menuLogoType,setMenuLogoType]= useState("normal");
  const [pageType,setPageType]=useState("normal");
  
  function displayOtherPage(){
    if(pageType==="normal"){  
      setOverlayDisplay("visible");
      setMainLogo("another");
      setMenuLogoType("another");
      setPageType("another");
    }
    else if(pageType ==="another"){
      setOverlayDisplay("unvisible");
      setMainLogo("normal");
      setMenuLogoType("normal");
      setPageType("normal");
    } 
  }
  function AnotherPage(props){
    const bodyStyle = document.body.style;
    if(props.isVisible==="visible"){
      document.body.style = "overflow:hidden";
      }
    else{
      document.body.style = bodyStyle;
    }
    return(
      <div className={`another-page-${props.isVisible}`}>
          <div className="content-container">
          <a href="/"  className={`mainLogo-overlay-${props.isVisible}`} ><MainLogo state={props.mainLogo}/></a>
          <div className="text-area">
            <ul className="text-list">
              <li><a href="/" className="text-box"><span className="another-text">ABOUT US</span><span className="hover-text" >????????????</span></a></li>
              <li><a href="/" className="text-box"><span className="another-text">ONLINE SERVICE</span><span className="hover-text" >????????? ?????????</span></a></li>
              <li><a href="/" className="text-box"><span className="another-text">CLIENT</span><span className="hover-text" >???????????? ??????</span></a></li>
              <li><a href="/" className="text-box"><span className="another-text">BLOG</span><span className="hover-text" >?????????</span></a></li>
              <li><a href="/" className="text-box"><span className="another-text">CONTACT US</span><span className="hover-text" >??????</span></a></li>
              <li>
                  <ul className="icon-container">
                    
                    <li className="icon-box">
                      <img src={facebookIcon} className="icon"/>
                      <img src={facebookIconHover} className="icon-hover"/>
                    </li>
                    <li className="icon-box">
                      <img src={instagramIcon} className="icon-anothertype"/>
                      <img src={instagramIconHover} className="icon-anothertype-hover"/>
                    </li>
                    <li className="icon-box">
                      <img src={youtubeIcon} className="icon-anothertype"/>
                      <img src={youtubeIconHover} className="icon-anothertype-hover"/>
                    </li>
                    <li className="icon-box">
                      <img src={brunchIcon} className="icon"/>
                      <img src={brunchIconHover} className="icon-hover"/>
                    </li>
                    
                  </ul>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      )
  }
  function DisplayMenuIcon(props){
    if(props.type==="normal")
      return(
        <span>
          <img src={menuIcon} className="menuIcon"/>{/*????????? ?????? ????????????, ????????? ??????*/}
          <img src={menuIconHover} className="menuIconHover"/>{/*????????? ?????? ????????????, ????????? ??????*/}
        </span>
      )
    else if(props.type==="another")
      return(
        <span>
          <img src={closeIcon} className="closeIcon"/>{/*????????? ?????? ????????????, ????????? ??????*/}
          <img src={closeIconHover} className="closeIconHover"/>{/*????????? ?????? ????????????, ????????? ??????*/}
        </span>
      )
  }
  return(
    <>
  <AnotherPage isVisible={overlayDisplay} mainLogo={mainLogo}/>
  <div className="FixedComponent">
    <a href="/"  className={`mainLogo-normal-${(overlayDisplay === "unvisible" ? "visible" : "unvisible")}`} ><MainLogo state={mainLogo}/></a> {/*????????? ??????*/}
    <button className="menu-container" onClick={displayOtherPage}>
      <div className="menu-subcontainer">
        <DisplayMenuIcon type={menuLogoType} />
      </div>
    </button> 
    <span className="channeltalk-container">
      <div className="channeltalk-subcontainer">
        <img src={channeltalkIcon} className="channeltalk"/>
        <img src={channeltalkIconBody} className="channeltalk-body"/>
      </div>
    </span> {/*????????? ?????? ?????????*/}
  </div>
  </>
  );
}
export default FixedComponent;
