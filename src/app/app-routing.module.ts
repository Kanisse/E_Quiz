import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { QuizcomponentComponent } from './quizcomponent/quizcomponent.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes =
 [
  {path:'', redirectTo:'login',pathMatch:"full"},
  { path: 'formateur', component: QuizcomponentComponent } ,
  {path:"question", component:QuestionComponent},
   {path:"login", component:LoginComponent},
   {path : "signup" , component : SignupComponent},
  {path:"acceuil", component:AcceuilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }