var request = require('request');
var parseString=require('xml2js').parseString;
request('http://apis.data.go.kr/B552061/roadDgdgrHighway', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  //console.log(body.rss.channel); 얘는 안된다. 왜냐하면 xml 이므로 자바스크립트가 읽을수 있게 바꾸어 주어야한다
  parseString(body,function(err,result){
      console.log(result);
  });
});