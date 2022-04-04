import { Component, OnInit } from '@angular/core';
import { SurveyServiceService } from 'src/app/services/survey-service.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  single: any = [];
  view: [number, number] = [400, 400];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme: Color = { domain: ['#99CCE5', '#FF7F7F'], group: ScaleType.Ordinal, selectable: false, name: 'Customer Usage', };


  constructor(private surveyService: SurveyServiceService) { 
  }

  ngOnInit(): void {
    this.surveyService.getResume().subscribe(data => {
      console.log(data);
      this.single = data.resume.map(datum => ({ name: datum.genreName, value: datum.count }));
    })
  }

}
