import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CabezeraComponent } from './cabezera/cabezera.component';



@NgModule({
  declarations: [CabezeraComponent],
  exports: [CabezeraComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponenteModule { }
