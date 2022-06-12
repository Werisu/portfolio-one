import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksContributionsRoutingModule } from './works-contributions-routing.module';
import { WorksContributionsComponent } from './works-contributions.component';


@NgModule({
  declarations: [
    WorksContributionsComponent
  ],
  imports: [
    CommonModule,
    WorksContributionsRoutingModule
  ],
  exports: [
    WorksContributionsComponent
  ]
})
export class WorksContributionsModule { }
