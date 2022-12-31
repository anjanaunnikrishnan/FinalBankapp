import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  acno=""; //to hold cureenAcno
  transaction:any  //to hold transaction

  constructor(private ds:DataService){
    this.acno=this.ds.currentAcno;
    this.transaction=this.ds.getTransaction(this.acno);
    console.log(this.transaction)
  }

}
