/** Chunk was on 94678 **/
/** chunk id: 188701, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk529030 = require("./529030.js"),
  Chunk794779 = require("./794779.js"),
  Chunk348878 = require("./348878.js"),
  Chunk279740 = require("./279740.js");
Chunk834647({
  target: "Array",
  proto: true,
  arity: 1,
  forced: require("./486816.js")(function() {
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
      e = s(r),
      n = arguments.length;
    u(e + n);
    for (var c = 0; c < n; c++) r[e] = arguments[c], e++;
    return i(r, e), e
  }
})