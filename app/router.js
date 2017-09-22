import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('edit');
  this.route('preview');
  this.route('display');
});

export default Router;
