/** Chunk was on web.js **/
/** chunk id: 491819, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MY: () => a,
  Xr: () => o
});
var Chunk474936 = require("./474936.js");

function i(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    n = Object.keys(r.GP).find(n => {
      let i = r.GP[n];
      return null != i && i.skuId === r.Si.NONE && i.interval === e && i.intervalCount === t
    });
  return null != n ? n : r.Xh.NONE_MONTH
}

function a(e) {
  return e.find(e => {
    let t = r.GP[e.planId];
    return null != t && null != t.premiumType
  })
}

function o(e, t, n) {
  let o = a(e);
  if (null == o) {
    if (e.length > 0) {
      let i = r.GP[e[0].planId];
      t = i.interval, n = i.intervalCount
    }
    return i(t, n)
  }
  return o.planId
}