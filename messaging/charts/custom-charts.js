	$(document).ready(function () {

		var data = {
			labels: ['Primeiro contato com as mães da nossa base', 'Anúncio do pacote de vantagens', 'Último esforço de venda (20% de desconto)', 'Fourth quarter of the year'],
			series: [
			[60000, 40000, 80000, 70000],
			[40000, 30000, 70000, 65000],
			[8000, 3000, 10000, 6000]
			]
		};

		var options = {
			seriesBarDistance: 60,
			axisX: {
				offset: 100
			},
			axisY: {
				offset: 36,
				scaleMinSpace: 30
			}
		};

		var chart = Chartist.Bar('.ct-chart', data, options);

	});