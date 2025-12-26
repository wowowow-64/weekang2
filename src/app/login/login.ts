
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/operators';
import { Auth, user } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private auth: Auth = inject(Auth);
  private authService = inject(AuthService);
  readonly user$ = user(this.auth);

  login() {
    console.log('Login button clicked, calling authService.login()');
    this.authService.login().subscribe({
      next: (user) => console.log('Login successful:', user),
      error: (err) => console.error('Login failed:', err),
      complete: () => console.log('Login observable completed.'),
    });
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
