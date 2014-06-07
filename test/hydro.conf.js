
/**
 * Hydro configuration
 *
 * @param {Hydro} hydro
 */

module.exports = function(hydro) {
  hydro.set({
    suite: 'iterative-eval',
    formatter: require('hydro-dot'),
    timeout: 500,
    plugins: [
      require('hydro-bdd')
    ],
    tests: ['test/eval.test.js']
  })
}
