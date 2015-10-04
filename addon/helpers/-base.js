import Ember from 'ember';

export default Ember.Helper.extend({
  moment: Ember.inject.service(),

  localeDidChange: Ember.observer('moment.locale', function() {
    this.recompute();
  })
});
