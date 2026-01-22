/** Chunk was on web.js **/
/** chunk id: 121401, original params: e,t,n (module,exports,re quire) **/
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
  L: () => r,
  u: () => i
}), require("./747238.js"), require("./896048.js")