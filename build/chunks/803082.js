/** Chunk was on web.js **/
/** chunk id: 803082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => s
});
var Chunk260431 = require("./260431.js"),
  Chunk723906 = require("./723906.js"),
  Chunk723372 = require("./723372.js");

function s(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let s = e[n];
    for (let e in s) {
      let n = t[e],
        o = s[e];
      "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = (0, r.c)(n, o) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof o ? t[e] = (0, a.A)(n, o) : "id" === e && n && o ? t.id = (0, i.Tw)(n, o) : t[e] = true !== o ? o : n
    }
  }
  return t
}