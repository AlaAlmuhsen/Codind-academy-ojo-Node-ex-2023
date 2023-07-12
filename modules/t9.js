const crypto = require('crypto');

const inputString = "Hello, World!";

// Create a hash object using the desired algorithm (e.g., 'sha256')
const hash = crypto.createHash('sha256');

// Update the hash object with the input string
hash.update(inputString);

// Calculate the hash digest
const hashDigest = hash.digest('hex');

console.log(hashDigest);