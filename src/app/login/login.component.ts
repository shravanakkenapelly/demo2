import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { UserModel } from '../user-model';
import { error } from 'console';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  user=new UserModel();
constructor(private _userservice:UserService,private _router:Router){

}
  loginUser(){
this._userservice.loginUserfromRemote(this.user).subscribe(
  data => {console.log("response recieved");
  this._userservice.isAuthenticated = true;
  this._router.navigate(["/usernavbar"])
  
},
  error=>console.log("Exception recieved")
)
  }
  gotoRegistration()
  {
    this._router.navigate(['/register'])
  }
}
