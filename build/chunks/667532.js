/** Chunk was on web.js **/
/** chunk id: 667532, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk250594 = require("./250594.js"),
  Chunk503199 = require("./503199.js"),
  Chunk496538 = require("./496538.js"),
  Chunk762503 = require("./762503.js"),
  Chunk732376 = require("./732376.js"),
  c = 1 !== [].unshift(0),
  u = function() {
    try {
      Object.defineProperty([], "length", {
        writable: false
      }).unshift()
    } catch (e) {
      return e instanceof TypeError
    }
  };
Chunk557939({
  target: "Array",
  proto: true,
  arity: 1,
  forced: c || !u()
}, {
  unshift: function(e) {
    var t = i(this),
      n = a(t),
      r = arguments.length;
    if (r) {
      l(n + r);
      for (var c = n; c--;) {
        var u = c + r;
        c in t ? t[u] = t[c] : s(t, u)
      }
      for (var d = 0; d < r; d++) t[d] = arguments[d]
    }
    return o(t, n + r)
  }
})