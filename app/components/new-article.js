import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },
    save() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        category: this.get('category'),
        author: this.get('author'),
        body: this.get('body'),
        submitted: this.get('submitted')
      };
      this.set('addNewArticle', false);
      this.sendAction('save', params);
    }
  }
});
