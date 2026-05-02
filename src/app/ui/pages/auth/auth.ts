import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export default class Auth implements OnInit {
  showPassword = false;
  fb = inject(FormBuilder);
  router = inject(Router);
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onLoginClick(): void {
    if (this.loginForm.invalid) {
      return;
    }
    console.log('Login clicked');
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }

  onForgotPasswordClick(): void {
    console.log('Forgot password clicked');
  }

  onCreateAccountClick(): void {
    console.log('Create account clicked');
  }

  onSocialLoginClick(provider: string): void {
    console.log(`Social login clicked: ${provider}`);
  }

  onRememberMeChange(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    console.log('Remember me changed:', checked);
  }

  onTogglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    console.log('Toggle password visibility clicked');
  }
}
