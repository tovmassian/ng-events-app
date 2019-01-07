import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EventsComponent', () => {
	let component: EventsComponent;
	let fixture: ComponentFixture<EventsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EventsComponent],
			schemas: [NO_ERRORS_SCHEMA]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EventsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
