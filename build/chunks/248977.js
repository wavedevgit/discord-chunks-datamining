/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";

function r(e) {
  let t = "";
  for (let n of Object.keys(e)) {
    let r = e[n];
    void 0 !== r && ("boolean" == typeof r && (r = r ? "yes" : "no"), t += "".concat(n, "=").concat(r, ","))
  }
  return t
}
n.d(t, {
  Z: () => r
}), n(47120)