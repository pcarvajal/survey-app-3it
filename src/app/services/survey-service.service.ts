import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateSurveyRequest } from '../models/CreateSurveyRequest';
import { CreateSurveyResponse } from '../models/CreateSurveyResponse';
import { GetSurveyResumeResponse } from '../models/GetSurveyResumeResponse';

@Injectable({
  providedIn: 'root'
})
export class SurveyServiceService {

  private url: string = 'http://localhost:8080/v1/surveys';
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  create(request: CreateSurveyRequest): Observable<CreateSurveyResponse>{
    return this.http.post<CreateSurveyResponse>(this.url, request, this.httpOptions);
  }

  getResume(): Observable<GetSurveyResumeResponse>{
    return this.http.get<GetSurveyResumeResponse>(this.url + '/resume')
  }
}
