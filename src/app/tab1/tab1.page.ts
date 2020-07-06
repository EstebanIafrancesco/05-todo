import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(public todosService: TodosService) {}
}
