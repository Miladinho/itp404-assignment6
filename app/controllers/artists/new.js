import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createArtist: function(e) {
      e.preventDefault();
      //console.log(this.get('model.artists'));
      var artistName = this.get("artistName");
      var promise = $.ajax({
        type: "post",
        url: "http://itp-api.herokuapp.com/api/artists",
        data: {
          name: artistName
        }
      });
      promise.then((result) => {
        console.log(result);
        //console.log(this.get('model'));
        this.set('artistName',null);
        var artists = this.get('model.artists');
        artists.pushObject(result.artist);
        this.transitionToRoute('artists');
      }, () => {
        alert("The artist \""+this.get("artistName")+"\" already exists!");
      });

    }
  }
});
