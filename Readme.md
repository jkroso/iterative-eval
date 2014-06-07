
# iterative-eval

Iteratively evaluate code in a single context as you would in a repl. You _can_ do this using `vm.createContext` and `vm.runInContext` but bugs in `vm`'s implementation make this pretty leaky.

## Installation

With your favorite package manager:

- [packin](//github.com/jkroso/packin): `packin add iterative-eval`
- [npm](//npmjs.org/doc/cli/npm-install.html): `npm install iterative-eval`

then in your app:

```js
var Evaluator = require('iterative-eval')
```

## API

### Evaluator(path)

Creates a new evaluation context. If you pass a `path` all code evaluated by it the Evaluator will be run as if it was being run from that file system location. So `require`, `__filename` etc.. can all work as expected.

```js
var ctx = new Evaluator(__filename)
```

### ctx#eval(js)

Execute `js` and return the result

```js
ctx.eval("var a=1") // => undefined
ctx.eval("a") // => 1
ctx.eval("require('iterative-eval')") // => Evaluator
ctx.eval("__dirname") // => __dirname
```
