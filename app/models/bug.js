import DS from 'ember-data';

var Bug = DS.Model.extend({
	bugid: DS.attr('string'),
	hours: DS.attr('string'),
	description: DS.attr('string'),
	query: DS.attr('string'),
	isActive: DS.attr('boolean')	
  
});


Bug.reopenClass({
    FIXTURES: [{
		id: 1,
		bugid: "BUG001",
		hours: "8",
		description: "In Login Form text boxes are not properly arranged",
		query: "Resolve this as soon as possible",
		isActive: true

	}

]
});

export default Bug;
