## D3 sample code from tutplus.
##D3 resources :
# http://jsfiddle.net/crXK3/
# Interactive Data Visualization for the Web (ebook)

## http://www.hongkiat.com/blog/javascript-jargon/

// an immediately resolved promise
var p2 = Promise.resolve("foo"); 

// can get it after the fact, unlike events
p2.then((res) => console.log(res)); 

var p = new Promise(function(resolve, reject) {  
   setTimeout(() => resolve(4), 2000);
});

// handler can't change promise, just value
p.then((res) => {  
  res += 2;  
  console.log(res);
});

// still gets 4
p.then((res) => console.log(res)); 


##Importent Resources:
  https://brainhub.eu/blog/2016/05/30/9-famous-apps-using-node-js/   (Nodejs+++++++++++++)

##VIVI & SIRI DEMO

https://techcrunch.com/2016/05/09/siri-creator-shows-off-first-public-demo-of-viv-the-intelligent-interface-for-everything/


##Proxy issues tutorials##
###http://whatis.techtarget.com/definition/proxy-server
