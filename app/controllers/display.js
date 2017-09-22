export default Ember.Controller.extend({
	list: function() {
	  console.log("this.get('model')", this.get('model'));
	  return this.get('model.content')
	}.property('model'),
});