import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule, Location } from '@angular/common';
import { List, ListsService } from '../../services/lists/lists.service';
import { UserService } from '../../services/users/users.service';
import { FormQuantityPipe } from "../../pipes/form-quantity/form-quantity.pipe";

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormQuantityPipe],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {

  isLoading: boolean = true;
  user: any;
  lists: List[] = [];

  constructor(
    private location: Location,
    private listService: ListsService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.loadLists();
  }

  loadLists() {
    this.listService.getListsByUserId(this.user.id).subscribe({
      next: (data) => {
        this.lists = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar as listas:', err);
      }
    });
  }

  return() {
    this.location.back();
  }

}
