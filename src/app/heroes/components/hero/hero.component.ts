import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  nombre: string = "Iroman";
  edad: number = 45;

  //Esto es una propiedad
  get capitalizedName(): string{
    return this.nombre.toUpperCase();
  }  

  //Este es un método
  getHeroeDescription():string{
    return `${this.nombre} - ${this.edad}`
  }
  changeName():void{
    this.nombre="Spiderman";
  }
  changeEdad():void{
    this.edad = 30;
  }
}
