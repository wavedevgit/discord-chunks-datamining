/** Chunk was on web.js **/
/** chunk id: 158821, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => o
});
var Chunk929767 = require("./929767.js"),
  Chunk752689 = require("./752689.js"),
  Chunk90620 = require("./90620.js");

function o(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let o = e[n];
    for (let e in o) {
      let n = t[e],
        s = o[e];
      "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = (0, r.t)(n, s) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof s ? t[e] = (0, a.Z)(n, s) : "id" === e && n && s ? t.id = (0, i.ur)(n, s) : t[e] = true !== s ? s : n
    }
  }
  return t
}