/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
var r = n(325008),
  i = n(581031),
  o = n(926515),
  a = n(936940),
  s = n(835884),
  l = n(279129),
  c = n(610067),
  u = n(339718),
  d = n(470592),
  f = Object.assign,
  p = Object.defineProperty,
  _ = i([].concat);
e.exports = !f || a(function() {
  if (r && 1 !== f({
      b: 1
    }, f(p({}, "a", {
      enumerable: !0,
      get: function() {
        p(this, "b", {
          value: 3,
          enumerable: !1
        })
      }
    }), {
      b: 2
    })).b) return !0;
  var e = {},
    t = {},
    n = Symbol("assign detection"),
    i = "abcdefghijklmnopqrst";
  return e[n] = 7, i.split("").forEach(function(e) {
    t[e] = e
  }), 7 !== f({}, e)[n] || s(f({}, t)).join("") !== i
}) ? function(e, t) {
  for (var n = u(e), i = arguments.length, a = 1, f = l.f, p = c.f; i > a;)
    for (var h, m = d(arguments[a++]), g = f ? _(s(m), f(m)) : s(m), E = g.length, v = 0; E > v;) h = g[v++], (!r || o(p, m, h)) && (n[h] = m[h]);
  return n
} : f