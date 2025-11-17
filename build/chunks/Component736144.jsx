/** Chunk was on web.js **/
/** chunk id: 736144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk451478 = require("./451478.js"),
  Chunk576125 = require("./576125.js"),
  Chunk465858 = require("./465858.js"),
  Chunk112843 = require("./112843.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e) {
  let {
    confettiSpawnRef: t,
    shouldFire: n
  } = e, r = (0, a.e7)([o.Z], () => o.Z.isFocused()), s = (0, c.Z)(), u = (0, l.Z)(t);
  return i.useEffect(() => {
    r && n && null != u && s.fire(u.x, u.y)
  }, [s, r, u, n]), null
}

function _(e) {
  return (0, r.jsx)(s.Z, {
    confettiLocation: e.confettiLocation,
    children: (0, r.jsx)(f, d({}, e))
  })
}