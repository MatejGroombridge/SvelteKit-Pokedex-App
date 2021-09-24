import { publish } from 'gh-pages';

publish(
	'/build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/MatejGroombridge/SvelteKit-Pokedex-App.git', // Update to point to your repository
		user: {
			name: 'Matej', // update to use your name
			email: 'matejdpg@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
