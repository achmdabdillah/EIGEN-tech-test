export class addBookDto {
  code: string;
  title: string;
  author: string;
  stock: number;
}

export class findBookDto {
  id: number;
  code: string;
  title: string;
  author: string;
  stock: number;
}

export class updateBookDto {
  id: number;
  code: string;
  title: string;
  author: string;
  stock: number;
}
