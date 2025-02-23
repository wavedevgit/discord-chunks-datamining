/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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