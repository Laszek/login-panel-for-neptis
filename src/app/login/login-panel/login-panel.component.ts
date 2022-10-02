import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { LoginData } from 'src/app/_core/_models/login-data.model';
import { AuthService } from 'src/app/_core/_services/auth.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {
  userData: LoginData = new LoginData();
  submitted: boolean = false;

  isLoggedIn = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.submitted = (form.submitted && !!form.valid);
    if(this.submitted){
      this.userData.email = form.value.email;
      this.userData.password = form.value.password;

      this.authService.login(this.userData);
    }
  }

}
