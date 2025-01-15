export interface Player {
  id: number;
  name: string;
  position: string;
  team: string;
  price: number;
  totalPoints: number;
  form: number;
  availability: boolean;
  //   substitute: boolean;
}

export interface Team {
  startingXI: Player[];
  substitutes: Player[];
}
