export interface Show {
  title: string;
  date: number;
  price: {
    regularPrice: number, studentPrice: number
  };
  imgUrl: string;
}
