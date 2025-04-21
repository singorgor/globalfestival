export interface FestivalDetail {
  id: string;
  name: string;
  country: string;
  date: string;
  description: string;
  traditions: string[];
  images?: string[];
}

export interface FestivalDetailProps {
  festivalId?: string;
} 