import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbDatepickerModule
  ],
  exports: [
    ButtonComponent, 
    CardComponent, 
    NgbModule,
    NgbDatepickerModule
  ],
})

export class SharedModule { }
