import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistartionComponent } from './registartion/registartion.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [

  //login          4200
  {
  path:'',component:LoginComponent
},


//dashboard          4200/dashboard
{
  path:'dashboard',component:DashboardComponent
},

//4200/registartion
{
  path:'registartion',component:RegistartionComponent
},
{
  path:'transaction',component:TransactionComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
