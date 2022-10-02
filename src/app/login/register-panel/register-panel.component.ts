import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms'
import { RegisterData } from 'src/app/_core/_models/register-data.model';
import { AuthService } from 'src/app/_core/_services/auth.service';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss']
})
export class RegisterPanelComponent implements OnInit {
  @Output('onNavigateToLoginPage') navigateToLogin = new EventEmitter();

  term1: boolean = false;
  term2: boolean = false;
  term3: boolean = false;

  userData: RegisterData = new RegisterData();

  submitted = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  checkAllTerms(ev: any){
    console.log(this.term1)
    this.term1 = ev.target.checked;
    this.term2 = ev.target.checked;
    this.term3 = ev.target.checked;
  }

  onSubmit(form: NgForm) {
    this.submitted = (form.submitted && !!form.valid);
    if(this.submitted){
      this.userData.email = form.value.email;
      this.userData.password = form.value.password;
      this.userData.marketingTerm = form.value.term3;

      this.authService.register(this.userData);
    }
  }

}
