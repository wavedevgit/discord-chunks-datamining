/** Chunk was on web.js **/
/** chunk id: 362092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => r,
  r: () => i
}), require("./35282.js"), require("./539854.js"), require("./364964.js");
let r = /^[a-z0-9_+\-.#]+$/i;

function i(e) {
  let t, n = [],
    r = /\\|```/g;
  for (; null != (t = r.exec(e));) {
    if ("\\" === t[0]) {
      r.lastIndex += 1;
      continue
    }
    n.push(t.index)
  }
  return n
}