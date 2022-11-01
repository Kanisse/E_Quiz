import { Component, OnInit } from '@angular/core';
import { QuizserviceService } from '../quizservice.service';
import { Quiz } from '../interface/quiz';


@Component({
  selector: 'app-quizcomponent',
  templateUrl: './quizcomponent.component.html',
  styleUrls: ['./quizcomponent.component.css']
})
export class QuizcomponentComponent implements OnInit {
 
  SearchText = '';

  MonQuiz : Quiz = {
    code : this.generateCode(),
    intitule : '',
    etat : false,
    Image : ''
  }
  
  EditForm = false;
  ShowForm = false;

  quizs: Quiz[]= [];
  Rquizs: Quiz[]= [];

  constructor(private quizservice:QuizserviceService) { }
  
  ngOnInit(): void {
    this.getall();
  }
  getall(){
    return this.quizservice.finall()
    .subscribe((quizs) =>
    { 
      this.Rquizs=this.quizs=quizs})
  }

  deleteQuiz(id:any){
this.quizservice.delete(id).subscribe(() => {
  this.Rquizs= this.Rquizs.filter(Quiz => Quiz.id!=id)
});
  }

AddQuiz(){
  this.quizservice.Add(this.MonQuiz)
  .subscribe((quiz)=>{
    this.Rquizs = [quiz, ...this.quizs];
    this.ResetForm();
    this.ShowForm=false;
  });
  
}

ResetForm(){
  this.MonQuiz = {
    code : '',
    intitule :'',
    etat : false,
    Image : ''
  }
}

toggleetat (quiz:any){
  this.quizservice.open(quiz.id,quiz.etat)
  .subscribe(()=> {
    quiz.etat = ! quiz.etat;
  } )
}

editquiz(quiz:any){
this.MonQuiz = quiz
this.EditForm=true;
this.ShowForm=true;
}

UpdateQuiz(){
  this.quizservice.update(this.MonQuiz)
  .subscribe(quiz => {
    this.ResetForm();
    this.EditForm=false;
    this.ShowForm=false;
  })
}

Showform(){
  this.ShowForm = true;
}

SearchTxt(){  
 return this.Rquizs = this.quizs.filter((task) =>
  task.intitule.toLowerCase().includes(this.SearchText.toLowerCase()))
}

generateCode() {
    return Math.floor((1 + Math.random()) * 0x1000100)
        .toString(16)
        .substring(1);
  
  }

}
