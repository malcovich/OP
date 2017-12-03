import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../common/toastr.service'
import { AuthService } from '../user/auth.service';
import { BetService } from './bet.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})

export class BetsComponent implements OnInit {
  userObj: any;
  public modalRef: BsModalRef; // {1}
  listBets: [any];

  constructor(private authService: AuthService,
    private betService: BetService,
    private modalService: BsModalService) {
  }

  

    ngOnInit(){
      this.userObj =  this.authService.currentUser;

      this.getAllBets();
    }

    openModal(template: TemplateRef<any>, bet: any) {
      this.modalRef = this.modalService.show(template, {'content': bet}); // {3}
      console.log(this.modalRef )
    }
    getAllBets() {
      this.betService.getBets({userid: this.userObj.userid}).subscribe(data=> {
        this.listBets = data.data;
      });
    };

    getBetClass(bet) {
      if (bet.result == 'Проиграна'){
        return 'lost_bet'
      }
      if (bet.result == 'Выиграна') {
        return 'win_bet'
      }
      return 'not_plaing'
    }

    openBet(bet){
      this.listBets.forEach(bet => {
        bet.isOpened = false;
      });
      bet.isOpened = true;
    }
}