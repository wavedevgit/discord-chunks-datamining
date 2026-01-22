/** Chunk was on web.js **/
/** chunk id: 103640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HN: () => l,
  RL: () => c,
  U$: () => s
}), require("./896048.js");
var Chunk374994 = require("./374994.js"),
  Chunk31408 = require("./31408.js");
let a = function(e, t) {
    let {
      multiplier: n,
      value: r
    } = e, [i, a] = t, s = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1, o = r * n;
    return o <= 0 ? 0 : Math.min(s, i.reduce((e, t, n) => {
      if (o > t) {
        let e = a[n];
        if (n + 1 === i.length) return a[n];
        let r = i[n + 1],
          s = a[n + 1],
          l = r - t;
        return (o - t) / l * (s - e) + e
      }
      return o === t ? a[n] : e
    }, 0))
  },
  s = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.fZ.LEVEL_3;
    return a(e, [i.dw[t], i.MO[t]], 1e5)
  },
  o = [
    [1, .001],
    [25, .3],
    [100, .5],
    [250, .8],
    [500, .9],
    [2500, .95],
    [9001, 1]
  ],
  l = (o.map(e => {
    let [t] = e;
    return t
  }), o.map(e => {
    let [t, n] = e;
    return n
  }), e => 1 === e ? {
    color: (0, r.dE)("BRAND_500")
  } : 2 === e || 3 === e ? {
    color: (0, r.dE)("GREEN_360")
  } : 4 === e || 5 === e ? {
    color: (0, r.dE)("YELLOW_300"),
    square: true
  } : 6 === e ? {
    color: (0, r.dE)("RED_400"),
    square: true
  } : {
    color: (0, r.dE)("ORANGE_345"),
    flair: true
  });

function c(e) {
  var t;
  return e.value * (null != (t = e.multiplier) ? t : 1)
}