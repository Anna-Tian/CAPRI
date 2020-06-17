const crypto = require('crypto')

// The secret key
const SECRET_KEY = 'WJiol_8776#';

// md5 encryption
function md5(content) {
    let md5 = crypto.createHash('md5');
    return md5.update(content).digest('hex');
}

// Encryption with secret key through md5
function genPassword(password) {
    const str = `password=${password}&key=${SECRET_KEY}`; // The splicing method is customized, as long as the key is included
    return md5(str)
}

module.exports = {
    genPassword
}