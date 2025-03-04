/** Chunk was on web.js **/
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
  _ = String,
  p = Object.defineProperty,
  h = r("".slice),
  g = r("".replace),
  m = r([].join),
  E = s && !i(function() {
    return 8 !== p(function() {}, "length", {
      value: 8
    }).length
  }),
  v = String(String).split("String"),
  b = e.exports = function(e, t, n) {
    "Symbol(" === h(_(t), 0, 7) && (t = "[" + g(_(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!a(e, "name") || l && e.name !== t) && (s ? p(e, "name", {
      value: t,
      configurable: !0
    }) : e.name = t), E && n && a(n, "arity") && e.length !== n.arity && p(e, "length", {
      value: n.arity
    });
    try {
      n && a(n, "constructor") && n.constructor ? s && p(e, "prototype", {
        writable: !1
      }) : e.prototype && (e.prototype = void 0)
    } catch (e) {}
    var r = d(e);
    return a(r, "source") || (r.source = m(v, "string" == typeof t ? t : "")), e
  };
Function.prototype.toString = b(function() {
  return o(this) && f(this).source || c(this)
}, "toString")