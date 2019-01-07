import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { EventsComponent } from './pages/events/events.component';

const appRoutes: Routes = [
	{ path: 'events', component: EventsComponent },
	{ path: 'home', component: WelcomeComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: WelcomeComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule],
	declarations: []
})
export class AppRoutesModule {
}
