import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logoUrl = 'https://dashboard.opal.us/opal-cyweb/resources/img/logos/Horizontal-Wordmark-UNC.png'
  form: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        remenber: ''
    })
  }

  ngOnInit() {}

  login() {
    const val = this.form.value;
    if (val.email && val.password && this.authService.login(val.email, val.password))
      alert("Login!")
    else
      alert("Test with\n\nUser: test@opal.com\nPass: 1234")
  }

}