import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('article');
  },

  actions: {
    update(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          article.set(key, params[key]);
        }
      });
      article.save();
    },
    save(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
    },
    delete(article) {
      if (confirm("Are you SURE?")) {
        article.destroyRecord();
      }
    }
  }
});
