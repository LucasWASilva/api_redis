// const Redis = require('../config/redis');
// const { promisify } = require('util');


// async function getValue(key) {
//     const getAsync = promisify(Redis.get).bind(Redis);
//     const result = await getAsync(key);
//     return JSON.parse(result);
// }

// async function setValue(key, value) {
//     const setAsync = promisify(Redis.set).bind(Redis);
//     await setAsync(key, JSON.stringify(value));
// }

// async function setValueWithExpire(key, value, expiration) {
//     const setAsyncEx = promisify(Redis.set).bind(Redis);
//     await setAsyncEx(key, JSON.stringify(value), 'Ex', expiration);
// }

// module.exports = { setValue, getValue, setValueWithExpire };

// services/redisClient.js
const Redis = require('../config/redis');

async function getValue(key) {
    const result = await Redis.get(key);
    return JSON.parse(result);
}

async function setValue(key, value) {
    await Redis.set(key, JSON.stringify(value));
}

async function setValueWithExpire(key, value, expiration) {
    await Redis.setEx(key, expiration, JSON.stringify(value));
}

module.exports = { setValue, getValue, setValueWithExpire };
