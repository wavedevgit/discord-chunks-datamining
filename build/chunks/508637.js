/** Chunk was on 50448 **/
/** chunk id: 508637, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk475424 = require("./475424.js"),
  Chunk174344 = require("./174344.js"),
  Chunk877918 = require("./877918.js"),
  Chunk297523 = require("./297523.js");
Chunk220159({
  target: "Array",
  proto: true,
  arity: 1,
  forced: require("./779688.js")(function() {
    return 0x100000001 !== [].push.call({
      length: 0x100000000
    }, 1)
  }) || ! function() {
    try {
      Object.defineProperty([], "length", {
        writable: false
      }).push()
    } catch (t) {
      return t instanceof TypeError
    }
  }()
}, {
  push: function(t) {
    var r = o(this),
      n = i(r),
      e = arguments.length;
    s(n + e);
    for (var c = 0; c < e; c++) r[n] = arguments[c], n++;
    return u(r, n), n
  }
})