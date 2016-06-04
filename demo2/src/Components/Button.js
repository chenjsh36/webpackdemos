import $ from 'jquery';
// import template from './Button.html';
import Mustache from 'mustache';
// import './Button.scss';

export default class Button {
	constructor(link) {
		this.link = link;
	}

	onClick(event) {
		event.preventDefault();
		alert('Click button: ', this.link);
	}

	render(node) {
		const text = $(node).text();

		$(node).html(
			Mustache.render(template, {text})
			);

		$('.button').click(this.onClick.bind(this));
	}
}