const os =require('os');

console.log("CPU Architecture: "+ os.arch());

console.log("Free memory: "+os.freemem());

console.log("Network Intetrface: "+ JSON.stringify(os.networkInterfaces()));

console.log("Temp Dir: "+ os.tmpdir());

console.log("Endiannes:" + os.endianness);

console.log("Hostname: "+ os.hostname());

console.log("OS type: " + os.type());

console.log("OS platform: " + os.platform);

console.log("OS release: " + os.release());
