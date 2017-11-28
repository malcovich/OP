import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../common/toastr.service'
import { AuthService } from '../user/auth.service';
import { BetService } from './bet.service';

@Component({
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})

export class BetsComponent implements OnInit {
  userObj: any;
  listBets: [any];
  constructor(private authService: AuthService,
    private betService: BetService) {
  }

    ngOnInit(){
      this.userObj =  this.authService.currentUser;

      this.getAllBets();
    }

    getAllBets() {
      this.betService.getBets({userid: this.userObj.userid}).subscribe(data=> {
        this.listBets = data.data;
      })
    };
}