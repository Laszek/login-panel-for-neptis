import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss']
})
export class RegisterPanelComponent implements OnInit {
  terms: {text: string, isNeeded: boolean, checked: boolean}[] = [
    { text: "Zapoznałem/am się z Regulaminem", isNeeded: true, checked: false },
    { text: "Zapoznałem/am się z Polityką Prywatności", isNeeded: true, checked: false },
    { text: "Wyrażam zgodę na przetwarzanie moich danych w celach marketingowych", isNeeded: false, checked: false }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
