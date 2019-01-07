import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'evnt-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
	title: string;

	constructor() {
	}

	ngOnInit() {
		this.title = 'Events';
	}

}
