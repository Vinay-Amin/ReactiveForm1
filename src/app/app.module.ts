import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule, MatIconModule, MatInputModule, MatListModule, MatRadioModule, MatSelectModule} from '@angular/material';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SignUpComponent,
    LogInComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ],
  exports: [MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
