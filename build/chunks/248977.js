/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
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