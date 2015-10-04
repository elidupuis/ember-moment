import Ember from 'ember';
import moment from 'moment';

const { computed } = Ember;

export default Ember.Service.extend({
  _locale: null,

  locale: computed({
    get() {
      return this.get('_locale');
    },
    set(propertyKey, locale) {
      moment.locale(locale);
      this.set('_locale', locale);
      return locale;
    }
  }),

  changeLocale(locale) {
    this.set('locale', locale);
  },

  moment() {
    let value = moment(...arguments);
    let locale = this.get('locale');

    if (locale) {
      value = moment.locale(locale);
    }

    return value;
  }
});
