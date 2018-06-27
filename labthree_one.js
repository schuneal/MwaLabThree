const util = require('util');
const dns = require('dns');
//1. Using call back function
dns.resolve4('www.mum.edu', function (error, address) {
  console.log("1. IP address of www.mum.edu using callback: " + address);
});

//2. converting the callback function to a Promise object

const myPromise = util.promisify(dns.resolve4);
myPromise('www.mum.edu')
    .then(ip => console.log("2. IP address of www.mum.edu using promise: " + ip))
    .catch(err => console.log(err))
    

//3. converting promise to async/await block

async function main(){
    try {
        const ipaddress = await myPromise('www.mum.edu');
        console.log("3. IP address of www.mum.edu using async/await: " + ipaddress);
    } catch (error) {
        console.log("Error: " + error);
    }
}
main();





