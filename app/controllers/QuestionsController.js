import { AppState } from "../AppState";
import { questionsService } from "../services/QuestionsService";
import { Pop } from "../utils/Pop";
import { setHTML } from "../utils/Writer";

function _drawQuestions() {
  let questions = AppState.questions

  let template = ''

  questions.forEach(q => template += q.CardTemplate)

  setHTML('questions', template)
}


export class QuestionsController {
  constructor () {
    
    console.log('Is this the QuestionController? - yes it is!!');

    this.getQuestions()

    AppState.on('questions', _drawQuestions)
    
  }


  async getQuestions() {
    try {
      await questionsService.getQuestions()
      Pop.success('Questions acquired!!')
    } catch (error) {
      console.log(error)
      Pop.error(error.message)
    }
  }
}