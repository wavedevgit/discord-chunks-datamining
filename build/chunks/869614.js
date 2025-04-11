/** Chunk was on 79887 **/
"use strict";
r.d(t, {
  Z: () => l
}), r(388685);
let n = new Set(["nvidia"]);

function l(e) {
  for (let t of Object.keys(e)) {
    let r = e[t];
    if (null != r && null == r.error && n.has(t)) return !0
  }
  return !1
}