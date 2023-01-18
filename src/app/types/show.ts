export interface Show {
  key?: string;
  title: string;
  date: number;
  price: {
    regularPrice: number, studentPrice: number
  };
  imgUrl: string;
}
