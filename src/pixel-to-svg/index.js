var pixel= require('pixel');
var svg= require('pixel-to-svg');
pixel('11.png')
.then(function(images){
  console.log(svg.convert(images[0]));
});