import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
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
  }
}
});
