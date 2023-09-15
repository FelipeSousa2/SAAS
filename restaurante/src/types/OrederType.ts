export type OrederType = {
  id: string;
  userEmail: string;
  price: number;
  products: object[];
  status: String;
  createdAt: Date;
  intent_id?: string;
};
