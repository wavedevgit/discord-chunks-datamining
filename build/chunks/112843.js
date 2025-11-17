/** Chunk was on web.js **/
/** chunk id: 112843, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk351780 = require("./351780.js");

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
  } = Chunk473749.useContext(Chunk745510.h), t = (0, Chunk399606.e7)([Chunk351780.Z], () => Chunk351780.Z.getState()), n = Chunk473749.useCallback(e => ({
    size: {
      type: "static-random",
      minValue: e.confettiSize - c,
      maxValue: e.confettiSize + c
    }
  }), []);
  return Chunk473749.useMemo(() => ({
    fire: (r, i, a) => {
      var o, s;
      let c = (null == a ? true : a.settings) != null ? l({}, t, a.settings) : t;
      e(r, i, n(c), (null != (o = null == a ? true : a.count) ? o : c.confettiCount) * (null != (s = null == a ? true : a.countMultiplier) ? s : 1), {
        sprite: null == a ? true : a.sprite
      })
    }
  }), [module, require, exports])
}