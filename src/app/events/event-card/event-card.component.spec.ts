import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardComponent } from './event-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EventCardComponent', () => {
	let component: EventCardComponent;
	let fixture: ComponentFixture<EventCardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EventCardComponent ],
			schemas: [NO_ERRORS_SCHEMA]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EventCardComponent);

		component = fixture.componentInstance;
		component.event = {
			id: 1,
			name: 'NgArmenia Meetup #10',
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
		};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have event.name equal to NgArmenia Meetup #10', () => {
		expect(component.event.name).toBe('NgArmenia Meetup #10');
	});

	it('should have event.date equal to 02/02/2019', () => {
		expect(component.event.date).toBe('02/02/2019');
	});
});
