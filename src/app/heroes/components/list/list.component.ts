import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroesName: string[] = ["Goku","Vegeta","Krilin"];
  ultimoHeroe?: string;
  deleteHeroe(){
    this.ultimoHeroe = this.heroesName.pop();
  }
}
