import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModServicesRoutingModule } from './mod-services-routing.module';
import { ModServicesComponent } from './mod-services.component';


@NgModule({
  declarations: [
    ModServicesComponent
  ],
  imports: [
    CommonModule,
    ModServicesRoutingModule
  ],
  exports: [
    ModServicesComponent
  ]
})
export class ModServicesModule { }
