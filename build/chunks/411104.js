/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
var r = n(147018),
  i = n(161581),
  o = n(197187),
  a = n(261987),
  s = "WebAssembly",
  l = i[s],
  c = 7 !== Error("e", {
    cause: 7
  }).cause,
  u = function(e, t) {
    var n = {};
    n[e] = a(e, t, c), r({
      global: !0,
      constructor: !0,
      arity: 1,
      forced: c
    }, n)
  },
  d = function(e, t) {
    if (l && l[e]) {
      var n = {};
      n[e] = a(s + "." + e, t, c), r({
        target: s,
        stat: !0,
        constructor: !0,
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