/** Chunk was on web.js **/
/** chunk id: 321073, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk250594 = require("./250594.js"),
  Chunk503199 = require("./503199.js"),
  Chunk496538 = require("./496538.js"),
  Chunk732376 = require("./732376.js"),
  l = require("./503628.js")(function() {
    return 0x100000001 !== [].push.call({
      length: 0x100000000
    }, 1)
  }),
  c = function() {
    try {
      Object.defineProperty([], "length", {
        writable: false
      }).push()
    } catch (e) {
      return e instanceof TypeError
    }
  };
Chunk557939({
  target: "Array",
  proto: true,
  arity: 1,
  forced: l || !c()
}, {
  push: function(e) {
    var t = i(this),
      n = a(t),
      r = arguments.length;
    s(n + r);
    for (var l = 0; l < r; l++) t[n] = arguments[l], n++;
    return o(t, n), n
  }
})