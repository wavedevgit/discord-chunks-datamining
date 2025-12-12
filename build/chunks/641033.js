/** Chunk was on web.js **/
/** chunk id: 641033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Eo: () => c,
  KH: () => a,
  yz: () => l
}), require("./388685.js");
var Chunk900089 = require("./900089.js"),
  Chunk524484 = require("./524484.js");
let o = function(e, t) {
    let {
      multiplier: n,
      value: r
    } = e, [i, o] = t, a = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1, s = r * n;
    return s <= 0 ? 0 : Math.min(a, i.reduce((e, t, n) => {
      if (s > t) {
        let e = o[n];
        if (n + 1 === i.length) return o[n];
        let r = i[n + 1],
          a = o[n + 1],
          l = r - t;
        return (s - t) / l * (a - e) + e
      }
      return s === t ? o[n] : e
    }, 0))
  },
  a = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.qi.LEVEL_3;
    return o(e, [i.JR[t], i.u4[t]], 1e5)
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
  l = (s.map(e => {
    let [t] = e;
    return t
  }), s.map(e => {
    let [t, n] = e;
    return n
  }), e => 1 === e ? {
    color: (0, r.Fw)("BRAND_500")
  } : 2 === e || 3 === e ? {
    color: (0, r.Fw)("GREEN_360")
  } : 4 === e || 5 === e ? {
    color: (0, r.Fw)("YELLOW_300"),
    square: true
  } : 6 === e ? {
    color: (0, r.Fw)("RED_400"),
    square: true
  } : {
    color: (0, r.Fw)("ORANGE_345"),
    flair: true
  });

function c(e) {
  var t;
  return e.value * (null != (t = e.multiplier) ? t : 1)
}