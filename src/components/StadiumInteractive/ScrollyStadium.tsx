import type { Game, Seat } from '../types.ts';
import { DisplayArea } from './DisplayArea.tsx';

interface ScrollyStadiumProps {
  selectedGameId: string | null;          // controlled from App
  selectedSeat: Seat | null;              // controlled from App
  onSelectSeat: (seat: Seat | null) => void;  // callback to set seat in App
}

function ScrollyStadium({ selectedGameId, selectedSeat, onSelectSeat }: ScrollyStadiumProps) {
  const allGames: Game[] = [
    { id: '1', name: '1, 2차 대구 삼성 라이온즈 파크', gameType: '와일드카드',stadium: 'samsung', title: '와일드카드 1, 2차' },
    
    { id: '2', name: '1, 2차 인천 SSG 랜더스 필드', gameType: '준플레이오프', stadium: 'ssg', title: '준플레이오프 1, 2차' },
    { id: '3', name: '3, 4차 대구 삼성 라이온즈 파크', gameType: '준플레이오프', stadium: 'samsung', title: '준플레이오프 3, 4차' },

    { id: '4', name: '1, 2, 5차 대전 한화생명 볼파크', gameType: '플레이오프', stadium: 'hanhwa', title: '플레이오프 1, 2, 5차' },
    { id: '5', name: '3, 4차 대구 삼성 라이온즈 파크', gameType: '플레이오프', stadium: 'samsung', title: '플레이오프 3, 4차' },

    {id: '6', name: '1차 서울종합운동장 야구장', gameType:'한국시리즈', stadium:'lg', title: '한국시리즈 1차'},
    {id: '7', name: '2차 서울종합운동장 야구장', gameType:'한국시리즈', stadium:'lg', title: '한국시리즈 2차'},
    {id: '8', name: '3차 대전 한화생명 볼파크', gameType:'한국시리즈', stadium:'hanhwa', title: '한국시리즈 3차'},
    {id: '9', name: '4차 대전 한화생명 볼파크', gameType:'한국시리즈', stadium:'hanhwa', title: '한국시리즈 4차'},
    {id: '10', name: '5차 대전 한화생명 볼파크', gameType:'한국시리즈', stadium:'hanhwa', title: '한국시리즈 5차'},
    {id: '11', name: '6차 서울종합운동장 야구장', gameType:'한국시리즈', stadium:'lg', title: '한국시리즈 6차'},
    {id: '12', name: '7차 서울종합운동장 야구장', gameType:'한국시리즈', stadium:'lg', title: '한국시리즈 7차'},

  ];

  const selectedGame = allGames.find(game => game.id === selectedGameId) || null;
  

  return (
    <div>
      <DisplayArea 
        game={selectedGame}
        selectedSeat={selectedSeat}
        onSelect={onSelectSeat}   // pass seat setter down
        scrolly={true}
      />
      <div id="tooltip" style={{ display: 'none' }}></div>
      <div id="tooltip-selected" style={{ display: 'none' }}></div>
    </div>
  );
}

export default ScrollyStadium;
