import './App.css'
import DonutChart from './components/Donut.tsx';
import InteractiveStadium from './components/StadiumInteractive/InteractiveStadium.tsx';
import BarChart from './assets/BarChart.tsx';
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
import Top10Toggles from './components/Top10Toggles.tsx';
const sampleData = [
  {
    name: "2020",
    value: 1607,
    breakdown: {
      KBO: "1527건",
      "K리그": "22건",
      KBL: "0건",
      WKBL: "0건",
      KOVO: "58건",
      기타: "0건",
    },
  },
  {
    name: "2021",
    value: 1423,
    breakdown: {
      KBO: "1075건",
      "K리그": "52건",
      KBL: "63건",
      WKBL: "0건",
      KOVO: "233건",
      기타: "0건",
    },
  },
  {
    name: "2022",
    value: 7829,
    breakdown: {
      KBO: "7685건",
      "K리그": "0건",
      KBL: "37건",
      WKBL: "0건",
      KOVO: "107건",
      기타: "0건",
    },
  },
  {
    name: "2023",
    value: 14728,
    breakdown: {
      KBO: "14185건",
      "K리그": "308건",
      KBL: "109건",
      WKBL: "2건",
      KOVO: "124건",
      기타: "0건",
    },
  },
  {
    name: "2024",
    value: 21442,
    breakdown: {
      KBO: "20807건",
      "K리그": "499건",
      KBL: "115건",
      WKBL: "0건",
      KOVO: "21건",
      기타: "0건",
    },
  },
  {
    name: "2025",
    value: 28149,
    breakdown: {
      KBO: "27589건",
      "K리그": "297건",
      KBL: "172건",
      WKBL: "0건",
      KOVO: "57건",
      기타: "34건",
    },
  },
];



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
      <ScrollytellingStadium />      
      <h2>인터랙티브 구장</h2>
      <p>경기별 구장을 직접 클릭하여 티켓별 가격 분포를 살펴보세요!</p>
      <div style={{transform:"scale(1)",display: "flex", flexDirection: "column", alignItems: "center"}}><InteractiveStadium /></div>
      <Narrative content={
        <div>
          <h1>암표로 인한 문화접근권 제한 - 휠체어석</h1>
            <img src='/img/휠체어석.png' style={{width:"100%"}}></img>
            <p>휠체어석이 매물로 올라오는 일도 있었습니다.</p>

            <p>포스트시즌 기간 동안 등록된 휠체어석 재판매 티켓은 총 27건으로, 원가의 약 1.9배(192%)에 팔리고 있었습니다.</p>

            <p>대부분 휠체어석과 그 주변 일반석을 묶어 파는 형태였습니다.</p>

            <p>상업적 목적의 티켓 리셀로 인해, 어떤 이들은 경기를 볼 수 있는 유일한 기회마저 빼앗기고 있는 것입니다.</p>
        </div>
      } />
      <TimeScrollytelling />
      <SusScrolly />
      <Top10Toggles />

      <h1>그래프 테스트</h1>
      <div style={{width: "90%",
            maxWidth: "800px",display:"flex", margin: "auto"}}>
        <BarChart data={sampleData} width={400} height={400} title={"스포츠 분야 암표 신고 접수 현황"}/>
        <DonutChart width={400} height={400} />

      </div>
      <Footer />
    </div>
  );
}


export default App
