import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteBm(bm) {
      if (confirm('Does this bookmark no longer satisfy you?')) {
        if (confirm !== true) {
          alert("I WILL BANKSH IT!!");
        }
        fetch('https://tiny-tn.herokuapp.com/collections/jm-bookmarks/' + bm._id, {
          method: 'Delete',
        }).then(() => {
          const updateList = this.model.filter((item) => {
            return item._id !== bm._id;
          });

          this.set('model', updateList);
        });
      }
    },
  enteredInfo() {
    const newInfo = {
      nickname: this.nickname,
      url: this.url,
    };
    if (newInfo.nickname === '' || newInfo.url === '') {
      confirm("Looks like you're missing something, silly!");
      return;
    }

    fetch('https://tiny-tn.herokuapp.com/collections/jm-bookmarks', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'post',
      body: JSON.stringify(newInfo),
    }) .then((res) => res.json())
        .then((enteredInfo) => {
          this.set('model', [...this.model, enteredInfo]);
    });
  }
}
});
