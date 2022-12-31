import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails:any={
    1000:{acno:1000,username:"Amal",password:1000,balance:1000,transaction:[]},
    1001:{acno:1001,username:"Arjun",password:1001,balance:1000,transaction:[]},
    1002:{acno:1002,username:"Anju",password:1002,balance:1000,transaction:[]}
  }
  currentUser: any;
  currentAcno:any;


  constructor() { }

  register(acno:any,username:any,password:any){

    let userDetails = this.userDetails;
    if(acno in userDetails){
      return false;
    }
    else{
      userDetails[acno]={
        acno,username,password,
        balance:0
      }
      console.log(userDetails)
      return true
    }
  }


  login(acno:any,pswd:any){
    let userDetails=this.userDetails;
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password'])
      {
        this.currentUser = userDetails[acno]['username']
        this.currentAcno = acno    // name on dashboard
        return true;
      }
      else
      {return false}
    }
      else{return false}
    }
deposit(acno:any,pswd:any,amt:any){
  var amount = parseInt(amt)              // to convert to integer
  let userDetails=this.userDetails;
  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      userDetails[acno]['balance']+=amount;
      userDetails[acno]['transaction'].push({
        Type:'Credit',
        Amount:amount
      })
      console.log(userDetails)
      return userDetails[acno]['balance']
    }
    else{
      alert('Password incorrect')
      return false
    }
  }
    else{
      alert('Invalid username')
      return false

    }
  }
  withdraw(acno:any,pswd:any,amt:any){
    var amount = parseInt(amt)              // to convert to integer
    let userDetails=this.userDetails;
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        if(userDetails[acno]['balance']>amount){
        userDetails[acno]['balance']-=amount;
        userDetails[acno]['transaction'].push({
          Type:'Debit',
          Amount:amount
        })
        console.log(userDetails)
        return userDetails[acno]['balance']
      }
      else{
        alert('Transaction failed')
        return false
      }
    }

      else{
        alert('password mismatch')
        return false

      }
    }
else{
  alert("Invalid userdetails")
}

  }

  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']        //details of transaction

   }

}


