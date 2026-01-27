/** Chunk was on web.js **/
/** chunk id: 803082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => o
});
var Chunk260431 = require("./260431.js"),
  Chunk723906 = require("./723906.js"),
  Chunk723372 = require("./723372.js");

function o(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let o = e[n];
    for (let e in o) {
      let n = t[e],
        s = o[e];
      "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = (0, r.c)(n, s) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof s ? t[e] = (0, a.A)(n, s) : "id" === e && n && s ? t.id = (0, i.Tw)(n, s) : t[e] = true !== s ? s : n
    }
  }
  return t
}