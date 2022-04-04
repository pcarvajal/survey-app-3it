import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { GetAllGenresResponse } from '../models/GetAllGenresResponse';

@Injectable({
  providedIn: 'root'
})
export class GenreServiceService {

  private url: string = 'http://localhost:8080/v1/genres';

  constructor(private http: HttpClient) { }

  getAll(): Observable<GetAllGenresResponse>{
    return this.http.get<GetAllGenresResponse>(this.url);
  }
}
