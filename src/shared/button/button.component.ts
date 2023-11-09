import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() rightIcon?: string;
  @Input() label?: string;
  @Input() leftIcon?: string;
  @Input() btnSize?: string;
  @Input() btnColor?: string;

  constructor(private modalService: NgbModal) {}

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
}
