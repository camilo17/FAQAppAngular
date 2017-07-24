import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {

    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Camilo',
        hide: true
      },
      {
        text: 'What is your favorite color?',
        answer: 'My favorite color is purple',
        hide: true
      },
      {
        text: 'What is your favorite langauge?',
        answer: 'My favorite language is javaScript',
        hide: true
      }
    ];
  }

  getQuestions(){
    return this.questions;
  }

}
