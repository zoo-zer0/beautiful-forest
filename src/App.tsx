import './App.css'
import InteractiveStadium from './components/StadiumInteractive/InteractiveStadium.tsx';
import BarChart from './assets/BarChart.tsx';
import ScrollytellingStadium from './components/StadiumInteractive/ScrollytellingStadium.tsx';
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
const sampleData2 = [
  {
    name: "2020",
    value: 359,
    
  },
  {
    name: "2021",
    value: 785,
    
  },
  {
    name: "2022",
    value: 4224,
    
  },
  {
    name: "2023",
    value: 2161,
    breakdown: {
      "음악분야": "1,717건",
      "기타(팬미팅 등)": "216건",
      "게임분야": "173건",
      "뮤지컬분야": "55건",
    },
  },
  {
    name: "2024",
    value: 2224,
    breakdown: {
      "음악분야": "1,471건",
      "기타(팬미팅 등)": "543건",
      "게임분야": "67건",
      "뮤지컬분야": "143건",
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
        <p>적게는 정가의 3배(실 데이터로 수정 필요)부터 많게는 100배(실 데이터로 수정 필요)까지 뻥튀기되어있는 가격. 그러나 ‘암표’만이 경기를 볼 유일한 선택지가 되었습니다.</p>
      } />
      <QuoteBox source="국립국어원 표준국어대사전 ‘암표’ 정의, 공연법 제4조의 2 참고"
        quote={
          <div>
            <strong>암표: </strong>공식적인 판매자가 아닌 자가 자신이 구입한 가격을 초과한 금액으로 다른 사람들에게 되판 입장권.  
          </div>
        }
      color="rgb(43, 63, 107)"/>
      <Narrative content={
        <p>
          우리가 쉽게 사고 가볍게 즐길 수 있었던 야구의 즐거움은 어느새 치열한 예매와 가격의 장벽으로 가로 막혀버렸습니다. 대체 왜 이렇게 된 걸까요? 암표가 어디까지 침투해 소비 문화를 흔들고 있는지, 우리는 그 실체를 분명히 알지 못한 채 단지 ‘잘못된 일’로만 인식해 왔습니다. 뷰티풀숲팀은 이번 프로야구 포스트시즌을 중심으로 온라인 티켓 리셀 플랫폼 ‘티켓베이(Ticketbay)’ 데이터를 분석했습니다. 이를 통해 암표의 규모와 암표 업자로 추정되는 아이디를 직접 추적했습니다.
        </p>
      } />
      <Toggle summary="분석 및 추적 방법 더 읽어보기"
        content={
          <div>
            <p>‘티켓베이(Ticketbay)’는 2025년 기준 <em>문화체육관광부의 프로스포츠 온라인 암표 신고 게시판에서 가장 많은 신고가 접수된 플랫폼입니다.</em> (전체 28149건 중 21990건, 출처 : 민형배 의원실)</p>

<p><strong>분석 절차 및 방법</strong><br></br>

2025년 7월 25일 ~ 2025년 10월 31일에 걸쳐 티켓베이에 게시된 프로야구 및 콘서트 매물을 크롤링하여 분석했습니다.</p>

<p>데이터 수집의 일관성을 위해 고정된 수집 주기를 정했습니다. 야구 경기는 매일 오후 11시에서 자정 사이, 선예매·일반 예매 시작 30분 후, 그리고 경기 시작 1시간 전에 데이터를 모았습니다. 공연의 경우, 하루 전날과 공연 시작 1시간 전에 수집했습니다.</p>

<p>데이터 분석은 실제 판매가 이루어졌다고 추정되는 매물을 기준으로 했습니다. 중복 여부와 티켓베이 내부 메시지 ‘삭제된 상품입니다’ 표기를 통해 거래 성사 여부를 가려내, 실제 거래에 최대한 가까운 데이터셋을 만들었습니다.</p>
          </div>
        }
      />
      <Narrative content={
        <div>
          <h1>숫자로 보는 야구 암표 실태</h1>
          <p>어쩌구저쩌구...</p>
          <p>
          최근 한 달간 티켓베이에 등록된 프로야구 티켓은 3연전(3경기 묶음) 기준 평균 <strong>2234건</strong>이었습니다. 
          </p>
          <p>
            판매 가격은 원가보다 평균 <strong>1.8배</strong> 높았습니다.
          </p>
          <p>
            <em>테이블석</em>과 응원석이 포함된 <em>오렌지석</em>은 정가의 약 <strong>4배</strong>에 거래되며 가장 높은 프리미엄을 보였습니다. 편안한 관람이나 열정적인 응원을 원하는, 팬들의 수요가 집중된 자리일수록 가격이 급등한 것입니다.
          </p>
          <p>
            타석과 가까운 중앙석·블루석에 비해, 3층 네이비석이나 1·3루 외야 쪽 레드석은 상대적으로 낮은 수준에 머물렀습니다.
          </p>
        </div>
      } />
      <TimeScrollytelling />
      <SusScrolly />
      <ScrollytellingStadium />      
      <h1>인터랙티브 구장</h1>
      <p>직접 살펴보삼. 클릭하면 티켓베이에 올라온 거래가격 분포 나옴.</p>
      <div style={{transform:"scale(1)",display: "flex", flexDirection: "column", alignItems: "center"}}><InteractiveStadium /></div>


      <h1>그래프 테스트</h1>
      <div style={{display:"flex", width: "100%"}}>
        <BarChart data={sampleData} width={500} height={400} title={"스포츠 분야 암표 신고 접수 현황"}/>
        <BarChart data={sampleData2} width={500} height={400} title={"문화예술분야 암표 신고 접수 현황"}/>
      </div>
      <Footer />
    </div>
  );
}


export default App
