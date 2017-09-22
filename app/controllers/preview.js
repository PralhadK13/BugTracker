export default Ember.Controller.extend({

  actions: {
    // /* goHome: function() {
    //    this.transitionTo('bugresolve');
    //  },*/
    //  editTd: function() {
    //    this.set('isEditing', false);
    //  },
    //  displayRecord: function() {

    //    this.transitionTo('bugresolve.display');
    //  },
    //  validateHours: function() {
    //    alert(hours);
    //  },

    updateRecord: function() {
      var bugid = this.get('bugid');
      var hours_worked = this.get('hours');
      var description = this.get('description');
      var query = this.get('query');
      if (bugid == undefined) {
        bugid = "";
      }

      if (!hours_worked || !description || !query) {
        alert("Enter All Mandatary Fields")
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

      this.set('bugid', bugid);
      this.set('hours', hours_worked);
      this.set('description', description);
      this.set('query', query);
      // Clear the "New Todo" text field

      alert("Record Updated ");


    },

    deleteRecord: function() {


      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
      this.transitionTo('display');

    }



  },
  isEditing: false



});