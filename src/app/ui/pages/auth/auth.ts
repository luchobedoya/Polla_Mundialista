import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export default class Auth {
  showPassword = false;

  onLoginClick(event?: Event): void {
    event?.preventDefault();
    console.log('Login clicked');
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
