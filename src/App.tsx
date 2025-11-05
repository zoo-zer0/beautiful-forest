import './App.css'
//import DonutChart from './components/Donut.tsx';
import InteractiveStadium from './components/StadiumInteractive/InteractiveStadium.tsx';
//import BarChart from './assets/BarChart.tsx';
import ScrollytellingStadium from './components/StadiumInteractive/ScrollytellingStadium.tsx';
//import ScrollytellingStadium2 from './components/StadiumInteractive/ScrollytellingStadium2.tsx';
import TimeScrollytelling from './components/TimeScrolly/TimeScrolly.tsx';
import Kakao from './components/Kakao.tsx';
import SusScrolly from './components/TimeSus/Sus.Scrolly.tsx';
import Intro from './components/Intro.tsx';
import Footer from './components/Footer.tsx';
import Toggle from './assets/Toggle.tsx';
import QuoteBox from './assets/QuoteBox.tsx';
import Narrative from './assets/Narrative.tsx';
import TicketStack from './components/TicketStack.tsx';
import Hero from './components/Hero.tsx';
import { ToggleClean } from './components/Top10Toggles.tsx';
import Top10Toggles from './components/Top10Toggles.tsx';
import Conclusion from './components/Conclusion.tsx';




function App() {
  

  return (
    <div>
      <Kakao />
      <Intro />
      <TicketStack />
      <Hero />
      <Narrative content={
        <p>당신이 구하려던 티켓, 누군가 재판매 사이트에서 웃돈을 얹어 팔고 있습니다. 
<br></br>이제는 <strong>‘암표’</strong>만이 경기를 볼 수 있는 유일한 통로가 됐습니다.</p>
      } />
      <QuoteBox source="국립국어원 표준국어대사전 ‘암표’ 정의, 공연법 제4조의 2 참고"
        quote={
          <div>
            <strong>암표: </strong>공식적인 판매자가 아닌 자가 자신이 구입한 가격을 초과한 금액으로 다른 사람들에게 되판 입장권.  
          </div>
        }
      color="rgb(43, 63, 107)"/>
      <Narrative content={
        <div>
          <p>한때 ‘가볍게 즐기는 국민 스포츠’였던 야구의 즐거움은 어느새 치열한 예매 전쟁과 가격의 장벽에 가로막혔습니다. 수십만 명이 예매 대기열에 몰리는 사이, 온라인에는 수천 건의 암표가 올라옵니다.</p>

<p>암표는 이제 개인 간의 거래로만 볼 수 없는, 거대한 하나의 시장이 됐습니다. 그러나 우리는 여전히 그 실체를 명확히 알지 못한 채, 단지 ‘잘못된 일’로만 여기고 있습니다. </p>

<p>뷰티풀숲팀은 온라인 티켓 리셀 플랫폼 ‘티켓베이(Ticketbay)’에 게시된 수만 건의 매물을 분석했습니다. 그 안에서 암표 거래의 규모와 암표 업자로 추정되는 흔적을 찾아, <strong>암표 시장의 실태</strong>를 들여다봤습니다.</p>
        </div>
      } />
      <Toggle summary="분석 및 추적 방법 더 읽어보기"
        content={
          <div>
            <p>‘티켓베이(Ticketbay)’는 2025년 기준 <em>문화체육관광부의 프로스포츠 온라인 암표 신고 게시판에 가장 많은 신고가 접수된 플랫폼</em>입니다. (전체 28149건 중 21990건, 출처 : 민형배 의원실)</p>

<p><strong>분석 절차 및 방법</strong><br></br>

2025년 7월 25일 ~ 2025년 10월 31일에 걸쳐 티켓베이에 게시된 프로야구 및 콘서트 매물을 크롤링하여 분석했습니다.</p>

<p>데이터 수집의 일관성을 위해 고정된 수집 주기를 정했습니다. 야구 경기는 매일 오후 11시에서 자정 사이, 선예매·일반 예매 시작 30분 후, 그리고 경기 시작 1시간 전에 데이터를 모았습니다. 공연의 경우, 하루 전날과 공연 시작 1시간 전에 수집했습니다.</p>
          </div>
        }
      />
      <Narrative content={
        <div>
          <br></br>
          <h1>숫자로 보는 야구 암표 실태</h1>
      <div style={{justifyContent:"space-between",width: "100%",display:"flex", margin: "auto"}}>
        <object style={{width:"45%"}} data="/img/data/현황 1.svg" type="image/svg+xml"></object>
        <object style={{width:"45%"}} data="/img/data/현황 2.svg" type="image/svg+xml"></object>

      </div>
<p>올 여름 한 달간(07.25 ~ 08.14 기준) 티켓베이에 등록된 정규시즌 프로야구 티켓은 3연전(3경기 묶음) 기준 평균 2234건이었습니다. </p>

<p>판매 가격은 원가보다 평균 1.8배 높았습니다.</p>

<p>포스트시즌 티켓의 평균 재판매 가격은 원가의 약 3.4배로, 정규시즌의 2배 수준으로 형성됐습니다.</p>

<p>‘가을 야구’의 열기가 티켓 가격마저 끌어올린 셈입니다.</p>
        </div>
      } />
      <br></br>
      <ScrollytellingStadium /> 
      <br></br>     
      <h2>인터랙티브 구장</h2>
      <p>경기별 구장을 직접 클릭하여 티켓별 가격 분포를 살펴보세요!</p>
      <div style={{transform:"scale(1)",display: "flex", flexDirection: "column", alignItems: "center"}}><InteractiveStadium /></div>
      <Narrative content={
        <div>
          <br></br>
          <h2>암표가 만든 또 다른 장벽</h2>
            <img src='/img/휠체어석.png' style={{width:"100%"}}></img>
            <p>휠체어석이 매물로 올라오는 일도 있었습니다.</p>

            <p>포스트시즌 기간 동안 등록된 휠체어석 재판매 티켓은 총 27건으로, 원가의 약 1.9배(192%)에 팔리고 있었습니다.</p>

            <p>대부분 휠체어석과 그 주변 일반석을 묶어 파는 형태였습니다.</p>

            <p>상업적 목적의 티켓 리셀로 인해, 어떤 이들은 경기를 볼 수 있는 유일한 기회마저 빼앗기고 있는 것입니다.</p>
        </div>
      } />
      <Narrative content={
        <div>
          <br></br>
          <h1>암표 업자의 실체를 추적하다</h1>
          <p>정규 시즌 판매 데이터를 아이디별로 추적한 결과, 암표 시장은 특정 판매자들이 대량의 티켓을 반복적으로 등록하며 주도하는 구조로 형성돼 있었습니다.</p>
          <p>일부 계정은 수백 장의 티켓을 상시 등록해, 사실상 <strong>상업적 규모의 거래</strong>를 이어가고 있었습니다.</p>
          <object style={{width:"100%"}} data="/img/data/야구 top 통장표 찐.svg" type="image/svg+xml"></object>
          <p>티켓 수익과 수량을 기준으로 상위 5명을 분석한 결과, 최소 총액마저도 약 천만원으로 추정됐습니다. </p>

          <p>이 가운데 수익과 수량 모두 상위권을 차지한 <strong>A씨(ID: 588064)</strong>는 조사 기간 동안 한화- LG의 3연전을 비롯한 여러 경기의 티켓을 활발히 판매했습니다. A씨가 재판매한 티켓은 <strong>총 425장으로 5084만6800원</strong>에 달했습니다.</p>
          <object style={{width:"100%"}} data="/img/data/야구 top 통장표 b c씨 강조.svg" type="image/svg+xml"></object>
          <p>정규 시즌 판매 수익·수량 TOP 5에 포함된 <strong>B씨(ID: 2208431)와 C씨(ID: 2681179)</strong>는 포스트시즌에서도 티켓을 판매한 것으로 확인됐습니다.</p>

          <p>티켓베이에 게시된 포스트시즌 매물의 상세정보를 분석한 결과, 두 사람이 정규 시즌에서 반복적으로 사용한 이모티콘, 문장, 게시 형식이 그대로 포함된 매물이 다수 발견됐습니다.</p>

          <p>정규 시즌에 이어 포스트시즌에서도 대규모 암표 거래를 지속한 정황이 드러난 것입니다.</p>
        </div>
      } />
<ToggleClean summary={"B씨(ID: 2208431) | 수량: 182개 | 총액: 71,671,800원 |  경기: 와일드카드, 준플레이오프, 플레이오프, 한국시리즈 | 토글을 열면 상세정보란 확인 가능!"} content={
   <div>
    
    <p>⭕QnA에 성함과 전화번호 꼭 남겨주세요</p>
    
    <br></br>
    
    <p>⭕스마트티켓 전송
    <br></br>❌바코드</p>
    
    <br></br>
    
    <p>❎제가 일때문에 경기전날 자정전이나 경기당일 낮에 한꺼번에 표를 보내드립니다
    <br></br>❎바로 받고싶으신분들은 구매하지마세요
    <br></br>❎우천시 자동 환불됩니다
    <br></br>❎구매시 취소 안됩니다 재판매 하셔야합니다
    <br></br>❎예시)한명이 못가게됐는데 취소해주세요, 날짜를 잘못봤어요
    <br></br>❎정확한 좌석 못알려드립니다 다른분들도 다 마찬가지에요
    <br></br>❎전화X 문의는 문자로 [Q&A에 적은 성함적어주시면 빠른답변가능]</p>
    
    <p>* 정규시즌과 포스트시즌에서 동일 문구 사용</p>
    
    	</div>
    }/>
<ToggleClean summary={"C씨(ID: 2681179) | 수량: 69개 | 총액: 47,259,200원 | 경기: 와일드카드, 준플레이오프, 플레이오프, 한국시리즈 | 토글을 열면 상세정보란 확인 가능!"} content={
   <div>
    
    <p>플레이오프 3차전<br></br>
    ▩ 경기팀 : 삼성라이온즈 vs 한화이글스<br></br>
    ▩ 경기장소 : 대구삼성라이온즈파크<br></br>
    ▩ 좌석위치 : 1루 스카이상단지정석 U9블럭 17열 통로 4연석</p>
    
    <p>☛☛☛☛☛☛ 참고사항<br></br>
    ➊ 해당 티켓은 모바일티켓으로 예매되었습니다<br></br>
    ➋ 구매하시면 모바일티켓 등록가능한 핀번호를 보내드립니다.<br></br>
    처음이신분도 쉽게 등록하실수있게 자세한 설명해드립니다<br></br>
    ➌ 결제 이후에는 티켓베이정책상 취소가 불가하오니 신중한 고민 이후 구매
    부탁드립니다.<br></br>
    우천취소는 없습니다 우천순연으로 다음날 경기 관람하시면됩니다<br></br>
    ➍ 구매해주셔서 감사합니다</p>
    
    ---
    
    <em>*정규시즌 멘트</em>
    
    <p>▩ 무인 발권기에서 지류 티켓 출력 가능한 바코드를 경기 시작 2시간전까지 pin번호함에 보내드립니다.
    (정확한 좌석정보는 안내드리지 못하니 참고바랍니다.)</p>
    
    <p>☛☛☛☛☛☛ 참고사항<br></br>
    ➊ 해당 티켓은 티켓링크 현장발권티켓 예매되었습니다<br></br>
    ➋ 구매하시면 티켓베이 핀번호함으로 발권정보 보내드립니다<br></br>
    ➌ 결제 이후에는 티켓베이정책상 취소가 불가하오니 신중한 고민 이후 구매부탁드립니다.<br></br>
    ➍ 우천취소시 티켓베이에서 자동환불됩니다<br></br>
    구매해주셔서 감사합니다.</p>   
  </div>
}/>
      <Narrative content={<div>
        <p>B씨는 와일드카드부터 준플레이오프, 플레이오프, 한국시리즈까지 포스트시즌 전 경기에 걸쳐 암표를 등록했습니다. 총 수량은 182장으로, 거래 금액은 7167만1800원에 달했습니다.</p>
        <p>C씨 역시 전 경기에서 4725만9,200원 상당의 티켓 69장을 등록했습니다.</p>
        <p>특히 C씨는 야구 티켓뿐 아니라 아이돌 콘서트 티켓도 거래하며, 추가로 408만7,000원을 벌여들였습니다.</p>        
      </div>}/>
<ToggleClean summary={"C씨(ID: 2681179) | 수량: 3개 | 총액: 4,087,000원 | 공연: 스트레이키즈, 아이브, NCT WISH | 토글을 열면 상세정보란 확인 가능!"} content={
   <div>
    
    <p>WISH 팬분들 반갑습니다~ 오랜만에 하는 NCT WISH~  완전체 :) 오늘 막콘도 호응이 너무 좋을것으로 기대합니다!<br></br>
    "예매수수료 + 제반수수료 비용 포함하여 원가양도합니다!!!"<br></br>
    
    ▩ 경기일시 : 2025년 11월 2일(일요일) 16시00분<br></br>
    ▩ 경기팀 : NCT WISH 콘서트 막공<br></br>
    ▩ 경기장소 : 인천 인스파이어<br></br>
    ▩ 좌석위치 : 1층 정면구역 시제석 아닌 일반석 GLOBAL OKAY<br></br>
    
    ▩ 지류티켓 (본인확인이 끝난 티켓으로, 지류만으로 입장가능합니다!)<br></br>
    "표의 위치는 인스파이어에서 전달할 수 있도록 노력하겠습니다!<br></br>
    
    ☛☛☛☛☛☛ 참고사항<br></br>
    ➊ 해당 티켓은 모바일 예매되었습니다<br></br>
    ➋ 구입후 QNA에 성함과 연락처를 남겨주세요. 확인후에 답변 드립니다!<br></br>
    자세한 설명과 함께 핀번호로 보내드립니다 처음등록하시는분들도 이해쉽게 설명해드립니다<br></br>
    ➌ 결제 이후에는 티켓베이 정책상 취소가 불가하오니 신중한 고민 이후 구매
    부탁드립니다.<br></br>
    ➍ 구매해주셔서 감사합니다..  NCT WISH 공연 잘 즐기고 오세요!!<br></br></p>
    
    ---
    
    <p>아이브 팬분들 반갑습니다~ 오랜만에 하는 아이브 완전체 :) GLOBAL OKAY<br></br>
    
    ▩ 공연일시 : 2025년 11월 1일(토요일) 18시30분<br></br>
    ▩ 공연팀 : IVE 아이브 월드투어 서울 중간콘서트 FINAL<br></br>
    ▩ 경기장소 : 올림픽공원 KSPO DOME<br></br>
    ▩ 좌석위치 : 돌출무대 정면시야 유일 연석 앞쪽 자리, 어머니와 따님, 아빠와 따님 등 함께 볼 수 있습니다!<br></br>
    
    ▩ 카드형 지류 티켓 (현장 전달!! , 카드를 태깅하고 입장합니다!)<br></br>
    
    ☛☛☛☛☛☛ 참고사항<br></br>
    ➊ 해당 티켓은 MELON 티켓 예매되었습니다<br></br>
    ➋ 구입후 QNA에 성함과 연락처를 남겨주세요. 확인후에 답변 드립니다!<br></br>
    자세한 설명과 함께 처음 구매하시는 분도 이해하실 수 있게 도움드립니다!<br></br>
    ➌ 결제 이후에는 티켓베이 정책상 취소가 불가하오니 신중한 고민 이후 구매
    부탁드립니다.<br></br>
    ➍ 구매해주셔서 감사합니다.. 아이브분들 함께 공연 즐겨요 :)<br></br>
    
    GLOBAL OKAY</p>
    
    ---
    
    <p>STAY 스트레이 키즈분들 반갑습니다~ 오랜만에 하는 SKZ STRAY KIDS 완전체 :) GLOBAL OKAY<br></br>
    
    ▩ 공연일시 : 2025년 10월 19일(일요일) 18시00분<br></br>
    ▩ 공연팀 : SKZ 스트레이키즈 완전체 콘서트 앵콜 막콘<br></br>
    ▩ 경기장소 : 인천 아시아드 주경기장<br></br>
    ▩ 좌석위치 : 돌출무대 정면시야 맨 앞쪽 자리(펠릭스, 현진 모공까지 보이는 존 눈웃음 존)<br></br>
    
    ▩ 카드형 지류 티켓 (재배송(한국주소)!! 또는 합의하에 서울 퀵 등 전달 안전입장 OK)<br></br>
    
    ☛☛☛☛☛☛ 참고사항<br></br>
    ➊ 해당 티켓은 예스24 티켓 예매되었습니다<br></br>
    ➋ 구입후 QNA에 성함과 연락처를 남겨주세요. 확인후에 답변 드립니다!<br></br>
    자세한 설명과 함께 처음 구매하시는 분도 이해하실 수 있게 도움드립니다!<br></br>
    ➌ 결제 이후에는 티켓베이 정책상 취소가 불가하오니 신중한 고민 이후 구매
    부탁드립니다.<br></br>
    ➍ 구매해주셔서 감사합니다.. STAY 스테이분들 함께 공연 즐겨요 :)<br></br>
    
    GLOBAL OKAY</p>
    </div>
    }/>
    <Narrative content={<div>
        <p>B씨와 C씨 외에도, 상세정보란에 유사한 문구를 반복적으로 게시한 판매자들이 다수 확인됐습니다.</p>
    </div>} />
    <Top10Toggles />
    <Narrative content={<div>
      <p>1인당 1,000만 원어치 이상의 티켓을 등록한 판매자 10명의 게시 내역을 정리했습니다.</p>
      <p>이들 모두 여러 경기를 대상으로 대량의 티켓을 유통했습니다. 그중 가장 많은 티켓을 올린 <strong>D씨는 총 280장</strong>을 등록했으며, 거래 금액은 <strong>약 2억 원</strong>에 달했습니다. </p>
</div>}/>
<ToggleClean summary={"11) 수량: 16개 | 총액: 8,412,000원 | 경기: 와일드카드, 준플레이오프, 플레이오프, 한국시리즈 | 토글을 열면 상세정보란 확인 가능!"} content={
<div>
    
    
    <p>거래건수 6000회 이상의 VVIP등급의 판매자의 글입니다.
    <br></br>티켓양도 안전하게 진행되오니 많은 이용부탁드립니다.</p>
    
    <br></br>
    
    <p>■ 참고사항<br></br>
    
    - 모바일티켓으로, 선물하기로 진행됩니다<br></br>
    
    <br></br>
    
    - 공연이 끝난후에 반드시 구매 확정 부탁드립니다.<br></br>
    
    <br></br>
    
    - 공연 취소 시 베이에서 자동으로 전액 환불됩니다. 연기는 환불X 시간맞추셔서 가야합니다.<br></br></p>
    
    	</div>
    }/>
<Narrative content={<div>
      <p>자신을 <strong>‘거래건수 6000회 이상의 VVIP 등급 판매자’</strong>로 칭하며, 티켓 재판매 활동을 경력처럼 내세운 판매자도 있었습니다.</p>
      <br></br>
      <p>매물 세부정보나 중복 게시뿐 아니라, <strong>티켓이 업로드된 시점</strong>에서도 특이점이 발견됐습니다.</p>
    </div>}/>

      <TimeScrollytelling />
      <SusScrolly />
      <Conclusion />
      <Footer />
    </div>
  );
}


export default App
