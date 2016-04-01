import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  author: DS.attr(),
  submitted: DS.attr(),
  category: DS.attr(),
  body: DS.attr()
});
