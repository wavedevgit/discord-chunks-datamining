/** Chunk was on web.js **/
/** chunk id: 415506, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk127849 = require("./127849.js"),
  Chunk636881 = require("./636881.js"),
  Chunk163641 = require("./163641.js"),
  s = "WebAssembly",
  l = Chunk127849[s],
  c = 7 !== Error("e", {
    cause: 7
  }).cause,
  u = function(e, t) {
    var n = {};
    n[e] = a(e, t, c), r({
      global: true,
      constructor: true,
      arity: 1,
      forced: c
    }, n)
  },
  d = function(e, t) {
    if (l && l[e]) {
      var n = {};
      n[e] = a(s + "." + e, t, c), r({
        target: s,
        stat: true,
        constructor: true,
        arity: 1,
        forced: c
      }, n)
    }
  };
u("Error", function(e) {
  return function(t) {
    return o(e, this, arguments)
  }
}), u("EvalError", function(e) {
  return function(t) {
    return o(e, this, arguments)
  }
}), u("RangeError", function(e) {
  return function(t) {
    return o(e, this, arguments)
  }
}), u("ReferenceError", function(e) {
  return function(t) {
    return o(e, this, arguments)
  }
}), u("SyntaxError", function(e) {
  return function(t) {
    return o(e, this, arguments)
  }
}), u("TypeError", function(e) {
  return function(t) {
    return o(e, this, arguments)
  }
}), u("URIError", function(e) {
  return function(t) {
    return o(e, this, arguments)
  }
}), d("CompileError", function(e) {
  return function(t) {
    return o(e, this, arguments)
  }
}), d("LinkError", function(e) {
  return function(t) {
    return o(e, this, arguments)
  }
}), d("RuntimeError", function(e) {
  return function(t) {
    return o(e, this, arguments)
  }
})