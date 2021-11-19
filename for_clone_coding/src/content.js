import './css/main.css';
import './css/context.css';
import ContentSVG from './svg/contentSVG.jsx';


function Content(){
  return(
  <div className="third">
    <div className="container">
      <div className="title">WHAT WE DO</div>
      <div className="subTitle">견고히 쌓아올린 노하우를 바탕으로,</div>
      <p className="text">크리에이티브 파트너스는 고객의 꿈이 이루어질 수 있도록 압도적인 노하우로 고객과 함께합니다.<br/>
      우리와 연결된 모든 파트너와 함께 더 나은 세상을 만들어나가고자 합니다.</p>
      <div className="itemContainer">
        <div className="tr-item-con">
          <div className="tr-item">
            <ContentSVG type="accounting" className="contentSVG"/>
            <div className="text-container">
              <p>더 큰 성장을 위한 준비</p>
              <div className="item-title">회계감사</div>
              <ul>
                <li>- 스타트업 임의 감사</li>
                <li>- 중소기업 법정감사</li>
                <li>- 정부지원금 회계감사</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tr-item-con">
          <div className="tr-item">
          <ContentSVG type="finance" className="contentSVG"/>
            <div className="text-container">
              <p>성공을 위한 재무 전략</p>
              <div className="item-title">재무자문</div>
              <ul>
                <li>- 투자 전 재무 실사(FDD)</li>
                <li>- 수익 극대화를 위한 자금 운용 자문</li>
                <li>- 지배구조 자문</li>
                <li>- 스톡옵션 자문</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tr-item-con">
          <div className="tr-item">
          <ContentSVG type="funds" className="contentSVG"/>
            <div className="text-container">
              <p>지속가능한 성장 자문</p>
              <div className="item-title">자금조달 전략수립</div>
              <ul>
                <li>- 엔젤 투자 유치 자문</li>
                <li>- 정책 자금 대출 자문</li>
                <li>- 정부지원금 지원 업무</li>
              </ul>
              </div>
            </div>
          </div>
          <div className="tr-item-con">
        <div className="tr-item">
        <ContentSVG type="affairs" className="contentSVG"/>
        <div className="text-container">
          <p>집중을 위한 더 특별한 관리</p>
          <div className="item-title">세무관리</div>
          <ul>
            <li>- VIP 개인 세무 관리</li>
            <li>- 법인세 등 세무신고 대행</li>
            <li>- TAX STRUCTURING</li>
            <li>- 세무리스크 진단</li>
            <li>- 세무조사 대응</li>
          </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Content;
