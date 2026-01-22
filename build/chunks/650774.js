/** Chunk was on 35511 **/
/** chunk id: 650774, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk675879 = require("./675879.js"),
  Chunk798325 = require("./798325.js"),
  i = RangeError,
  s = String.fromCharCode,
  l = String.fromCodePoint,
  c = Chunk675879([].join);
Chunk834647({
  target: "String",
  stat: true,
  arity: 1,
  forced: !!l && 1 !== l.length
}, {
  fromCodePoint: function(e) {
    for (var t, n = [], r = arguments.length, a = 0; r > a;) {
      if (t = +arguments[a++], o(t, 1114111) !== t) throw new i(t + " is not a valid code point");
      n[a] = t < 65536 ? s(t) : s(((t -= 65536) >> 10) + 55296, t % 1024 + 56320)
    }
    return c(n, "")
  }
})