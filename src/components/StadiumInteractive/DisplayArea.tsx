import type { Game, Seat } from '../types.ts';
// In parent component (e.g., DisplayArea.tsx)
import { stadiums } from "./data/stadium.ts";
import { categoryData } from "./data/category.ts";
import { StadiumChart } from "./StadiumChart.tsx";
import { StadiumGraph } from "./StadiumGraph.tsx";
interface Props {
  game: Game | null;
}


interface Props {
  game: Game | null;
  selectedSeat: Seat | null;
  onSelect: (seat: Seat | null) => void;
}

export const DisplayArea: React.FC<Props> = ({ game, selectedSeat, onSelect }) => {
  if (!game) return <div>Select a game</div>;
  return (
    <div id='display-area' style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ width:'500px', height: '500px' }}>
        <StadiumChart game={game} 
        stadiumData={stadiums} 
        categoryData={categoryData}
        onSelect={onSelect}
        />
      </div>
      <div style={{height: '500px', width: '600px'}}>
        <StadiumGraph game={game}
        selectedSeat={selectedSeat}
        categoryData={categoryData}
        />
      </div>
    </div>
  );
};
