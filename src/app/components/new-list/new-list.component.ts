import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListsService } from '../../services/lists/lists.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css'
})
export class NewListComponent {
  @Input() userId!: number;
  @Output() close = new EventEmitter<boolean>();
  listName: string = '';
  errorMessage: string = '';

  constructor(
    private listService: ListsService
  ) { }

  closePopup(newList: boolean) {
    this.close.emit(newList);
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  createList() {

    if (!this.validateName()) {
      this.errorMessage = 'Nome inválido para a lista';
      setTimeout(() => this.errorMessage = '', 3000);
      return;
    }

    this.listService.createList(this.listName, this.userId).subscribe({
      next: (response) => {
        alert(`Lista "${response.nome_lista}" criada com sucesso!`);
        this.closePopup(true);
      },
      error: (err) => {
        console.error('Erro ao criar lista:', err);
      }
    });
  }

  validateName() {
    if (this.listName.trim().length === 0) {
      return false;
    }
    return true;
  }
}
