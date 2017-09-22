export default Ember.Controller.extend({
  actions: {
    updateRecord: function() {
      var bugid = this.get('bugid');
      var hours_worked = this.get('hours');
      var description = this.get('description');
      var querys = this.get('query');
      
      this.set('bugid', bugid);
      this.set('hours', hours_worked);
      this.set('description', description);
      this.set('query', querys);
      this.transitionTo('display');
    }
  },
  isEditing: false
});