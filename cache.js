/**
 * The lifetime in milliseconds
 *
 * 1 hour
 * 
 * @type {Number}
 */
const CACHE_LIFETIME = 1 * 60 * 60 * 1000

const cache = {
    
}

cache.get = key => {
    if (isCached(key)) {
        return cache[key]
    }
}

cache.add = (key, value) => {
    cache[key] = {
        value,
        time: Date.now()
    }
}

function isCached (key) {
    return cache[key] && (Date.now()) - cache[key].time < CACHE_LIFETIME
}

module.exports = cache