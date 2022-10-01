import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  template: `
    <div class="form-input">
      <img *ngIf="iconPath" src='{{iconPath}}'>
      <input type="text" placeholder="{{placeholder}}" name="{{name}}" type="{{type}}">
    </div>`,
  styles: [`
    .form-input{
      border-bottom: 1px solid white;
      display:flex;
      align-items: flex-end;
      padding-bottom: 3px;
      margin-top: 20px;
    }
    input {
      background: none;
      border: 0;
      font-size: 1em;
      margin-left: 8px;
    }
    img{
      width: 1.5em;
      margin-bottom: 3px;
    }
  `]
})
export class FormInputComponent implements OnInit {
  @Input() iconPath: string;
  @Input() placeholder: string;
  @Input() name: string;
  @Input() type: string = "text";

  constructor() { }

  ngOnInit(): void {
  }

}
