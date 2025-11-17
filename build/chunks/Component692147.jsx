/** Chunk was on web.js **/
/** chunk id: 692147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk399606 = require("./399606.js"),
  Chunk351780 = require("./351780.js"),
  Chunk576125 = require("./576125.js"),
  Chunk465858 = require("./465858.js"),
  Chunk112843 = require("./112843.js"),
  Chunk524484 = require("./524484.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e) {
  let {
    reactionRef: t,
    count: n
  } = e, r = i.useRef(n), l = (0, o.e7)([s.Z], () => s.Z.getState()), d = (0, u.Z)(), f = (0, c.Z)(t);
  return i.useEffect(() => {
    if (n > r.current && null != f) {
      let e = (0, a.clamp)(n, l.confettiCount / 2, 2 * l.confettiCount);
      d.fire(f.x, f.y, {
        count: e
      })
    }
    r.current = n
  }, [n, f, d, l.confettiCount]), null
}

function h(e) {
  return (0, r.jsx)(l.Z, {
    confettiLocation: d.Hn.REACTION,
    children: (0, r.jsx)(p, _({}, e))
  })
}