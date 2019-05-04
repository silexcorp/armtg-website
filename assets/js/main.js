class ShapeOverlays {
	constructor(elm) {
		this.elm = elm;
		this.path = elm.querySelectorAll('path');
		this.numPoints = 2;
		this.duration = 600;
		this.delayPointsArray = [];
		this.delayPointsMax = 180;
		this.delayPerPath = 200;
		this.timeStart = Date.now();
		this.isOpened = false;
		this.isAnimating = false;
	}

	changeBool() {
		this.isOpened = true;
	}
	
	toggle() {
		this.isAnimating = true;
		const range = Math.random() * Math.PI * 2;
		for (var i = 0; i < this.numPoints; i++) {
			const radian = (i / (this.numPoints - 1)) * Math.PI * 2;
			this.delayPointsArray[i] = (Math.sin(radian + range) + 1) / 2 * this.delayPointsMax;
		}
		if (this.isOpened === false) {
			this.open();
		} else {
			this.close();
		}
	}
	open() {
		this.isOpened = true;
		this.elm.classList.add('is-opened');
		this.timeStart = Date.now();
		this.renderLoop();
	}
	close() {
		this.isOpened = false;
		this.elm.classList.remove('is-opened');
		this.timeStart = Date.now();
		this.renderLoop();
	}
	updatePath(time) {
		const points = [];
		for (var i = 0; i < this.numPoints; i++) {
			points[i] = (1-ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100
		}

		let str = '';
		str += (this.isOpened) ? `M 0 0 H ${points[0]}` : `M ${points[0]} 0`;
		for (var i = 0; i < this.numPoints - 1; i++) {
			const p = (i + 1) / (this.numPoints - 1) * 100;
			const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
			str += `C ${points[i]} ${cp} ${points[i + 1]} ${cp} ${points[i + 1]} ${p} `;
		}
		str += (this.isOpened) ? `H 100 V 0` : `H 0 V 0`;
		return str;

	}
	render() {
		if (this.isOpened) {
			for (var i = 0; i < this.path.length; i++) {
				this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
			}
		} else {
			for (var i = 0; i < this.path.length; i++) {
				this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
			}
		}
	}
	renderLoop() {
		this.render();
		if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
			requestAnimationFrame(() => {
				this.renderLoop();
			});
		}
		else {
			this.isAnimating = false;
		}
	}
}

(function() {
	const elmHamburger = document.querySelector('.navbutton');
	const d = document.getElementById("menuover");
	const gNavItems = document.querySelectorAll('#menuover');
	const elmOverlay = document.querySelector('.shape-overlays');
	const overlay = new ShapeOverlays(elmOverlay);

	elmHamburger.addEventListener('click', () => {
		if (overlay.isAnimating) {
			return false;
		}
		overlay.toggle();
		if (overlay.isOpened === true) {
			d.classList.add('is-opened');
		} else {
			d.classList.remove('is-opened');

		}
	});

	const newelm2 = document.querySelector('.navbutton2');

	newelm2.addEventListener('click', () => {
		if (overlay.isAnimating) {
			return false;
		}
		overlay.toggle();
		if (overlay.isOpened === true) {
			d.classList.add('is-opened');
		} else {
			d.classList.remove('is-opened');

		}
	});

	const newelm3 = document.querySelector('.navbutton3');

	newelm3.addEventListener('click', () => {
		if (overlay.isAnimating) {
			return false;
		}
		overlay.toggle();
		if (overlay.isOpened === true) {
			d.classList.add('is-opened');
		} else {
			d.classList.remove('is-opened');

		}
	});

	const newelm4 = document.querySelector('.navbutton4');

	newelm4.addEventListener('click', () => {
		if (overlay.isAnimating) {
			return false;
		}
		overlay.toggle();
		if (overlay.isOpened === true) {
			d.classList.add('is-opened');
		} else {
			d.classList.remove('is-opened');

		}
	});

	const newelm5 = document.querySelector('.navbutton5');

	newelm5.addEventListener('click', () => {
		if (overlay.isAnimating) {
			return false;
		}
		overlay.toggle();
		if (overlay.isOpened === true) {
			d.classList.add('is-opened');
		} else {
			d.classList.remove('is-opened');

		}
	});

	const newelm6 = document.querySelector('.navbutton6');

	newelm6.addEventListener('click', () => {
		if (overlay.isAnimating) {
			return false;
		}
		overlay.toggle();
		if (overlay.isOpened === true) {
			d.classList.add('is-opened');
		} else {
			d.classList.remove('is-opened');

		}
	});

	const close = document.querySelector('#menuover .closebtn');

	close.addEventListener('click', () => {
		if (overlay.isAnimating) {
			return false;
		}
		overlay.toggle();
		if (overlay.isOpened === true) {
			d.classList.add('is-opened');
		} else {
			d.classList.remove('is-opened');

		}
	});
}());

(function() {
	const elmHamburger = document.querySelector('.aboutButton');
	const d = document.getElementById("aboutover");
	const gNavItems = document.querySelectorAll('#aboutover');
	const elmOverlay = document.querySelector('.shape-overlays');
	const overlay = new ShapeOverlays(elmOverlay);

	elmHamburger.addEventListener('click', () => {
		if (overlay.isAnimating) {
			return false;
		}
		overlay.toggle();
		if (overlay.isOpened === true) {
			d.classList.add('is-opened');
		} else {
			d.classList.remove('is-opened');

		}
	});

	const close = document.querySelector('#aboutover .closebtn');

	close.addEventListener('click', () => {
		if (overlay.isAnimating) {
			return false;
		}
		overlay.toggle();
		if (overlay.isOpened === true) {
			d.classList.add('is-opened');
		} else {
			d.classList.remove('is-opened');

		}
	});

}());

(function() {
	const elmHamburger = document.querySelector('.supportButton');
	const d = document.getElementById("mainover");
	const gNavItems = document.querySelectorAll('#mainover');
	const elmOverlay = document.querySelector('.shape-overlays');
	const overlay = new ShapeOverlays(elmOverlay);

	elmHamburger.addEventListener('click', () => {
		if (overlay.isAnimating) {
			return false;
		}
		overlay.toggle();
		if (overlay.isOpened === true) {
			d.classList.add('is-opened');
		} else {
			d.classList.remove('is-opened');

		}
	});

	const close = document.querySelector('#mainover .closebtn');

	close.addEventListener('click', () => {
		if (overlay.isAnimating) {
			return false;
		}
		overlay.toggle();
		if (overlay.isOpened === true) {
			d.classList.add('is-opened');
		} else {
			d.classList.remove('is-opened');

		}
	});

}());