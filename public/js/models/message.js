module.exports = Backbone.Model.extend({

  intialize: function() {
    this.date = new Date();
  },

  defaults: {
    content: "",
    sender: "",
    recipients: [],
  }

}
