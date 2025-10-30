import './App.css'
import InteractiveStadium from './components/StadiumInteractive/InteractiveStadium.tsx';
import BarChart from './assets/BarChart.tsx';
import ScrollytellingStadium from './components/StadiumInteractive/ScrollytellingStadium.tsx';
import DesktopNotice from './components/DesktopNotice.tsx';
import TimeScrollytelling from './components/TimeScrolly/TimeScrolly.tsx';
import Kakao from './components/Kakao.tsx';
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
      <ScrollytellingStadium />      
      <h1>인터랙티브 구장</h1>
      <p>직접 살펴보삼. 클릭하면 티켓베이에 올라온 거래가격 분포 나옴.</p>
      <div style={{transform:"scale(1)",display: "flex", flexDirection: "column", alignItems: "center"}}><InteractiveStadium /></div>
      <DesktopNotice />

      <TimeScrollytelling />
      <h1>그래프 테스트</h1>
      <div style={{display:"flex", width: "100%"}}>
        <BarChart data={sampleData} width={500} height={400} title={"스포츠 분야 암표 신고 접수 현황"}/>
        <BarChart data={sampleData2} width={500} height={400} title={"문화예술분야 암표 신고 접수 현황"}/>
      </div>
      
    </div>
  );
}


export default App
