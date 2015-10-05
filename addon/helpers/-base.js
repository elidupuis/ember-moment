import Ember from 'ember';

export default Ember.Helper.extend({
  moment: Ember.inject.service(),

  localeDidChange: Ember.observer('moment.locale', function() {
    this.recompute();
  }),

  timeZoneDidChange: Ember.observer('moment.timeZone', function() {
    this.recompute();
  }),

  parseMoment(time, { locale, timeZone }) {
    locale = locale || this.get('moment.locale');

    if (locale) {
      time = time.locale(locale);
    }

    timeZone = timeZone || this.get('moment.timeZone');

    if (timeZone && time.tz) {
      time = time.tz(timeZone);
    }

    return time;
  }
});
