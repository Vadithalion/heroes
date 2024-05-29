import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styleUrls: ['./heroes-home.component.scss']
})
export class HeroesHomeComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list'},
    { label: 'Añadir', icon: 'add', url: './new-hero'},
    { label: 'Buscar', icon: 'search', url: './search'}
  ]

}
