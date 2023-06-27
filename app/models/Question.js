import { generateId } from "../utils/generateId.js"

export class Question {
  constructor(data) {
    this.difficulty = data.difficulty
  }
}