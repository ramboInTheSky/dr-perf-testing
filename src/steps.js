import http from 'k6/http';
import { check, sleep } from 'k6';
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

const url = require('./env-config.js');
const baseUrl = url.baseUrl;

function getWebPage(url) {
  let res = http.get(url)
        check(res, {
            'status is 200': (r) => r.status === 200,
        })
        return res
}

function randomSleep() {
  sleep(randomIntBetween(1, 10)
  )}

function goToHomePage() {
  let response = getWebPage(baseUrl);
    check(response, {'Homepage body is not null': (res) => res.body.length != null,
  })
  randomSleep()
}

function goToCategoryPage() {
  let response = getWebPage(`${baseUrl}/dressing-gowns/`)
    check(response, {'Category page body is not null': (res) => res.body.length != null,
  })
  randomSleep()
}

function goToProductPage() {
  let response = getWebPage(`${baseUrl}/men-s-lounge-gown-3092-balm003nav/`)
    check(response, {'Product page body is not null': (res) => res.body.length != null,
  })
  randomSleep()
}

module.exports = {
    goToHomePage,
    goToCategoryPage,
    goToProductPage,
}