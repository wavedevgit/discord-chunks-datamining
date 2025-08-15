/** Chunk was on 95355 **/
/** chunk id: 944296, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => u
});
var Chunk406954 = require("./406954.js"),
  Chunk619169 = require("./619169.js"),
  Chunk90620 = require("./90620.js");

function u(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let u = e[n];
    for (let e in u) {
      let n = t[e],
        a = u[e];
      "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = (0, r.t)(n, a) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof a ? t[e] = (0, o.Z)(n, a) : "id" === e && n && a ? t.id = (0, i.ur)(n, a) : t[e] = true !== a ? a : n
    }
  }
  return t
}