import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlipCardComponent implements OnInit {
  toggleProperty = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }


}