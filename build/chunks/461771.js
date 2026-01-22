/** Chunk was on web.js **/
/** chunk id: 461771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => a,
  e: () => i
}), require("./896048.js");
let r = new Map;

function i(e, t) {
  let n = r.get(e);
  return null == n && (n = new Set, r.set(e, n)), n.add(t), () => null == n ? true : n.delete(t)
}

function a(e, t, n) {
  let i = r.get(e);
  if (null != i)
    for (let e of i) e(t, n)
}