import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { FlipCardFrontComponent } from './flip-card/flip-card-front';
import { FlipCardBackComponent } from './flip-card/flip-card-back';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FlipCardsModule } from './flip-card/flip-card.module';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent    
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbDatepickerModule,
    FlipCardsModule
  ],
  exports: [
    ButtonComponent, 
    CardComponent, 
    NgbModule,
    NgbDatepickerModule,
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent
  ],
})

export class SharedModule { }
