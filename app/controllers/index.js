import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  infoInput() {
    const data = {
      first: data.first,
      last: data.last,
      address: data.address,
      phone: data.phone,
    };

    fetch(`https://tiny-tn.herokuapp.com/collections/jm-people`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(data),
    });
  }
}
});
