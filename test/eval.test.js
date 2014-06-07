
var assert = require('better-assert')
var Evaluator = require('..')

it('should maintain scope between iterations', function(){
  var ctx = new Evaluator(__dirname + '/path')
  assert(ctx.eval('var a=1;a') == 1)
  assert(ctx.eval('a') == 1)
})

it('should protect against variable overriding', function(){
  var ctx = new Evaluator(__dirname + '/path')
  assert(ctx.eval('var eval=1;eval') == 1)
  try {
    assert(ctx.eval('eval') == 1)
  } catch (e) {
    if (/number is not a function/.test(e.message)) {
      throw new Error('eval has been overridden')
    } else {
      throw e
    }
  }
})

it('should provide a working `require`', function(){
  var ctx = new Evaluator(__dirname + '/path')
  assert(ctx.eval('require("..")') == Evaluator)
})