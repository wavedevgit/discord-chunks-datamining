/** Chunk was on web.js **/
/** chunk id: 326182, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let t = false,
    n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e.charAt(r);
    "_" == i ? t = true : /\d/.test(i) ? (n.push(i), t = true) : t ? (n.push(i.toUpperCase()), t = false) : 0 == r ? n.push(i.toLowerCase()) : n.push(i)
  }
  return n.join("")
}
require.d(exports, {
  W: () => r
})