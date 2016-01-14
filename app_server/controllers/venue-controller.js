module.exports.venueInfo = function(req, res) {
	res.render('venue-info', {
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


module.exports.addRating = function(req, res) {
	res.render('add-rating', {
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