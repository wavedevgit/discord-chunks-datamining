/** Chunk was on web.js **/
/** chunk id: 616716, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => i
}), require("./896048.js");
let r = "_errors";

function i(e) {
  return a(e, true)
}

function a(e, t) {
  let n = e[r];
  if (null != n && Array.isArray(n)) return n[0];
  for (let [n, i] of Object.entries(e))
    if (n !== r && null != i && "object" == typeof i) return a(i, null != t ? t : n);
  return null
}