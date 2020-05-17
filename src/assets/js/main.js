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
		for (let i = 0; i < this.numPoints; i++) {
			const radian = (i / (this.numPoints - 1)) * Math.PI * 2;
			this.delayPointsArray[i] = (Math.sin(radian + range) + 1) / 2 * this.delayPointsMax;
		}

		return this.isOpened === false ? this.open() : this.close();
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
		for (let i = 0; i < this.numPoints; i++) {
			points[i] = (1-ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100
		}

		let str = '';
		str += (this.isOpened) ? `M 0 0 H ${points[0]}` : `M ${points[0]} 0`;
		for (let i = 0; i < this.numPoints - 1; i++) {
			const p = (i + 1) / (this.numPoints - 1) * 100;
			const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
			str += `C ${points[i]} ${cp} ${points[i + 1]} ${cp} ${points[i + 1]} ${p} `;
		}

		str += (this.isOpened) ? `H 100 V 0` : `H 0 V 0`;
		return str;
	}
	render() {
		if (this.isOpened) {
			for (let i = 0; i < this.path.length; i++) {
				this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
			}
		} else {
			for (let i = 0; i < this.path.length; i++) {
				this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
			}
		}
	}
	renderLoop() {
		this.render();

		if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
			requestAnimationFrame(() => this.renderLoop());
		} else {
			this.isAnimating = false;
		}
	}
}
