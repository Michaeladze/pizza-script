export interface IProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface IMenuSection {
  id: string;
  title: string;
  list: IProduct[];
}

export interface ICartProduct extends IProduct {
  quantity: number;
}
