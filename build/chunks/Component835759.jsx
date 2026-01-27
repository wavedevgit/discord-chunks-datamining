/** Chunk was on web.js **/
/** chunk id: 835759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk531685 = require("./531685.js"),
  Chunk620141 = require("./620141.js"),
  Chunk966598 = require("./966598.js"),
  Chunk224964 = require("./224964.js");

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
  } = e, r = (0, a.bG)([o.A], () => o.A.isFocused()), s = (0, c.A)(), u = (0, l.A)(t);
  return i.useEffect(() => {
    r && n && null != u && s.fire(u.x, u.y)
  }, [s, r, u, n]), null
}

function p(e) {
  return (0, r.jsx)(s.A, {
    confettiLocation: e.confettiLocation,
    children: (0, r.jsx)(f, d({}, e))
  })
}