/** Chunk was on web.js **/
/** chunk id: 916354, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk410323 = require("./410323.js"),
  Chunk273761 = require("./273761.js"),
  s = RangeError,
  o = String.fromCharCode,
  l = String.fromCodePoint,
  c = Chunk410323([].join);
Chunk557939({
  target: "String",
  stat: true,
  arity: 1,
  forced: !!l && 1 !== l.length
}, {
  fromCodePoint: function(e) {
    for (var t, n = [], r = arguments.length, i = 0; r > i;) {
      if (t = +arguments[i++], a(t, 1114111) !== t) throw new s(t + " is not a valid code point");
      n[i] = t < 65536 ? o(t) : o(((t -= 65536) >> 10) + 55296, t % 1024 + 56320)
    }
    return c(n, "")
  }
})