import { NgModule } from "@angular/core";

import { ListadoComponent } from './listado/listado.component';
import { HeroesComponet } from './Heroe/heroe.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeroesComponet,
        ListadoComponent
    ],
    exports: [
        ListadoComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}