import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from './components/nav/nav.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NavModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
