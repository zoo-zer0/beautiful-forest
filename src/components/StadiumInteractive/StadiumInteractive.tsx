import { useState, useEffect } from 'react'
import type { GameType, Game, Seat } from '../types.ts';
import GameTypeSelector from './GameTypeSelector.tsx'
import { GameSelector } from './GameSelector.tsx';
import { DisplayArea } from './DisplayArea.tsx';

function StadiumInteractive() {
  const [selectedGameType, setSelectedGameType] = useState<GameType | null>('와일드카드');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);

  const handleGameSelect = (game: Game) =>{
    setSelectedGame(game);
    setSelectedSeat(null);
  }
  const handleGameTypeSelect = (gameType: GameType) =>{
    setSelectedGameType(gameType);
    setSelectedSeat(null);
  }
  const allGames: Game[] = [
    { id: '1', name: '1, 2차 대구 삼성 라이온즈 파크', gameType: '와일드카드',stadium: 'samsung', title: '와일드카드 1, 2차' },
    
    { id: '2', name: '1, 2차 인천 SSG 랜더스 필드', gameType: '준플레이오프', stadium: 'ssg', title: '준플레이오프 1, 2차' },
    { id: '3', name: '3, 4차 대구 삼성 라이온즈 파크', gameType: '준플레이오프', stadium: 'samsung', title: '준플레이오프 3, 4차' },

    { id: '4', name: '1, 2, 5차 대전 한화생명 볼파크', gameType: '플레이오프', stadium: 'hanhwa', title: '플레이오프 1, 2, 5차' },
    { id: '5', name: '3, 4차 대구 삼성 라이온즈 파크', gameType: '플레이오프', stadium: 'samsung', title: '플레이오프 3, 4차' },

    {id: '12', name: '1차 서울종합운동장 야구장', gameType:'한국시리즈', stadium:'lg', title: '한국시리즈 1차'},
    {id: '13', name: '2차 서울종합운동장 야구장', gameType:'한국시리즈', stadium:'lg', title: '한국시리즈 2차'},
    {id: '14', name: '3차 대전 한화생명 볼파크', gameType:'한국시리즈', stadium:'hanhwa', title: '한국시리즈 3차'},
    {id: '15', name: '4차 대전 한화생명 볼파크', gameType:'한국시리즈', stadium:'hanhwa', title: '한국시리즈 4차'},
    {id: '16', name: '5차 대전 한화생명 볼파크', gameType:'한국시리즈', stadium:'hanhwa', title: '한국시리즈 5차'},
    {id: '17', name: '6차 서울종합운동장 야구장', gameType:'한국시리즈', stadium:'lg', title: '한국시리즈 6차'},
    {id: '18', name: '7차 서울종합운동장 야구장', gameType:'한국시리즈', stadium:'lg', title: '한국시리즈 7차'},

  ];

  const filteredGames = selectedGameType ? allGames.filter(game => game.gameType===selectedGameType) : [];
  
  //default view
  useEffect(() => {
    if (filteredGames.length > 0) {
      setSelectedGame(filteredGames[0]);
    } else {
      setSelectedGame(null);
    }
  }, [filteredGames]);

  return (
    <div>
      <GameTypeSelector selectedGameType={selectedGameType} onSelect={handleGameTypeSelect} />
      <div>
      <DisplayArea game={selectedGame} selectedSeat={selectedSeat} onSelect={setSelectedSeat} />
      <div id="tooltip" style={{display:"none"}}></div>
      <div id="tooltip-selected" style={{display:"none"}}></div>
      <GameSelector games={filteredGames} selectedGame={selectedGame} onSelect={handleGameSelect} />
      </div>
    </div>
  );
}


export default StadiumInteractive
