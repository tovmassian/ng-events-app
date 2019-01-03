import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as models from '../../models/';

@Component({
	selector: 'evnt-event-card',
	templateUrl: './event-card.component.html',
	styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
	@Input() event: models.IEvent = <models.IEvent>{};
	@Output() handleClick: EventEmitter<string> = new EventEmitter<string>();

	constructor() {
	}

	ngOnInit() {
	}

	buttonClicked(buttonType: string): void {
		this.handleClick.emit(`${buttonType} button clicked`);
	}
}
