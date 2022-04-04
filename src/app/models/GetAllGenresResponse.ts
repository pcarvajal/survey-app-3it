export class Genre{
  id:number = 0;
  code:string = '';
  description: string = '';
}

export class GetAllGenresResponse extends Genre{
  genres: Genre[] = [];
}
