import './styles.scss';

if (document.querySelectorAll('a').length) {
	require.ensure([], () => {
		const Button = require('./Components/Button').default;
		const button = new Button('google.com');

		button.render('a');
	});
}

if (document.querySelectorAll('h1').length) {
	require.ensure([], () => {
		const Header = require('./Components/Header').default;

		new Header().render('h1');
	});
}
/*setTimeout(()=> {
	require.ensure([], () => {
		const Button = require('./Components/Button').default;
		const button = new Button('google.com');

		button.render('a');
	});
}, 5000)*/