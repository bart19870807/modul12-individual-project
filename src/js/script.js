import { settings } from './settings.js';
{
  'use strict';
    
  const app = {
    initData: function() {
      const url = settings.db.url + '/' + settings.db.products;
      this.data = {};
      console.log(url);
      fetch(url)
        .then((rawResponse) => {
          return rawResponse.json();
        })
        .then((parsedResponse) => {
          this.data.products = parsedResponse;
        });
    },

    init: function() {
      const thisApp = this;
      thisApp.initData();
    },
  };

  app.init();
}

