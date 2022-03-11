const options = {
    scenarios: {
      perpetual_traffic_on_home_page: {
        executor: 'constant-vus',
        vus: 20,
        duration: '1m',
        tags: { homePage_tag: 'Go to home page' },
      },
      perpetual_traffic_on_category_page: {
        executor: 'constant-vus',
        vus: 8,
        duration: '1m',
        tags: { categoryPage_tag: 'Go to category page' }
      },
      perpetual_traffic_on_product_page: {
        executor: 'constant-vus',
        vus: 12,
        duration: '1m',
        tags: { categoryPage_tag: 'Go to product page' }
      },
      category_page_scenario: {
        executor: 'ramping-vus',
        startTime: '10s',
        gracefulRampDown: '5s',
        gracefulStop: '5s',
        tags: { example_tag: 'Navigate to category page' },
        startVUs: 0,
        stages: [
          { duration: '5s', target: 50 },
          { duration: '30', target: 0 },
        ],
      },
      product_page_scenario: {
        executor: 'ramping-vus',
        startTime: '15s',
        gracefulRampDown: '5s',
        gracefulStop: '5s',
        tags: { example_tag: 'Navigate to product page' },
        startVUs: 0,
        stages: [
          { duration: '5s', target: 10 },
          { duration: '30', target: 0 },
        ],
      }
    }
  }

  module.exports = {
      options,
  }