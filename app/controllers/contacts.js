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
    }
  }
});

// export default Ember.Controller.extend({
//   actions: {
//     deleteCat(kitty) {
//       if (confirm('Are you sure you want a cat right meow?')) {
//         fetch('https://tiny-tn.herokuapp.com/collections/cats/' + kitty._id, {
//           method: 'Delete',
//         }).then(() => {
//           const updatedList = this.model.filter((item) => {
//             // How do we know which items to let through
//             // Only let cats through that aren't the one we're deleting
//             return item._id !== kitty._id;
//           });
//
//           this.set('model', updatedList);
//         })
//       }
//     },
//     addCat() {
//       const newObj = {
//         name: this.name || '',
//         claws: this.claws || false,
//         color: this.color || '',
//         likesPeople: this.likesPeople || false,
//       };
//
//       if (newObj.name === '' || newObj.color === '') {
//         alert('Cat\'s must have a name and color');
//         return;
//       }
//
//       console.log(newObj);
//       fetch('https://tiny-tn.herokuapp.com/collections/cats', {
//         method: 'post',
//         body: JSON.stringify(newObj),
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//       }).then((res) => res.json())
//         .then((cat) => {
//           this.set('model', [...this.model, cat]);
//         });
//     }
//   }
// });
