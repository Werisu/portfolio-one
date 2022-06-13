import { RecentActivitiesModule } from './recent-activities/recent-activities.module';
import { ModServicesModule } from './mod-services/mod-services.module';
import { WorksContributionsModule } from './works-contributions/works-contributions.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    WorksContributionsModule,
    ModServicesModule,
    RecentActivitiesModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
