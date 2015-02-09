//needs
//npm i casperjs -g
//npm i phantomjs -g
//run with:
//casperjs index.js

var casper = require('casper').create();

var pages = [];
for(var i = 1; i <= 43; i++){
	if(i === 2 || i === 16) continue
	pages.push('http://localhost:8383/geo-'+i+'.html');
}

casper.start().each(pages, function(self, link) {
    self.thenOpen(link, function() {
    	var filename = link.replace('html', 'png').replace('http://localhost:8383/','');
        console.log('Capturing: ', filename);
        this.captureSelector('images/' + filename, '#image', {
	    	quality: 100
	    });
    });
});
casper.run();

