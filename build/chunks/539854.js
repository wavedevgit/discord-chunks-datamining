/** Chunk was on web.js **/
/** chunk id: 539854, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk527160 = require("./527160.js"),
  Chunk914331 = require("./914331.js"),
  Chunk640883 = require("./640883.js"),
  Chunk861567 = require("./861567.js"),
  l = require("./621523.js")(function() {
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
      return module instanceof TypeError
    }
  };
Chunk98405({
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