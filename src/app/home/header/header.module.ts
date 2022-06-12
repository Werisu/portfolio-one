import { NavBarModule } from './../../shared/components/nav-bar/nav-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NavBarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
