export class SurveyResume{
  genreName: string = '';
  count: number = 0;
}

export class GetSurveyResumeResponse extends SurveyResume{
  resume: SurveyResume[] = [];
}