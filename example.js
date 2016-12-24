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
	
	$('#basicplate').append(plate.render());
	$('#basicflowcell').append(flowcell.render());
	$('#24plate').append(nextPlate.render());
	$('#funkyplate').append(funkyPlate.render());
});
