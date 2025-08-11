/** Chunk was on web.js **/
/** chunk id: 248977, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let t = "";
  for (let n of Object.keys(e)) {
    let r = e[n];
    true !== r && ("boolean" == typeof r && (r = r ? "yes" : "no"), t += "".concat(n, "=").concat(r, ","))
  }
  return t
}
require.d(exports, {
  Z: () => r
}), require("./388685.js")