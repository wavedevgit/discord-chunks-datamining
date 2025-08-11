/** Chunk was on web.js **/
/** chunk id: 421474, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  return "".concat(e, ":").concat(t)
}

function i(e) {
  let t = e.split(":");
  if (2 !== t.length) return null;
  let [n, r] = t;
  return {
    applicationId: n,
    skuId: r
  }
}
require.d(exports, {
  Q: () => i,
  l: () => r
}), require("./35282.js"), require("./388685.js")