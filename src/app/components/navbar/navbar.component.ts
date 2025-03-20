import { Component } from '@angular/core';
import { UserService } from '../../services/users/users.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user: { name: string, email: string } = {
    name: '',
    email: '',
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    const user = this.userService.getUser();

    if (user) {
      this.user = {
        name: user.nome,
        email: user.email,
      };
    }
  }
}
