import { group } from 'k6';
const scenario = require('./scenarios.js')

export let options = scenario.options;

const steps = require('./steps.js');

export default function () {
    group('Go to home page', function () {
      steps.goToHomePage()
    })

    group('Go to category page', function () {
      steps.goToCategoryPage()
    })

    group('Go to product page', function () {
      steps.goToProductPage()
    })
     
    group('Navigate to category page', function() {
      steps.goToHomePage()
      steps.goToCategoryPage()
    })

    group('Navigate to product page', function () {
      steps.goToHomePage()
      steps.goToCategoryPage()
      steps.goToProductPage()
    })
}