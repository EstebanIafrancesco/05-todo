import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  listas: Lista[] = [];
  constructor() {

    this.cargarStrorage();
    // Listas de prueba inicial
    // const lista1 = new Lista('Recolectar uvas');
    // const lista2 = new Lista('Prepara vinos deliciosos');
    // this.listas.push(lista1, lista2);
  }
  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }
  cargarStrorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }
}
