const dns=require('dns');
let url="www.mum.edu";

dns.resolve4(url,(error,address)=>
{ 
    console.log(`IP Address is ${address}`);
});
