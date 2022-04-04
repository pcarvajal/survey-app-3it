import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateSurveyRequest } from 'src/app/models/CreateSurveyRequest';
import { GetAllGenresResponse } from 'src/app/models/GetAllGenresResponse';
import { GenreServiceService } from 'src/app/services/genre-service.service';
import { Router } from '@angular/router'; 
import { SurveyServiceService } from 'src/app/services/survey-service.service';
import { CustomError } from "src/app/models/CustomError";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  customError: CustomError = new CustomError();

  @Output() errorEvent = new EventEmitter<string>();

  email: string = '';
  genreCode: string = '';

  getAllGenreResponse: GetAllGenresResponse = new GetAllGenresResponse();


  constructor(private genreService: GenreServiceService, 
    private router:Router,
    private surveyService: SurveyServiceService) { }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(response => {
      this.getAllGenreResponse = response;
    });
  }

  onSubmit(){
    const request = new CreateSurveyRequest();
    request.email = this.email;
    request.genreCode = this.genreCode

    console.log(request);

    this.surveyService.create(request).subscribe(i => {
      console.log(i);
      this.router.navigate(['/']);
    },
    err => {
      this.errorEvent.emit(err.error.description);
      this.router.navigate(['/error'], {state:{data:err.error.description}});
    }
    );

  }

}
