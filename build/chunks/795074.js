/** Chunk was on web.js **/
/** chunk id: 795074, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  ur: () => o
}), require("./647438.js");
let i = !!("undefined" != typeof window && window.document && window.document.createElement),
  a = new Map;

function o(e, t) {
  if (e === t) return e;
  let n = a.get(e);
  if (n) return n.forEach(e => e.current = t), t;
  let r = a.get(t);
  return r ? (r.forEach(t => t.current = e), e) : t
}
"undefined" != typeof FinalizationRegistry && (r = new FinalizationRegistry(e => {
  a.delete(e)
}))