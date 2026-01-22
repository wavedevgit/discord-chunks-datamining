/** Chunk was on web.js **/
/** chunk id: 156482, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  if (e.length < 2) return [];
  let n = [],
    r = e[0];
  for (let i = 1; i < e.length; i++) {
    let a = e[i];
    n.push(t(r, a)), r = a
  }
  return n
}
require.d(exports, {
  A: () => r
}), require("./321073.js")