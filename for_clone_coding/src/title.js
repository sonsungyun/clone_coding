import './css/main.css';
import './css/title.css';

function Title(){
  return(
    <div className="secondElement">
      < div className="container">
        <div className="secondCon">
          <div className="slogan">YOU <span className="boldText">CREATE,</span><div className="media-query-div-display"/> WE <span className="boldText">SUPPORT!</span></div>
            <p className="firstP">크리에이티브 파트너스는 <br/>
            더 큰 꿈을 향해 나아가는 크리에이터와 스타트업의 성공을 위해 <div className="media-query-div-hidden"/>
            세무 회계 서비스를 넘어 재무, 정부지원금, 자금 조달 등 원스톱 경영 컨설팅 서비스를 제공합니다.</p>
            <p className="secondP">축적된 노하우를 바탕으로 회계 세무서비스 시장을 선도하고 있으며,<div className="media-query-div-hidden"/>
            궁극적으로 고객사가 위대한 기업이 되어 좋은 세상을 만드는 데에 함께 기여하고자 합니다.</p>
          <div className="slogan-container">
            <div className="sloganContainer">
              <div className="slogan-title n1">VISION</div>
              <div className="sloganVision">
                우리와 연결된 모든 파트너와 함께 더 나은 세상을 만들어 나갑니다.<br/>
                세상을 바꿔나가는 혁신가들이 불필요한 시행착오없이 성장할 수 있는 환경을 제공합니다.
              </div>
            </div>
            <div className="sloganContainer">
              <div className="slogan-title">MISSION</div>
              <div className="sloganMission">
                100명의 평범한 구매자보다<br/>
                1명의 극성팬을 만들어 나간다.
              </div>
              <div className="sloganMission">
                조금 더 낫다라는 평가보다는<br/>
                가장 탁월하다는 평가를 받는다.
              </div>
              <div className="sloganMission">
                고객의 질문에 사후대응이 아닌<br/>
                사전에 질문이 나오지 않도록 한다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
