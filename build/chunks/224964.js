/** Chunk was on web.js **/
/** chunk id: 224964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk3137 = require("./3137.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
let c = 7;

function u() {
  let {
    createMultipleConfettiAt: e
  } = r.useContext(a.x), t = (0, i.bG)([o.A], () => o.A.getState()), n = r.useCallback(e => ({
    size: {
      type: "static-random",
      minValue: e.confettiSize - c,
      maxValue: e.confettiSize + c
    }
  }), []);
  return r.useMemo(() => ({
    fire: (r, i, a) => {
      var o, s;
      let c = (null == a ? true : a.settings) != null ? l({}, t, a.settings) : t;
      e(r, i, n(c), (null != (o = null == a ? true : a.count) ? o : c.confettiCount) * (null != (s = null == a ? true : a.countMultiplier) ? s : 1), {
        sprite: null == a ? true : a.sprite
      })
    }
  }), [e, n, t])
}