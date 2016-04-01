import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleFormShow() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        category: this.get('category'),
        author: this.get('author'),
        body: this.get('body'),
        submitted: this.get('submitted')
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
