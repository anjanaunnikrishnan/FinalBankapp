import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private ds:DataService,private router:Router){} // dependency injection
  aim:any ="your perfect banking partner"  // string interpolation
  value: any;
//   login(acn:any,psw:any){
//     var acno=acn.value;
//     var pswd =psw.value;
//     var userDetails=this.userDetails;
//     if(acno in userDetails){
//       if(pswd==userDetails[acno]['password']){
//         alert('login successful')
//       }

// else {
//   alert('password invalid')
// }
//     }
//     else {
//     alert('invalid username')
//     } //event binding

// }


login(){
      var acno=this.acno;
      var pswd =this.pswd;
      var userDetails=this.ds.userDetails;
      const result =this.ds.login(acno,pswd);
      if(result){
        {
          alert('login successful')

          this.router.navigateByUrl('dashboard')
        }

      }

  else {
    alert('Login fialed')
  }




  }
  pswd='';
  acno=''



  acnochange(event:any){   //event binding using $
    console.log(event)
    this.acno=event.target.value;
    console.log(this.acno)
  }
pswdchange(event:any){
  console.log(event)
  this.pswd=event.target.value;
  console.log(this.pswd)

}


}


