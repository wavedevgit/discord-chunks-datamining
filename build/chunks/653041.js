/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
var r = n(147018),
  i = n(339718),
  o = n(49693),
  a = n(610148),
  s = n(886960),
  l = n(936940)(function() {
    return 0x100000001 !== [].push.call({
      length: 0x100000000
    }, 1)
  }),
  c = function() {
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).push()
    } catch (e) {
      return e instanceof TypeError
    }
  };
r({
  target: "Array",
  proto: !0,
  arity: 1,
  forced: l || !c()
}, {
  push: function(e) {
    var t = i(this),
      n = o(t),
      r = arguments.length;
    s(n + r);
    for (var l = 0; l < r; l++) t[n] = arguments[l], n++;
    return a(t, n), n
  }
})