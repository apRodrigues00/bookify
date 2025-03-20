import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';

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
    private authService: AuthService
  ) { }

  login() {
    this.authService.login(this.email).subscribe({
      next: (response) => {
        alert('Login realizado com sucesso!');
        console.log(response.user);
      },
      error: (err) => {
        this.mensagemErro = err.error.message;
      }
    });
  }
}
