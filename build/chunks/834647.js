/** Chunk was on 94678 **/
/** chunk id: 834647, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk308227 = require("./308227.js"),
  Chunk421236 = require("./421236.js"),
  Chunk375797 = require("./375797.js"),
  Chunk309270 = require("./309270.js"),
  u = require("./965746.js").f,
  Chunk800403 = require("./800403.js"),
  Chunk452162 = require("./452162.js"),
  Chunk241091 = require("./241091.js"),
  Chunk180734 = require("./180734.js"),
  Chunk512008 = require("./512008.js");
require("./574236.js");
var v = function(t) {
  var r = function(e, n, s) {
    if (this instanceof r) {
      switch (arguments.length) {
        case 0:
          return new t;
        case 1:
          return new t(e);
        case 2:
          return new t(e, n)
      }
      return new t(e, n, s)
    }
    return o(t, this, arguments)
  };
  return r.prototype = t.prototype, r
};
module.exports = function(t, r) {
  var e, o, y, h, x, d, g, b, m, S = t.target,
    w = t.global,
    O = t.stat,
    j = t.proto,
    A = w ? n : O ? n[S] : n[S] && n[S].prototype,
    E = w ? a : a[S] || p(a, S, {})[S],
    T = E.prototype;
  for (h in r) o = !(e = c(w ? h : S + (O ? "." : "#") + h, t.forced)) && A && l(A, h), d = E[h], o && (g = t.dontCallGetSet ? (m = u(A, h)) && m.value : A[h]), x = o && g ? g : r[h], (e || j || typeof d != typeof x) && (b = t.bind && o ? f(x, n) : t.wrap && o ? v(x) : j && i(x) ? s(x) : x, (t.sham || x && x.sham || d && d.sham) && p(b, "sham", true), p(E, h, b), j && (l(a, y = S + "Prototype") || p(a, y, {}), p(a[y], h, x), t.real && T && (e || !T[h]) && p(T, h, x)))
}