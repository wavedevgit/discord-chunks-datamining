/** Chunk was on 50448 **/
/** chunk id: 220159, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk424353 = require("./424353.js"),
  Chunk498996 = require("./498996.js"),
  Chunk661155 = require("./661155.js"),
  Chunk971428 = require("./971428.js"),
  s = require("./378105.js").f,
  Chunk417791 = require("./417791.js"),
  Chunk981994 = require("./981994.js"),
  Chunk324474 = require("./324474.js"),
  Chunk285007 = require("./285007.js"),
  Chunk185698 = require("./185698.js");
require("./723217.js");
var v = function(t) {
  var r = function(n, e, i) {
    if (this instanceof r) {
      switch (arguments.length) {
        case 0:
          return new t;
        case 1:
          return new t(n);
        case 2:
          return new t(n, e)
      }
      return new t(n, e, i)
    }
    return o(t, this, arguments)
  };
  return r.prototype = t.prototype, r
};
module.exports = function(t, r) {
  var n, o, y, h, x, d, g, b, m, S = t.target,
    w = t.global,
    O = t.stat,
    j = t.proto,
    A = w ? e : O ? e[S] : e[S] && e[S].prototype,
    E = w ? f : f[S] || p(f, S, {})[S],
    T = E.prototype;
  for (h in r) o = !(n = c(w ? h : S + (O ? "." : "#") + h, t.forced)) && A && l(A, h), d = E[h], o && (g = t.dontCallGetSet ? (m = s(A, h)) && m.value : A[h]), x = o && g ? g : r[h], (n || j || typeof d != typeof x) && (b = t.bind && o ? a(x, e) : t.wrap && o ? v(x) : j && u(x) ? i(x) : x, (t.sham || x && x.sham || d && d.sham) && p(b, "sham", true), p(E, h, b), j && (l(f, y = S + "Prototype") || p(f, y, {}), p(f[y], h, x), t.real && T && (n || !T[h]) && p(T, h, x)))
}