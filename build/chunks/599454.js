/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
var r = n(67867),
  i = n(96403),
  o = n(223944),
  a = RangeError,
  s = String.fromCharCode,
  l = String.fromCodePoint,
  c = i([].join);
r({
  target: "String",
  stat: !0,
  arity: 1,
  forced: !!l && 1 !== l.length
}, {
  fromCodePoint: function(e) {
    for (var t, n = [], r = arguments.length, i = 0; r > i;) {
      if (t = +arguments[i++], o(t, 1114111) !== t) throw new a(t + " is not a valid code point");
      n[i] = t < 65536 ? s(t) : s(((t -= 65536) >> 10) + 55296, t % 1024 + 56320)
    }
    return c(n, "")
  }
})