/** Chunk was on 61947 **/
"use strict";
r.d(t, {
  Z: () => o
}), r(388685);
let n = new Set(["nvidia"]);

function o(e) {
  for (let t of Object.keys(e)) {
    let r = e[t];
    if (null != r && null == r.error && n.has(t)) return !0
  }
  return !1
}