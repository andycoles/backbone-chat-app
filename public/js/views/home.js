var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone');

module.exports = Backbone.View.extend({

  initialize: function () {
    this.render();
  },

  template: _.template($("#home-tpl").html()),

  render: function () {
    this.$el.html(this.template({}));
    return this;
  }

});

