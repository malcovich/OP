import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AuthGuard } from '../user/auth-guard.service';
import { AuthService } from '../user/auth.service';
import { BetService } from './bet.service';
import { BetsComponent } from './bets.component';
import { AddBetComponent } from './add/add.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'bets', canActivate: [ AuthGuard], component: BetsComponent },
      { path: 'addbet', canActivate: [ AuthGuard], component: AddBetComponent },
    //   { path: 'expense/:id', canActivate: [ AuthGuard], component: ExpenseComponent },
    //   { path: 'expense/view/:id', canActivate: [ AuthGuard], component: ViewexpenseComponent }
    ])
  ],
  declarations: [
    BetsComponent,
    AddBetComponent
  ],
  providers: [
    DatePipe,
    AuthService,
    AuthGuard,
    BetService
  ]
})
export class BetsModule {}