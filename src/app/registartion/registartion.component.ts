import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['./registartion.component.css']
})
export class RegistartionComponent {
  property ="Name of User"   //property binding
username=''
acno=''
pswd=''

//registration model
registerForm = this.fb.group({
  acno:[''],
  username:[''],
  pswd:['']
})

//control pass to ts to html file
constructor(private ds:DataService,private router:Router,private fb:FormBuilder){}
  register(){
    console.log(this.registerForm)  //form
    // alert('Register clicked')
     var username=this.registerForm.value.username;
    var acno = this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;
    const result =this.ds.register(acno,username,pswd)
    if(result){
      alert('Register successful')
      this.router.navigateByUrl('')    //navigate to login page
    }
    else{
      alert('user already exist')
      this.router.navigateByUrl('registartion')
    }
  }

}
