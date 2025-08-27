/** Chunk was on web.js **/
/** chunk id: 641033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Eo: () => f,
  KH: () => o,
  nc: () => u,
  yz: () => d
}), require("./388685.js");
var Chunk524484 = require("./524484.js"),
  Chunk981631 = require("./981631.js");
let a = function(e, t) {
    let {
      multiplier: n,
      value: r
    } = e, [i, a] = t, o = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1, s = r * n;
    return s <= 0 ? 0 : Math.min(o, i.reduce((e, t, n) => {
      if (s > t) {
        let e = a[n];
        if (n + 1 === i.length) return a[n];
        let r = i[n + 1],
          o = a[n + 1],
          l = r - t;
        return (s - t) / l * (o - e) + e
      }
      return s === t ? a[n] : e
    }, 0))
  },
  o = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.qi.LEVEL_3;
    return a(e, [r.JR[t], r.u4[t]], 1e5)
  },
  s = [
    [1, .001],
    [25, .3],
    [100, .5],
    [250, .8],
    [500, .9],
    [2500, .95],
    [9001, 1]
  ],
  l = s.map(e => {
    let [t] = e;
    return t
  }),
  c = s.map(e => {
    let [t, n] = e;
    return n
  }),
  u = e => a(e, [l, c], 1),
  d = e => 1 === e ? {
    color: i.Ilk.BRAND_500
  } : 2 === e || 3 === e ? {
    color: i.Ilk.GREEN_360
  } : 4 === e || 5 === e ? {
    color: i.Ilk.YELLOW_300,
    square: true
  } : 6 === e ? {
    color: i.Ilk.RED_400,
    square: true
  } : {
    color: i.Ilk.ORANGE_345,
    flair: true
  };

function f(e) {
  var t;
  return e.value * (null != (t = e.multiplier) ? t : 1)
}