import { AppState } from "../AppState.js";
import { triviaApi } from "./AxiosService.js";

class QuestionsService {

  async getQuestions() {


    const response = await triviaApi.get()

    console.log('got questions', response.data);


    const arrayOfQuestions = response.data


    AppState.questions = arrayOfQuestions
  }
}



export const questionsService = new QuestionsService()