import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventCardComponent } from './events/event-card/event-card.component';

@NgModule({
	declarations: [
		AppComponent,
		EventsListComponent,
		EventCardComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AngularMaterialModule,
		LayoutModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
