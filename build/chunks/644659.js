/** Chunk was on web.js **/
"use strict";
var r, i, o, a = n(197047),
  s = n(161581),
  l = n(622281),
  c = n(251069),
  u = n(740362),
  d = n(801127),
  f = n(883539),
  _ = n(624906),
  p = "Object already initialized",
  h = s.TypeError,
  g = s.WeakMap,
  m = function(e) {
    return o(e) ? i(e) : r(e, {})
  },
  E = function(e) {
    return function(t) {
      var n;
      if (!l(t) || (n = i(t)).type !== e) throw h("Incompatible receiver, " + e + " required");
      return n
    }
  };
if (a || d.state) {
  var v = d.state || (d.state = new g);
  v.get = v.get, v.has = v.has, v.set = v.set, r = function(e, t) {
    if (v.has(e)) throw h(p);
    return t.facade = e, v.set(e, t), t
  }, i = function(e) {
    return v.get(e) || {}
  }, o = function(e) {
    return v.has(e)
  }
} else {
  var b = f("state");
  _[b] = !0, r = function(e, t) {
    if (u(e, b)) throw h(p);
    return t.facade = e, c(e, b, t), t
  }, i = function(e) {
    return u(e, b) ? e[b] : {}
  }, o = function(e) {
    return u(e, b)
  }
}
e.exports = {
  set: r,
  get: i,
  has: o,
  enforce: m,
  getterFor: E
}