// types.ts
export interface Game {
  id: string;
  name: string;
  gameType: GameType;
  stadium: string;
  title: string; // or whatever format your graph uses
}
export interface Bin {
  name: number; // the midpoint or label (e.g., 390000)
  value: number; // numeric value (e.g., 0)
  breakdown: {
    가격범위: string; // e.g. "390000~400000원"
    개수: string; // e.g. "0개"
  };
}

export type TicketData = Record<
  string,              // game.id
  Record<string, Bin[]> // seatCategory → bins
>;


export type GameType = '와일드카드' | '준플레이오프' | '플레이오프' | '한국시리즈';

export interface Seat {
  x: number;
  y: number;
  구역: string;
}

export interface CategoryInfo {
  카테고리: string;
  "가격/원가 비율 (%)": number;
    "평균_가격": number;
    "최고_가격": number;
    "최저_가격": number;
    "중앙_가격": number;
    "평균_원가": number;
    "좌석_개수": number;
}