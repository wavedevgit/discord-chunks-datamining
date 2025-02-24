/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(147018),
  i = n(339718),
  o = n(49693),
  a = n(610148),
  s = n(708517),
  l = n(886960),
  c = 1 !== [].unshift(0),
  u = function() {
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).unshift()
    } catch (e) {
      return e instanceof TypeError
    }
  };
r({
  target: "Array",
  proto: !0,
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