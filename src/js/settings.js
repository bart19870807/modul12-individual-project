// eslint-disable-next-line no-unused-vars
const settings = {
  db: {
    url: '//localhost:3131',
    products: 'products',
    // orders: 'orders'
  },
};
// console.log(location.hash);

// This will listen for the fragment identifier change

// function loadContent(){
//   let contentDiv =document.getElementById('app');
//   contentDiv.innerHTML = location.hash;
// }
// if(!location.hash){
//   location.hash = '#home';
// }
// loadContent();
// window.addEventListener('hashchange',loadContent );
function getContent(fragmentId){

  // lets do some custom content for each page of your website
  let pages = {
    home: 'home',
    about: 'This page will describe what my site is about',
    contact: 'Contact me on this page if you have any questions'
  };
  
  // look up what fragment you are searching for in the object
  return pages[fragmentId];
}
  
function loadContent(){
  
  var contentDiv = document.getElementById("app"),
    fragmentId = location.hash.substr(1);
  
  contentDiv.innerHTML = getContent(fragmentId);
}
  
if(!location.hash) {
  location.hash = '#home';
}
  
loadContent();
  
window.addEventListener('hashchange', loadContent)
