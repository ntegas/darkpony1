AOS.init();


$(window).resize(function() {

    if ($(window).width() >= 992) {
        $('#card-6').remove().insertAfter($('#card-5'));
      } else if ($(window).width() <= 992) {
        $('#card-6').remove().insertAfter($('#card-10'));
      } 

  })



  // CACHE BUSTER ----

var uniqueNum = new Date().getTime();
var cssURL = 'main.css?ver=' + uniqueNum;
var cssElement=document.createElement('link')
cssElement.setAttribute('rel','stylesheet')
cssElement.setAttribute('type','text/css')
cssElement.setAttribute('href', './style/' + cssURL);
document.getElementsByTagName("head")[0].appendChild(cssElement);


// var jsURL = 'main.js?ver=' + uniqueNum;
// var jsElement=document.createElement('script')
// jsElement.setAttribute('src', './js/' + jsURL);
// document.getElementsByTagName("body")[0].appendChild(jsElement);


  // CACHE BUSTER  end----