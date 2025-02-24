/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
var r = n(67867),
  i = n(611345),
  o = n(474883),
  a = n(520078),
  s = n(741674),
  l = n(821819)(function() {
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