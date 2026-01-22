/** Chunk was on web.js **/
/** chunk id: 254075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk417597 = require("./417597.js"),
  Chunk3137 = require("./3137.js"),
  Chunk620141 = require("./620141.js"),
  Chunk966598 = require("./966598.js"),
  Chunk224964 = require("./224964.js"),
  Chunk31408 = require("./31408.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
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

function _(e) {
  let {
    reactionRef: t,
    count: n
  } = e, r = i.useRef(n), l = (0, s.bG)([o.A], () => o.A.getState()), d = (0, u.A)(), f = (0, c.A)(t);
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
  return (0, r.jsx)(l.A, {
    confettiLocation: d.k.REACTION,
    children: (0, r.jsx)(_, p({}, e))
  })
}