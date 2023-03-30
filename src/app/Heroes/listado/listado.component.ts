import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ["Mirana", "Rubick", "Silencer", "Lina", "Vengue"];
  batallasImportantes: string[] = ["Austerlitz", "Borodino", "Stalingrado", "Leipzig", "Gaugamela"];
  heroeBorrado: string = "";
  batallasBorradas: string = "";

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || ""
  }

  borrarBatalla() {
    this.batallasBorradas = this.batallasImportantes.pop() || ""
  }
}

