const os = require('os');
const user = os.userInfo();
console.log(user,"user");


const hostname = os.hostname()
console.log(hostname,"hostname");

const release = os.release()
console.log(release,"release is here");

const freeMem = os.freemem()
console.log(freeMem/(1024*1024),"free memory");

const totalMem = os.totalmem(t);
console.log(totalMem/(1024*1024),"total");



