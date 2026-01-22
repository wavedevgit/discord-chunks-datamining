/** Chunk was on web.js **/
/** chunk id: 65821, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk860511 = require("./860511.js"),
  Chunk985848 = require("./985848.js"),
  Chunk43902 = require("./43902.js"),
  o = "WebAssembly",
  l = Chunk860511[o],
  c = 7 !== Error("e", {
    cause: 7
  }).cause,
  u = function(e, t) {
    var n = {};
    n[e] = s(e, t, c), r({
      global: true,
      constructor: true,
      arity: 1,
      forced: c
    }, n)
  },
  d = function(e, t) {
    if (l && l[e]) {
      var n = {};
      n[e] = s(o + "." + e, t, c), r({
        target: o,
        stat: true,
        constructor: true,
        arity: 1,
        forced: c
      }, n)
    }
  };
u("Error", function(e) {
  return function(t) {
    return a(e, this, arguments)
  }
}), u("EvalError", function(e) {
  return function(t) {
    return a(e, this, arguments)
  }
}), u("RangeError", function(e) {
  return function(t) {
    return a(e, this, arguments)
  }
}), u("ReferenceError", function(e) {
  return function(t) {
    return a(e, this, arguments)
  }
}), u("SyntaxError", function(e) {
  return function(t) {
    return a(e, this, arguments)
  }
}), u("TypeError", function(e) {
  return function(t) {
    return a(e, this, arguments)
  }
}), u("URIError", function(e) {
  return function(t) {
    return a(e, this, arguments)
  }
}), d("CompileError", function(e) {
  return function(t) {
    return a(e, this, arguments)
  }
}), d("LinkError", function(e) {
  return function(t) {
    return a(e, this, arguments)
  }
}), d("RuntimeError", function(e) {
  return function(t) {
    return a(e, this, arguments)
  }
})