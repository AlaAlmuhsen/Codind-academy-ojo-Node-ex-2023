const crypto = require('crypto');

// Generate a random 4-byte buffer
const buffer = crypto.randomBytes(4);

// Convert the buffer to a random number
const randomNumber = buffer.readUInt32BE(0);

console.log(randomNumber);