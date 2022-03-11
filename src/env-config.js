const user = __ENV.USER
const password = __ENV.PASSWORD
const environment = __ENV.ENVIRONMENT
const credentials = `${user}:${password}`

let baseUrl = "http://localhost:3000"

if(environment == 'DEV') {
    baseUrl = `https://${credentials}@dev.derekrose.com`
}

if(environment == 'TEST') {
    baseUrl = `https://${credentials}@test.derekrose.com`
}

if(environment == 'PROD') {
    baseUrl = `https://${credentials}@prod.derekrose.com`
}

module.exports = {
    baseUrl,
};