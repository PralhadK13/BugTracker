export default Ember.Controller.extend({
  
   actions: {

    addRecord: function() {
      var bugid = this.get('bugid');
      var hours_worked = this.get('hours');
      var description = this.get('description');
      var query = this.get('query');
      if (bugid === undefined) {
        bugid = "";
      }

      if (!hours_worked || !description || !query) {
        alert("Enter All Mandatary Fields");
      }
      if (!hours_worked.trim() || !description.trim() || !query.trim()) {
        return;
      }
      if (isNaN(hours_worked)) {
        alert("Number Of Hours Is Not a Number");
        return;
      }
      if (parseFloat(hours_worked) > 8) {
        alert("Total Number of working hours should not exceed 8 hours");

        return;
      }



      var bug = this.store.createRecord('bug', {
        bugid: bugid,
        hours: hours_worked,
        description: description,
        query: query,

        isActive: true


      });

      // Clear the "New Todo" text field
      this.set('bugid', '');
      this.set('hours', '');
      this.set('description', '');
      this.set('query', '');

      bug.save();

      this.transitionTo('display');
    },

    addRecordWithoutClear: function() {
      var bugid = this.get('bugid');
      var hours_worked = this.get('hours');
      var description = this.get('description');
      var query = this.get('query');
      if (bugid === undefined) {
        bugid = "";
      }

      if (!hours_worked || !description || !query) {
        alert("Enter All Mandatary Fields");
      }
      if (!hours_worked.trim() || !description.trim() || !query.trim()) {
        return;
      }
      if (isNaN(hours_worked)) {
        alert("Number Of Hours Is Not a Number");
        return;
      }
      if (parseFloat(hours_worked) > 8) {
        alert("Total Number of working hours should not exceed 8 hours");

        return;
      }

      var bug = this.store.createRecord('bug', {
        bugid: bugid,
        hours: hours_worked,
        description: description,
        query: query,

        isActive: true


      });

      // Clear the "New Todo" text field
      bug.save();

      alert("Record Added");
    }
  }
});
