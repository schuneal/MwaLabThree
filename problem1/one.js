const dns=require('dns');
const util=require('util');

//using resolve4()
dns.resolve4('www.mum.edu',function(err,result){
    console.log("1. The ip address is: " + result);
})

///using promise
const myPromise=util.promisify(dns.resolve4);

myPromise('www.mum.edu')
.then(data=>{
    console.log("2. The ip address is: " + data);
})
.catch(err=>console.log(err));


///using await/async
async function  asyncAwait(){
    const  ipAddress=await myPromise('www.mum.edu');
    console.log("3. The ip address is: " +ipAddress);
}

asyncAwait();