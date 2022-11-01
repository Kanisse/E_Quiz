import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from './interface/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {
  url= "http://localhost:3000/quiz";
  
  constructor(private http:HttpClient) { }


  finall(){
    return this.http.get<Quiz[]>(this.url);
  }

  delete(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }

  Add(Quiz:any){
return this.http.post<Quiz>(this.url, Quiz);
  }


  open (id:any, etat:any){
    return this.http.patch(`${this.url}/${id}`,
    {etat : !etat});
  }

  update(quiz:any){
   return  this.http.put(`${this.url}/${quiz.id}`,quiz)
  }
}


