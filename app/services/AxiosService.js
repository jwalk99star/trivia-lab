// @ts-ignore
export const triviaApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=1&category=29&difficulty=easy&type=boolean',

  timeout: 7000
})