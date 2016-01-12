var Message = require("message");
module.exports = Backbone.Model.extend({

  intialize: function() {
    this.messages = new MessagesCollection();
  },

  defaults: {
    title: "",
    lastMsg: "",
    lastMsgTime: "",
    initiator: "",
    recipients: ""
  }

}
