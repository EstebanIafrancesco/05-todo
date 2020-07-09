import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    public todosService: TodosService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async agregarLista() {
    // this.router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          },
        },
        {
          text: 'Crear',
          handler: ( data ) => {
            console.log(data);
            if (data.titulo.length === 0 ) {
              return;
            }
            this.todosService.crearLista(data.titulo);
            // Hay que crear la lista
          }
        },
      ],
    });
    alert.present();
  }
}
