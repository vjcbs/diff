$(document).ready(function(){

	class Point {
		constructor(x, y) {
			this.x = x;
			this.y = y;
		}
	}

	let startingPoint = new Point(0, 35);
	// Generate points for quadratic bezier curve
	// M = Point(x, y) - start point; A - amplitude of curve, w - wavelength,
	// rep - number of oscillations
	let generateData = function(M, A, w, rep = 7) {
		// Getting start, control and end points from input data
		let eP = new Point(w/2 + M.x, M.y); // End point
		let cP = new Point((eP.x - M.x)/2 + M.x, M.y - A); // Control point

		// Points' generation loop
		let data = '';
		for (let i = 0; i < rep; i++) {
			let t = i * w / 2;
			let cPy = cP.y;
			if (i % 2 != 0) cPy += A * 2;
			data += 'M'+(M.x+t)+','+M.y+' Q'+(cP.x+t)+','+cPy+' '+(eP.x+t)+','+eP.y+' ';
		}
		return data;
	};

	function changeY(s, n) {
		return s.replace(/,\d+/g, s => ',' + (Number.parseInt(s.substring(1))+n));
	}

	$('.wave').attr({
			'fill':'none',
			'stroke':'#222222',
			'stroke-width':'3',
		});

	function changeDir(direction) {
		if (direction == 'forward') return 'backward';
		if (direction == 'backward') return 'forward';
	}

	function changeSign(n) {
		return -n;
	}

	function animateLines(n, direction = 'forward') {
		if (direction == 'forward') {
			n--;
			if (n > -A) setTimeout(animate, 50, n, direction);
		} else {
			n++;
		}
	}

	// function generateLinePoints(start, middle, end) {
	// 	let points = start.x + ',' + start.y + ' ' + middle.x + ',' + middle.y + ' ' + end.x + ',' + end.y;
	// 	return points;
	// }
	//
	// let start = new Point(0,5);
	// let middle = new Point(90,5);
	// let end = new Point(180,5);

	function animate(n, direction = 'forward') {
		let data = generateData(startingPoint, n, 40);
		let data2 = changeY(data, 8);
		let data3 = changeY(data, -8);
		$('#wave1').attr('d', data);
		$('#wave2').attr('d', data2);
		$('#wave3').attr('d', data3);

		if (direction == 'forward') {
			n--;
			if (n > -A) setTimeout(animate, 25*Math.sqrt(Math.abs(n)), n, direction);
		} else {
			n++;
			if (n < A) setTimeout(animate, 50*Math.sqrt(Math.abs(n)), n, direction);
		}

		if (Math.abs(n) == A) {
			setTimeout(animate, 50, n, changeDir(direction));
		}
	};

	// Setting amplitude and starting animation
	let A = 6;
	animate(A);

})
