import { Component } from '@angular/core';

@Component({
	selector: 'evnt-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent {
	collapsed = true;

	constructor() {
	}

	toggle(): void {
		this.collapsed = !this.collapsed;
	}
}
