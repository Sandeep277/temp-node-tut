const path = require('path');

console.log(path.sep)

const filePath = path.join('./content,', 'subfolder', 'test.txt')
console.log(filePath)
























// const os = require('os')

// // info about current user
// const user = os.userInfo()
// console.log(user)

// // method returns the system uptime in seconds
// console.log(`the system uptime ${os.uptime()} seconds`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }
// console.log(currentOS)