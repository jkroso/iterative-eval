
var run = require('eval-as-module')

// TODO: look into super weird bug were aliasing eval
// causes require to disappear. It would be nice to alias
// eval so it can't override itself

var initCode = '(function*(){\n\
  while (1)\n\
    try { yield ["result", eval(yield 0)] }\n\
    catch (e) { yield ["error", e] }\n\
}).call(this)'

function Evaluator(path){
  this.gen = run(initCode, path).return
}

Evaluator.prototype.eval = function(js){
  this.gen.next() // goto `yield 0`
  var result = this.gen.next(js).value
  if (result[0] == 'error') throw result[1]
  return result[1]
}

module.exports = Evaluator
