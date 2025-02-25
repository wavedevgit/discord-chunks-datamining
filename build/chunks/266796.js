/** Chunk was on web.js **/
"use strict";
var r = n(147018),
  i = n(325008),
  o = n(161581),
  a = n(581031),
  s = n(740362),
  l = n(354848),
  c = n(838957),
  u = n(714050),
  d = n(4340),
  f = n(381740),
  p = o.Symbol,
  _ = p && p.prototype;
if (i && l(p) && (!("description" in _) || void 0 !== p().description)) {
  var h = {},
    m = function() {
      var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : u(arguments[0]),
        t = c(_, this) ? new p(e) : void 0 === e ? p() : p(e);
      return "" === e && (h[t] = !0), t
    };
  f(m, p), m.prototype = _, _.constructor = m;
  var g = "Symbol(description detection)" === String(p("description detection")),
    E = a(_.valueOf),
    v = a(_.toString),
    b = /^Symbol\((.*)\)[^)]+$/,
    y = a("".replace),
    O = a("".slice);
  d(_, "description", {
    configurable: !0,
    get: function() {
      var e = E(this);
      if (s(h, e)) return "";
      var t = v(e),
        n = g ? O(t, 7, -1) : y(t, b, "$1");
      return "" === n ? void 0 : n
    }
  }), r({
    global: !0,
    constructor: !0,
    forced: !0
  }, {
    Symbol: m
  })
}