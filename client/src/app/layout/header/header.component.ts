import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedIn = false; // Thay bằng logic thật của bạn

  logout() {
    // Xử lý logout ở đây, ví dụ clear token, redirect...
    this.isLoggedIn = false;
    console.log('User logged out');
  }
}
