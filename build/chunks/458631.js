/** Chunk was on web.js **/
/** chunk id: 458631, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk46015 = require("./46015.js"),
  Chunk201390 = require("./201390.js"),
  o = RangeError,
  s = String.fromCharCode,
  l = String.fromCodePoint,
  c = Chunk46015([].join);
Chunk98405({
  target: "String",
  stat: true,
  arity: 1,
  forced: !!l && 1 !== l.length
}, {
  fromCodePoint: function(e) {
    for (var t, n = [], r = arguments.length, i = 0; r > i;) {
      if (t = +arguments[i++], a(t, 1114111) !== t) throw new o(t + " is not a valid code point");
      n[i] = t < 65536 ? s(t) : s(((t -= 65536) >> 10) + 55296, t % 1024 + 56320)
    }
    return c(n, "")
  }
})