/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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