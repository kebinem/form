import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { TextMaskModule } from 'angular2-text-mask';
import { DataComponent } from './components/data.component';

@NgModule({
  declarations: [AppComponent, UserFormComponent, DataComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxCaptchaModule,
    ReactiveFormsModule,
    TextMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
