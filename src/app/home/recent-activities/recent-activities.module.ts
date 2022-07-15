import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentActivitiesRoutingModule } from './recent-activities-routing.module';
import { RecentActivitiesComponent } from './recent-activities.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RecentActivitiesComponent
  ],
  imports: [
    CommonModule,
    RecentActivitiesRoutingModule,
    NgbPaginationModule
  ],
  exports: [
    RecentActivitiesComponent
  ]
})
export class RecentActivitiesModule { }
