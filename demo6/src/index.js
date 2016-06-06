import './styles.scss'
import './other.scss'
// import './Button.scss';
// If we have an anchor, render the Button component on it
if (document.querySelectorAll('a').length) {
    require.ensure([], () => {
        const Button = require('./Components/Button').default;
        const button = new Button('google.com');
        button.render('a');
    });
}

// If we have a title, render the Header component on it
if (document.querySelectorAll('h1').length) {
    require.ensure([], () => {
        const Header = require('./Components/Header').default;

        new Header().render('h1');
    });
}