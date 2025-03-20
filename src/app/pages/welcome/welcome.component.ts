import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/users/users.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  email: string = '';
  mensagemErro: string = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  login() {
    this.authService.login(this.email).subscribe({
      next: (response) => {
        alert('Login realizado com sucesso!');

        this.userService.setUser(response.user);

        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.mensagemErro = err.error.message;
      }
    });
  }
}
