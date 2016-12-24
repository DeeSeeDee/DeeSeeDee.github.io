$(function(){
	var plate = new Microplate({
		padding:30,
		annotations: true,
		wellShape: 'rounded',
		rows: 8,
		columns: 12
	});
	
	var flowcell = new Flowcell({
		lanes: 8,
		padding: 20,
		annotations: true
	});
	
	var nextPlate = new Microplate({
		padding:30,
		annotations: true,
		wellShape: 'circle',
		rows: 4,
		columns: 6
	});
	
	var funkyPlate = new Microplate({
		padding: 30,
		annotations: true,
		wellShape: 'square',
		attributes: {
			'id': 'funky'
		}
	});
	
	$('#test').append(plate.render());
	$('#test').append(flowcell.render());
	$('#test').append(nextPlate.render());
	$('#test').append(funkyPlate.render());
});
