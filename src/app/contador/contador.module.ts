import { NgModule } from '@angular/core';
import { ContadorComponet } from '../contador/contador/contador.component';


@NgModule({
    declarations: [
        ContadorComponet
    ],
    exports: [
        ContadorComponet
    ]
})

export class ContadorModule{}