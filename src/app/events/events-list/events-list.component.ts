import { Component, OnInit } from '@angular/core';
import * as models from '../../models/';

@Component({
	selector: 'evnt-events-list',
	templateUrl: './events-list.component.html',
	styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
	events: models.IEvent[];

	constructor() {
	}

	ngOnInit() {
		this.events = [
			{
				id: 1,
				name: 'NgArmenia Meetup #1',
				date: '02/02/2019',
				time: '10:00',
				price: '20.000 AMD',
				imageUrl: './assets/images/NgArmenia_Logo.png',
				description: `First Meetup of Angular developers in Armenia which will be the first step on creating the Armenian community of
				Angular developers`,
				location: {
					country: 'Armenia',
					city: 'Yerevan',
					address: '3 Azatutyan str., apt. 27',
				}
			},
			{
				id: 2,
				name: 'Angular Connect Vanadzor Meetup',
				date: '23/06/2019',
				time: '15:00',
				price: '10.000 AMD',
				imageUrl: './assets/images/NgArmenia_Logo.png',
				description: `NgArmenia - the official Angular community in Armenia organizes another Meetup in the city of
				Vanadzor. Meetup will cover mostly the new features of Angular CLI and the ways to create applications using the powerful CLI`,
				location: {
					country: 'Armenia',
					city: 'Vanadzor',
					address: '52 Mashtots str., Kirov Complex',
				}
			}
		];
	}

	handleEventClick(message: string): void {
		alert(message);
	}
}
