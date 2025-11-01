import './App.css'
import InteractiveStadium from './components/StadiumInteractive/InteractiveStadium.tsx';
import BarChart from './assets/BarChart.tsx';
import ScrollytellingStadium from './components/StadiumInteractive/ScrollytellingStadium.tsx';
import DesktopNotice from './components/DesktopNotice.tsx';
import TimeScrollytelling from './components/TimeScrolly/TimeScrolly.tsx';
import Kakao from './components/Kakao.tsx';
import SusScrolly from './components/TimeSus/Sus.Scrolly.tsx';
import Intro from './components/Intro.tsx';
import Footer from './components/Footer.tsx';
import Toggle from './components/Toggle.tsx';
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
      <Toggle 
        summary="분석 및 추적 방법 더 읽어보기"
        content={
          <div>
            <p>
              ‘티켓베이(Ticketbay)’는 2025년 기준 <em>문화체육관광부의 프로스포츠 온라인 암표 신고 게시판에서 가장 많은 신고가 접수된 플랫폼</em>입니다.
              (전체 28149건 중 21990건, 출처 : 민형배 의원실)
            </p>

            <p>
              <strong>분석 절차 및 방법</strong><br />
              2025년 7월 25일 ~ 2025년 8월 24일에 걸쳐 티켓베이에 게시된 프로야구 및 콘서트 매물을 크롤링하여 분석했습니다.
            </p>

            <p>
              데이터 수집의 일관성을 위해 고정된 수집 주기를 정했습니다. 야구 경기는 매일 오후 7시 이후, 선예매·일반 예매 시작 1시간 후,
              그리고 경기 시작 2시간 전에 데이터를 모았습니다. 공연의 경우, 하루 전날과 공연 시작 2시간 전에 수집했습니다.
            </p>

            <p>
              데이터 분석은 실제 판매가 이루어졌다고 추정되는 매물을 기준으로 했습니다. 중복 여부와 티켓베이 내부 메시지 ‘삭제된 상품입니다’
              표기를 통해 거래 성사 여부를 가려내, 실제 거래에 최대한 가까운 데이터셋을 만들었습니다.
            </p>
          </div>
        }
      />

      <Intro />
      <ScrollytellingStadium />      
      <h1>인터랙티브 구장</h1>
      <p>직접 살펴보삼. 클릭하면 티켓베이에 올라온 거래가격 분포 나옴.</p>
      <div style={{transform:"scale(1)",display: "flex", flexDirection: "column", alignItems: "center"}}><InteractiveStadium /></div>
      <DesktopNotice />

      <TimeScrollytelling />
      <SusScrolly />
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
