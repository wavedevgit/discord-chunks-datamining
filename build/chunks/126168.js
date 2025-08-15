/** Chunk was on web.js **/
/** chunk id: 126168, original params: e,t,n (module,exports,re quire) **/
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
  Z: () => r
}), require("./539854.js")