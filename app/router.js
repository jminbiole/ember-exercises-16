import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blogs');
  this.route('bookmarks');
  this.route('contacts');
});

export default Router;
