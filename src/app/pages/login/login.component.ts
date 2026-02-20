import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showPassword = false;
  // controls truck animation state in the template
  startTruck = false;

  loginData = {
    username: '',
    password: '',
    remember: false,
  };

  constructor(private router: Router) {}
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    console.log(this.loginData);

    if (this.loginData.username && this.loginData.password) {
      this.startTruck = true; // Start truck animation

      // Delay navigation until animation finishes
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 2500);
    } else {
      alert('Invalid Credentials');
    }
  }
}
