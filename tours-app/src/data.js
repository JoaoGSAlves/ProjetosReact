import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
	{ id: 1, href: '#home', text: 'home' },
	{ id: 2, href: '#about', text: 'About' },
	{ id: 3, href: '#services', text: 'Services' },
	{ id: 4, href: '#tour', text: 'Tour' },
];

export const socialLinks = [
	{ id: 1, href: 'http://twitter.com', icon: 'fab fa-twitter' },
	{ id: 2, href: 'http://facebook.com', icon: 'fab fa-facebook' },
	{ id: 3, href: 'http://youtube.com', icon: 'fab fa-youtube' },
];

export const Services = [
	{
		id: 1,
		icon: 'fas fa-wallet fa-fw',
		title: 'saving money',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperioresofficia',
	},
	{
		id: 2,
		icon: 'fas fa-tree fa-fw',
		title: 'endless hiking',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperioresofficia',
	},
	{
		id: 3,
		icon: 'fas fa-socks fa-fw',
		title: 'amazing comfort',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperioresofficia',
	},
];

export const tours = [
	{
		id: 1,
		image: tour2,
		date: 'october 1th, 2020',
		title: 'Best of Java',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit qui corporis',
		location: 'Indonesia',
		price: 1400,
		days: 11,
	},
	{
		id: 2,
		image: tour1,
		date: 'august 26th, 2020',
		title: 'Tibet Adventure',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit qui corporis',
		location: 'China',
		price: 2100,
		days: 6,
	},
	{
		id: 3,
		image: tour3,
		date: 'september 15th, 2020',
		title: 'Explore Hong Kong',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit qui corporis',
		location: 'Hong Kong',
		price: 5000,
		days: 8,
	},
	{
		id: 4,
		image: tour4,
		date: 'december 5th, 2019',
		title: 'Kenya Highlights',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit qui corporis',
		location: 'Kenya',
		price: 3300,
		days: 20,
	},
	{
		id: 5,
		image: tour5,
		date: 'december 5th, 2019',
		title: 'Africa World',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit qui corporis',
		location: 'South Africa',
		price: 4000,
		days: 14,
	},
	{
		id: 6,
		image: tour6,
		date: 'June 7th, 2020',
		title: 'Taj Mahal Dream',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit qui corporis',
		location: 'Índia',
		price: 3100,
		days: 5,
	},
];
