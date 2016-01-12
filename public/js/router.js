var $ = require('jquery'),
    Backbone = require('backbone'),
    PageSlider = require('./utils/pageSlider'),
    HomeView = require('./views/home'),
    ContactsView = require('./views/contacts'),

    slider = new PageSlider($('body')),

    homeView = new HomeView(),
    contactsView = new ContactsView();

module.exports = Backbone.Router.extend({

  routes: {
    "": "home",
    "contacts": "contacts"
  },

  home: function() {
    homeView.delegateEvents();
    slider.slidePage(homeView.$el);
  },

  contacts: function() {
    contactsView.delegateEvents();
    slider.slidePage(contactsView.$el);
  }

});

