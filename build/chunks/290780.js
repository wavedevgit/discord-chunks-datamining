/** Chunk was on web.js **/
/** chunk id: 290780, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk527160 = require("./527160.js"),
  Chunk914331 = require("./914331.js"),
  Chunk640883 = require("./640883.js"),
  Chunk992032 = require("./992032.js"),
  Chunk861567 = require("./861567.js"),
  c = 1 !== [].unshift(0),
  u = function() {
    try {
      Object.defineProperty([], "length", {
        writable: false
      }).unshift()
    } catch (e) {
      return module instanceof TypeError
    }
  };
Chunk98405({
  target: "Array",
  proto: true,
  arity: 1,
  forced: c || !u()
}, {
  unshift: function(e) {
    var t = i(this),
      n = o(t),
      r = arguments.length;
    if (r) {
      l(n + r);
      for (var c = n; c--;) {
        var u = c + r;
        c in t ? t[u] = t[c] : s(t, u)
      }
      for (var d = 0; d < r; d++) t[d] = arguments[d]
    }
    return a(t, n + r)
  }
})