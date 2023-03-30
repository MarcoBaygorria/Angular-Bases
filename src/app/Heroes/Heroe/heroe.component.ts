import { Component } from "@angular/core";


@Component({
    selector: "app-Heroes",
    templateUrl: "heroe.component.html"
})
export class HeroesComponet{
    nombre: string = "Mirana"
    HP: number = 560
    skilss: string = "StarFall"

    get NombreCapitalizado() {
        return this.nombre.toUpperCase()
    }

    obtenerNombre():string {
        return `${ this.nombre } - ${ this.HP }`
    }

    cambiarNombre():void {
        this.nombre = "Rubick";
    }

    cambiarHP(): void {
        this.HP = 600
    }

    cambiarSkilss(): void {
        this.skilss = "SacredArrow"
    }

    get NombreSkills() {
        return this.skilss.toUpperCase()
    }
}