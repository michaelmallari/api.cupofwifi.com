module.exports.home = function(req, res) {
	res.render('index', {
		title: 'Cup of Wifi',
		apiData: {
			dataset: {
				columnNames: [
					'Name',
					'City',
					'State',
					'Mascot'
				],
				data: [
					['Michigan State University', 'East Lansing', 'MI', 'Spartans'],
					['University of Maryland', 'College Park', 'MD', 'Terrapins'],
					['University of Michigan', 'Ann Arbor', 'MI', 'Wolverines'],
					['Ohio State University', 'Columbus', 'OH', 'Buckeyes'],
					['Penn State University', 'State College', 'PA', 'Nittany Lions'],
					['Rutgers University', 'New Brunswick', 'NJ', 'Scarlet Knights']
				]
			}
		}
	});
}