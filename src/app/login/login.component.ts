import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ""
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === "ee" && this.password === "oo") {
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
