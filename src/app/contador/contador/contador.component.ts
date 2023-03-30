import { Component } from "@angular/core";

/*
1.- Se crea un nuevo componente independiente llamado contador.componente.ts
2.- Se crea una nueva class llamada ContadorComponet
3.- Se crea decorador llamado @Component.
4.- Se importa el componente desde @angular/core
5.- Dentro del decorador se crea el selector y el template.
6.- A selector se le da el valor de app-contador (aunque puede ser cualquier nombre).
7.- En el template se copia y pega todo el codigo que estaba en el app-component.html
8.- Desde app-component.ts cortamos todo lo que esta dentro de la class App.Componet
incluyendo el metodo.
9.- Se pega todo el codigo dentro de la class ContadorComponet.
*/

@Component({
    selector: "app-contador",
    template: `

        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)="acumular( base )"> + {{ base }} </button>

        <span> {{ numero }} </span>

        <button (click)="acumular( -base )"> - {{ base }} </button>
    
`
})
export class ContadorComponet {
    titulo: string = 'Contador App';
    numero: number = 10
    base: number = 5
  
    acumular(valor: number) {
      this.numero += valor
    }
}