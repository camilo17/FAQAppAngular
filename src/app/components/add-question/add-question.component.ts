import { Question } from './../../models/Question';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  text: string;
  answer: string;


  constructor() { }

  ngOnInit() {
  }

  addQuestion(){

  }

}
