import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material.module';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app.routes.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventCardComponent } from './events/event-card/event-card.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { EventsComponent } from './pages/events/events.component';

@NgModule({
	declarations: [
		AppComponent,
		EventsListComponent,
		EventCardComponent,
		NavComponent,
		WelcomeComponent,
		EventsComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AngularMaterialModule,
		AppRoutesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
