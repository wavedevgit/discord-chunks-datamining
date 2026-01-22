/** Chunk was on web.js **/
/** chunk id: 144667, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => i,
  b: () => r
}), require("./747238.js"), require("./321073.js"), require("./752238.js");
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