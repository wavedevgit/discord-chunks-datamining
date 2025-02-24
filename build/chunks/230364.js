/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
var r = n(581031),
  i = n(936940),
  o = n(354848),
  a = n(740362),
  s = n(325008),
  l = n(539459).CONFIGURABLE,
  c = n(943329),
  u = n(644659),
  d = u.enforce,
  f = u.get,
  p = String,
  _ = Object.defineProperty,
  h = r("".slice),
  m = r("".replace),
  g = r([].join),
  E = s && !i(function() {
    return 8 !== _(function() {}, "length", {
      value: 8
    }).length
  }),
  v = String(String).split("String"),
  b = e.exports = function(e, t, n) {
    "Symbol(" === h(p(t), 0, 7) && (t = "[" + m(p(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!a(e, "name") || l && e.name !== t) && (s ? _(e, "name", {
      value: t,
      configurable: !0
    }) : e.name = t), E && n && a(n, "arity") && e.length !== n.arity && _(e, "length", {
      value: n.arity
    });
    try {
      n && a(n, "constructor") && n.constructor ? s && _(e, "prototype", {
        writable: !1
      }) : e.prototype && (e.prototype = void 0)
    } catch (e) {}
    var r = d(e);
    return a(r, "source") || (r.source = g(v, "string" == typeof t ? t : "")), e
  };
Function.prototype.toString = b(function() {
  return o(this) && f(this).source || c(this)
}, "toString")