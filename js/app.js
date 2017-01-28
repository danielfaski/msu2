var quantizeScale = d3.scaleQuantize()
	.domain([0,100])
	.range(['red','green','white','purple','yellow']);

	console.log(quantizeScale(30));
	console.log(quantizeScale(61));
	console.log(quantizeScale(90));

	console.log(quantizeScale.invertExtent('white'));