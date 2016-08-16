import Ember from 'ember';
// import userInfo from 'index';

export default Ember.Controller.extend({
  actions: {
    deletePerson(person) {
      if (confirm('Are you sure you want to remove them from existence?')) {
        if (confirm !== true) {
          alert("They have been dealt with. I hope you can sleep tonight.");
        }
        fetch('https://tiny-tn.herokuapp.com/collections/jm-people/' + person._id, {
          method: 'Delete',
        }).then(() => {
          const updatedList = this.model.filter((item) => {
            return item._id !== person._id;
          });

          this.set('model', updatedList);
        });
      }
    },
    seeContacts() {
      this.toggleProperty('showingContacts');
    },
    infoInput() {
      const userInfo = {
        first: this.first,
        last: this.last,
        address: this.address,
        phone: this.phone,
      };
      if (userInfo.first === '' || userInfo.last === '' || userInfo.address === '' || userInfo.phone === '') {
        alert('All fields are not filled in. Please make sure all are filled in.');
        return;
      }

      fetch(`https://tiny-tn.herokuapp.com/collections/jm-people`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        method: 'post',
        body: JSON.stringify(userInfo),
      }) .then((res) => res.json())
          .then((infoInput) => {
            this.set('model', [...this.model, infoInput]);
      });
    },
  }
});
