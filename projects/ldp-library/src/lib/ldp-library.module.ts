import { NgModule } from '@angular/core';
import { LdpLibraryComponent } from './ldp-library.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LdpLibraryComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LdpLibraryComponent,
    CardComponent]
})
export class LdpLibraryModule { }
