import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  form = { name: '', email: '', phone: '', password: '', confirmPassword: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.form).subscribe({
      next: () => {
        alert('Đăng ký thành công!');
        this.router.navigate(['/auth/login']);
      },
      error: (err) => alert(err.error.message || 'Lỗi đăng ký'),
    });
  }
}
