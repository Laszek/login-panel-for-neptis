import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginPanelComponent } from './login/login-panel/login-panel.component';
import { RegisterPanelComponent } from './login/register-panel/register-panel.component';
import { FormInputComponent } from "./shared/UI/form-input/form-input.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, LoginPanelComponent, RegisterPanelComponent, FormInputComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
