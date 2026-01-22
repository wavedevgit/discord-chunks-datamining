/** Chunk was on web.js **/
/** chunk id: 265383, original params: e,t,n (module,exports,re quire) **/
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
  A: () => r
}), require("./896048.js")