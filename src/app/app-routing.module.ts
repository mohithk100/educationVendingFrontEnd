import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegistrationModalComponent } from './registration-modal/registration-modal.component';

const routes: Routes = [
  { path: 'login' , component : LoginModalComponent },
  { path: 'register' , component: RegistrationModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
    LoginModalComponent,
    RegistrationModalComponent
  ]
