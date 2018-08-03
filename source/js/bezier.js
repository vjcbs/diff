$(document).ready(function(){
	let svg = $('<svg><path></path></svg>');

	let genData = function([sP, cP, eP], rep = 6) {
		let data = '';
		let t = 100, A = 20;
		for (let i = 0; i < rep; i++) {
			let T = i * t;
			let cPy = cP[1];
			if (i % 2 != 0) cPy += A * 2;
			data += 'M'+(sP[0]+T)+','+sP[1]+' Q'+(cP[0]+T)+','+cPy+' '+(eP[0]+T)+','+eP[1]+' ';
		}
		return data;
	};

	let generatePoints = function(M, A, T) {
		let endPoint = [T/2 + M[0], M[1]],
				controlPoint = [(endPoint[0]-M[0])/2 + M[0], M[1] - A];
		return [M, controlPoint, endPoint];
	};
	let points = generatePoints([0,50], 20, 200);
	let data = genData(points);
	// console.log(data);
	$('.container').append(svg);
	$('path').attr({
		'fill':'none',
		'stroke':'#7AA20D',
		'stroke-width':'3',
		'd':data
	})
})
