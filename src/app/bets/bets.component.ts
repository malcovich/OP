import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../common/toastr.service'
import { AuthService } from '../user/auth.service';

@Component({
  templateUrl: './bets.component.html'
})

export class BetsComponent implements OnInit {
    
    constructor() {
    }

    ngOnInit(){
    
    }
}