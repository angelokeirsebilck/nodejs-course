const os = require('os');

// User info
const user = os.userInfo();
console.log(user);

// system uptime in seconds
console.log(os.uptime());
