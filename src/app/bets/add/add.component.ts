import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../common/toastr.service';
import { BetService } from '../bet.service';
import { AuthService } from '../../user/auth.service';

@Component({
  templateUrl: './add.component.html'
})

export class AddBetComponent implements OnInit {
    betForm: FormGroup;
    userObj: any;
    acc: any = ['Експрес', 'Ординар',];
    eventsResultArray: any = ['Выиграна', 'Проиграна', 'Не росчитана'];
    expid: string;
    btnLbl: string;

    betType = new FormControl('', [Validators.required]);
    betDate = new FormControl('', [Validators.required]);
    team1 = new FormControl('', [Validators.required]);
    result = new FormControl('', [Validators.required]);
    sum = new FormControl('', [Validators.required]);

    constructor(private fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private toastr: ToastrService,
      private betService: BetService) {
    }

  ngOnInit(){
    this.userObj =  this.authService.currentUser;

    this.betForm = this.fb.group({
      betType: this.betType,
      betDate: this.betDate,
      result: this.result,
      sum: this.sum,
      events: this.fb.array([
          this.initAddress()
      ])
    });
  
  }

  initAddress() {
    return this.fb.group({
        team1: ['', Validators.required],
        team2: ['', Validators.required],
        result: ['', Validators.required],
        odd: ['', Validators.required],
        betEvent: ['', Validators.required]
    });
  }

  addAddress() {
    const control = <FormArray>this.betForm.controls['events'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.betForm.controls['events'];
    control.removeAt(i);
  }

  saveBet(formdata:any): void {
    if (this.betForm.valid) {
      const theForm = this.betForm.value;
      if (this.expid !== '') {
        theForm.expid = this.expid;
      }
      
      this.betService.saveBet(this.userObj.userid,theForm)
        .subscribe(data => {
          console.log(data)
          if (data.success === false) {
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.toastr.success(data.message);
          }
          if (!this.expid) {
            this.betForm.reset();
          }
      });
    }
  }
}