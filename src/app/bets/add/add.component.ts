import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../common/toastr.service'
import { AuthService } from '../../user/auth.service';

@Component({
  templateUrl: './add.component.html'
})

export class AddBetComponent implements OnInit {
    expenseForm: FormGroup;
    userObj: any;
    acc: any = ['Food', 'Fees', 'Rent', 'Fare', 'Travel', 'Hotel', 'Phone', 'Internet', 'Repairs', 'Gas', 'Doctor', 'Books', 'Gift', 'Restaurant', 'Electricity', 'Other'];
    expid: string;
    pgTitle: string;
    btnLbl: string;

    constructor() {
    }

    ngOnInit(){
    
    }
}