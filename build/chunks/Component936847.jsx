/** Chunk was on web.js **/
/** chunk id: 936847, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk576125 = require("./576125.js"),
  Chunk465858 = require("./465858.js"),
  Chunk112843 = require("./112843.js"),
  Chunk524484 = require("./524484.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e) {
  let {
    callTileRef: t,
    isFiring: n
  } = e, r = (0, s.Z)(), o = (0, a.Z)(t);
  return i.useEffect(() => {
    n && null != o && null != t && r.fire(o.x + t.clientWidth / 2, o.y + t.clientHeight / 2, {
      countMultiplier: 4
    })
  }, [t, r, n, o]), null
}

function f(e) {
  return (0, r.jsx)(o.Z, {
    confettiLocation: l.Hn.CALL_TILE,
    children: (0, r.jsx)(d, u({}, e))
  })
}