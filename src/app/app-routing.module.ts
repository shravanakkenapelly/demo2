import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AddplaceComponent } from './addplace/addplace.component';
import { AllplacesComponent } from './allplaces/allplaces.component';
import { UploadplaceimageComponent } from './uploadplaceimage/uploadplaceimage.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';

const routes: Routes = [
  {
    path:'', component:HeaderComponent ,
},
{
    path:'home', component:HomeComponent ,
},
{
    path:'person', component:PersonComponent ,
},
{
    path:'userlogin', component:LoginComponent ,
},
{
    path:'register', component:RegisterComponent ,
},
{
  path:'adminlogin', component:AdminloginComponent ,
},
{
  path:'adminnavbar', component:AdminnavbarComponent ,
},
{
  path:'adminlogout', component:AdminnavbarComponent ,
},
{
  path:'addplace', component:AddplaceComponent ,
},
{
  path:'allplaces', component:AllplacesComponent ,
},
{
  path:'uploadimage/:id', component:UploadplaceimageComponent ,
},
{
  path:'usernavbar', component:UsernavbarComponent ,
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
