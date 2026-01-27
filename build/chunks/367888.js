/** Chunk was on web.js **/
/** chunk id: 367888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _1: () => a,
  a9: () => o
});
var Chunk788868 = require("./788868.js");

function i(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    n = Object.keys(r.hd).find(n => {
      let i = r.hd[n];
      return null != i && i.skuId === r.pe.NONE && i.interval === e && i.intervalCount === t
    });
  return null != n ? n : r.gD.NONE_MONTH
}

function a(e) {
  return e.find(e => {
    let t = r.hd[e.planId];
    return null != t && null != t.premiumType
  })
}

function o(e, t, n) {
  let o = a(e);
  if (null == o) {
    if (e.length > 0) {
      let i = r.hd[e[0].planId];
      t = i.interval, n = i.intervalCount
    }
    return i(t, n)
  }
  return o.planId
}