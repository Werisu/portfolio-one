import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentActivitiesRoutingModule } from './recent-activities-routing.module';
import { RecentActivitiesComponent } from './recent-activities.component';


@NgModule({
  declarations: [
    RecentActivitiesComponent
  ],
  imports: [
    CommonModule,
    RecentActivitiesRoutingModule
  ],
  exports: [
    RecentActivitiesComponent
  ]
})
export class RecentActivitiesModule { }
