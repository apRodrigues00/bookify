import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formQuantity',
  standalone: true
})
export class FormQuantityPipe implements PipeTransform {

  transform(quantity: number): string {
    switch (quantity) {
      case 0:
        return 'Nenhum livro';
      case 1:
        return '1 livro';
      default:
        return `${quantity} livros`;
    }
  }

}
