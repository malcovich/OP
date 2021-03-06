import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { LoginComponent } from './home/login.component';
import { AboutComponent } from './home/about.component';

/* Feature Modules */
import { UserModule } from './user/user.module';
import { ExpenseModule } from './expense/expense.module';
import { BetsModule } from './bets/bets.module';

/* Bootstrap */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

/* common Modules */
import { ToastrService } from './common/toastr.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UserModule,
    ExpenseModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BetsModule,
    RouterModule.forRoot([
        { path: 'login', component: LoginComponent},
        { path: 'about', component: AboutComponent},
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ToastrService]
})
export class AppModule { }
