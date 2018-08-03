$(document).ready(function(){

	class Point {
		constructor(x, y) {
			this.x = x;
			this.y = y;
		}
	}

	let startingPoint = new Point(0, 35);

	// let svg = $('<svg width="150" height="75"><g id="waves"><path class="wave" id="wave1"></path></g></svg>');
	// Generate points for quadratic bezier curve
	// M = Point(x, y) - start point; A - amplitude of curve, w - wavelength
	let generateData = function(M, A, w, rep = 7) {

		// Getting start, control and end points from input data
		// let sP = M; // Start point
		let eP = new Point(w/2 + M.x, M.y); // End point
		let cP = new Point((eP.x - M.x)/2 + M.x, M.y - A); // Control point


		let data = '';

		for (let i = 0; i < rep; i++) {
			let t = i * w / 2;
			let cPy = cP.y;
			if (i % 2 != 0) cPy += A * 2;
			data += 'M'+(M.x+t)+','+M.y+' Q'+(cP.x+t)+','+cPy+' '+(eP.x+t)+','+eP.y+' ';
		}
		return data;
	};

	// let data = generateData(startingPoint, 10, 20)
  // console.log(data);
	// console.log('Hello!');
	// let re = /,\d+/g;

	function changeY(s, n) {
		return s.replace(re, s => ',' + (Number.parseInt(s.substring(1))+n));
	}



	// let s = 'M56,70 Q35,220 45,444';
	// console.log(s.replace(re, s => ',' + (Number.parseInt(s.substring(1))+5)));

	// $('.container').append(svg);

	// let group = $('#waves');
	//
	// group.append($('<path class="wave" id="wave2"></path>'));
	// group.append($('<path class="wave" id="wave3"></path>'));

	$('.wave').attr({
			'fill':'none',
			'stroke':'#222222',
			'stroke-width':'3',
		});

	let data1 = generateData(startingPoint, 6, 20);
	let data2 = changeY(data1, 6);
	let data3 = changeY(data1, -6);
	// let data2 = data1.replace(re, ',')

	$('#wave1').attr('d', data1);
	$('#wave2').attr('d', data2);
	$('#wave3').attr('d', data3);

	let wave2 = $('#wave2');


	// console.log(svg);

	// for (let i = 0; i < A; i++) {
	// 	let data = generateData([0,200], A, 200)
	// 	A -= 1;
	// 	setTimeout(function(){
	// 		$('.wave').attr('d', data);
	// 	}, 1000);
	// 	console.log('Iteration №' + i);
	// }
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

	function generateLinePoints(start, middle, end) {
		let points = start.x + ',' + start.y + ' ' + middle.x + ',' + middle.y + ' ' + end.x + ',' + end.y;
		return points;
	}

	let start = new Point(0,5);
	let middle = new Point(90,5);
	let end = new Point(180,5);

	console.log(generateLinePoints(start, middle, end));

	function animate(n, direction = 'forward') {
		let data = generateData(startingPoint, n, 35);
		let data2 = changeY(data, 8);
		let data3 = changeY(data, -8);
		$('#wave1').attr('d', data);
		$('#wave2').attr('d', data2);
		$('#wave3').attr('d', data3);

		if (direction == 'forward') {
			// console.log(n);
			n--;
			if (n > -A) setTimeout(animate, 25*Math.sqrt(Math.abs(n)), n, direction);
		} else {
			// console.log(n);
			n++;
			if (n < A) setTimeout(animate, 50*Math.sqrt(Math.abs(n)), n, direction);
		}

		if (Math.abs(n) == A) {
			// console.log(direction + ', n=' + n);
			setTimeout(animate, 50, n, changeDir(direction));
		}
	};

	let A = 6;
	animate(A);
	// $('.wave').delay(100).attr('d', data);

	// $('.wave').each(function(i){
	// 		$(this).attr({
	// 		'fill':'none',
	// 		'stroke':'#7AA20D',
	// 		'stroke-width':'3',
	// 		'd':data
	// 	})
	// })
})
