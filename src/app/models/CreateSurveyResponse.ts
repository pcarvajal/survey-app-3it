import { BaseResponse } from "./BaseResponse";

interface Survey{
  id: number;
  email: string;
  musicGenreCode: string;
}

export interface CreateSurveyResponse extends BaseResponse{
  survey: Survey;
}