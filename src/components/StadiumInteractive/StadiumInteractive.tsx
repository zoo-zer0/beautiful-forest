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
    { id: '1', name: '1차 대구 삼성 라이온즈', gameType: '와일드카드',stadium: 'samsung', data: [1, 2, 3] },
    { id: '2', name: '2차 대구 삼성 라이온즈', gameType: '와일드카드', stadium: 'samsung', data: [4, 5, 6] },
    
    { id: '3', name: '1차 인천 SSG 랜더스 필드', gameType: '준플레이오프', stadium: 'ssg', data: [4, 5, 6] },
    { id: '4', name: '2차 인천 SSG 랜더스 필드', gameType: '준플레이오프', stadium: 'ssg', data: [4, 5, 6] },
    { id: '5', name: '3차 대구 삼성 라이온즈', gameType: '준플레이오프', stadium: 'samsung', data: [4, 5, 6] },
    { id: '6', name: '4차 대구 삼성 라이온즈', gameType: '준플레이오프', stadium: 'samsung', data: [4, 5, 6] },

    { id: '7', name: '1차 대전 한화생명 볼파크', gameType: '플레이오프', stadium: 'hanhwa', data: [4, 5, 6] },
    { id: '8', name: '2차 대전 한화생명 볼파크', gameType: '플레이오프', stadium: 'hanhwa', data: [4, 5, 6] },
    { id: '9', name: '3차 대구 삼성 라이온즈 파크', gameType: '플레이오프', stadium: 'samsung', data: [4, 5, 6] },
    { id: '10', name: '4차 대구 삼성 라이온즈 파크', gameType: '플레이오프', stadium: 'samsung', data: [4, 5, 6] },
    { id: '11', name: '5차 대전 한화생명 볼파크', gameType: '플레이오프', stadium: 'hanhwa', data: [4, 5, 6] },

    {id: '12', name: '1차 서울종합운동장 야구장', gameType:'한국시리즈', stadium:'lg', data:[]},
    {id: '13', name: '2차 서울종합운동장 야구장', gameType:'한국시리즈', stadium:'lg', data:[]},
    {id: '14', name: '3차 (미정)', gameType:'한국시리즈', stadium:'', data:[]},
    {id: '15', name: '4차 (미정)', gameType:'한국시리즈', stadium:'', data:[]},
    {id: '16', name: '5차 (미정)', gameType:'한국시리즈', stadium:'', data:[]},
    {id: '17', name: '6차 서울종합운동장 야구장', gameType:'한국시리즈', stadium:'lg', data:[]},
    {id: '18', name: '7차 서울종합운동장 야구장', gameType:'한국시리즈', stadium:'lg', data:[]},

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
      <GameSelector games={filteredGames} selectedGame={selectedGame} onSelect={handleGameSelect} />
      </div>
    </div>
  );
}


export default StadiumInteractive
