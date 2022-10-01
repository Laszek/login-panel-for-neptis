import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  currentPanel: string = 'login';

  constructor() {
  }

  ngOnInit(): void {
  }

  togglePanel(){
    if(this.currentPanel === 'login')
      this.currentPanel = 'register';
    else
      this.currentPanel = 'login';
  }
}
