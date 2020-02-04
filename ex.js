var fs=require('fs');

console.log("첫번째 기능");
// fs.readFile('test.txt','utf8',function(err,result){
// 	if(err){
// 		console.error(err);
// 		throw err;

// 	}
// 	else{
// 		console.error("두번쨰기능");
// 		console.log(result);
// 	}
// });
 var result= fs.readFileSync('test.txt','utf8');

console.log(result);
console.log('마지막기능');