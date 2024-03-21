import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';
  
  constructor( private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar ) {}

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.registerForm = this.fb.group({
      username: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
    
  }

  login() {
    if (this.loginForm.valid) {
      const loginInfo = this.loginForm.value;
      console.log(`Login info => ${JSON.stringify(loginInfo)}`);
      this.router.navigate(['/budget-planner/dashboard'])
    } else {
      this.snackBar.open('Invalid email or password', 'Close', {duration: 3000})
    }
  }

  register() {
    if(this.registerForm.valid) {
      const registerInfo = this.registerForm.value;
      console.log(`Register info => ${JSON.stringify(registerInfo)}`);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(['/budget-planner/login']);
    } else {
      this.snackBar.open('Please fill in all fields correctly', 'Close', { duration:3000})
    }

  }

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }

}
