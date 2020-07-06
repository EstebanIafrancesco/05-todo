import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  listas: Lista[] = [];
  constructor() {

    const lista1 = new Lista('Recolectar uvas');
    const lista2 = new Lista('Prepara vinos deliciosos');
    this.listas.push(lista1, lista2);
  }
}
