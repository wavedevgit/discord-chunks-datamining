/** Chunk was on 23357 **/
/** chunk id: 515152, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk764908 = require("./764908.js"),
  Chunk936839 = require("./936839.js"),
  i = RangeError,
  s = String.fromCharCode,
  c = String.fromCodePoint,
  l = Chunk764908([].join);
Chunk220159({
  target: "String",
  stat: true,
  arity: 1,
  forced: !!c && 1 !== c.length
}, {
  fromCodePoint: function(e) {
    for (var t, n = [], r = arguments.length, o = 0; r > o;) {
      if (t = +arguments[o++], a(t, 1114111) !== t) throw new i(t + " is not a valid code point");
      n[o] = t < 65536 ? s(t) : s(((t -= 65536) >> 10) + 55296, t % 1024 + 56320)
    }
    return l(n, "")
  }
})