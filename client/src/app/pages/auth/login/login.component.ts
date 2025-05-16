import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  form = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.form).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.access_token);
        alert('Đăng nhập thành công!');
        this.router.navigate(['/']);
      },
      error: (err) => alert(err.error.message || 'Lỗi đăng nhập'),
    });
  }
}
