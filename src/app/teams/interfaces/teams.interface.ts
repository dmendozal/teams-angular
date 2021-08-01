export interface Team {
  id?: number;
  area: Area;
  name: string;
  shortName: string;
  tla: null | string;
  crestUrl: string;
  address: string;
  phone: null | string;
  website: string;
  email: null | string;
  founded: number | null;
  clubColors: string;
  venue: string;
  lastUpdated: Date;
  alt_img?: string;
}

export interface Area {
  id: number | null;
  name: string | undefined;
}

