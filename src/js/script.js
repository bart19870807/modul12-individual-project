// import { settings } from './settings.js';
// {
'use strict';

// const { data } = require("autoprefixer");
// const { create } = require("browser-sync");

    
//   const app = {
//     initData: function() {
//       const url = settings.db.url + '/' + settings.db.products;
//       this.data = {};
//       console.log(url);
//       fetch(url)
//         .then((rawResponse) => {
//           return rawResponse.json();
//         })
//         .then((parsedResponse) => {
//           this.data.products = parsedResponse;
//         });
//     },
    

//     init: function() {
//       const thisApp = this;
//       thisApp.initData();
      
//     },
//   };

//   app.init();
// }

// const urlWithBadDomain = 'http://localhost:3131/products';

// fetch(url)
//   .then(function(rawResponse){
//     return rawResponse.json();
//   })
//   .then(function(parsedResponse){
//     console.log(parsedResponse);
//   });

// fetch(urlWithBadDomain)
//   .then(rawResponse => {
//     if (rawResponse.status >= 200 && rawResponse.status < 300) {
//       return rawResponse.json();
//     } else {
//       return Promise.reject(rawResponse.status + ' ' + rawResponse.statusText);
//     }
//   })
//   .then(parsedResponse => {
//     console.log(parsedResponse);
//   })
//   .catch((error)=>{
//     console.log('CONNECTION ERROR', error);
//   });

// console.log('hello');

// function createHTML(productsData) {
//   let rawTemplate = document.getElementById('productTamplet').innerHTML;
//   let compiledTemplate = Handlebars.compile(rawTemplate);
//   let ourGeneratedHTML = compiledTemplate(productsData);
//   console.log(rawTemplate);
// }

const naviElement = document.querySelectorAll('#navi a');
naviElement.forEach(function(element){
  element.addEventListener('click', function(event){
    event.preventDefault();

    const activeElement = document.querySelector('.page.active');
    activeElement.classList.remove('active');

    const href = element.getAttribute('href');
    const section = document.querySelector(href);

    section.classList.add('active');
  })
})
