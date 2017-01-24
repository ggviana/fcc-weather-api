const axios = require('axios')
const cache = require('./cache')

const API_KEY = process.env.API_KEY

const request = axios.create({
    baseURL: `http://api.wunderground.com/api/${API_KEY}`
})

module.exports = {
    get(locationCode) {
        return Promise.resolve()
            .then(() => {
                const cached = cache.get(locationCode)

                if (cached) {
                    return cached.value
                }

                return request.get(`/forecast/q/${locationCode}.json`)
                    .then(({data}) => {

                        cache.add(locationCode, data)

                        return data
                    })
            })

    }
}