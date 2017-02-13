var request = require('request');
var cheerio = require('cheerio');

request('https://www.linkedin.com/vsearch/f?keywords=CIO&trk=tyah&trkInfo=clickedVertical%3Ahistory,entityType%3AqueryHistoryName,clickedEntityId%3Ahistory_CIO,idx%3A0&rsid=3238974721486922974350&openFacets=N,G,CC&page_num=1&pt=peopledx%3A0', function(err, res, body) {
    if (err) console.log('Erro: ' + err);
    var $ = cheerio.load(body);

    /* console.log($('#body > .wrapper > #srp_main_ > #srp_container > #results-col > #results-container > ol').find('li').length); */

});
