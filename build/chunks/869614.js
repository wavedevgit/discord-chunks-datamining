/** Chunk was on 80237 (68cc2a668cd36f89.js) **/
"use strict";
n.d(t, {
  Z: () => o
}), n(47120);
let r = new Set(["nvidia"]);

function o(e) {
  for (let t of Object.keys(e)) {
    let n = e[t];
    if (null != n && null == n.error && r.has(t)) return !0
  }
  return !1
}