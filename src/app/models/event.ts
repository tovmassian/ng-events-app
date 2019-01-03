export interface IEvent {
	id: number;
	name: string;
	date: string;
	time: string;
	price: string;
	imageUrl: string;
	description: string;
	location: {
		country: string;
		city: string;
		address: string;
	};
}
