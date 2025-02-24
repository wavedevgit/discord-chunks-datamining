/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(811645);

function i(e, t, n, i, o, a, s) {
  try {
    var l = e[a](s),
      c = l.value
  } catch (e) {
    n(e);
    return
  }
  l.done ? t(c) : r.resolve(c).then(i, o)
}

function o(e) {
  return function() {
    var t = this,
      n = arguments;
    return new r(function(r, o) {
      var a = e.apply(t, n);

      function s(e) {
        i(a, r, o, s, l, "next", e)
      }

      function l(e) {
        i(a, r, o, s, l, "throw", e)
      }
      s(void 0)
    })
  }
}