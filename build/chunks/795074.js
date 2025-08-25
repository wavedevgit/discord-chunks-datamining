/** Chunk was on web.js **/
/** chunk id: 795074, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  ur: () => a
}), require("./647438.js");
let i = !!("undefined" != typeof window && window.document && window.document.createElement),
  o = new Map;

function a(e, t) {
  if (e === t) return e;
  let n = o.get(e);
  if (n) return n.forEach(e => e.current = t), t;
  let r = o.get(t);
  return r ? (r.forEach(t => t.current = e), e) : t
}
"undefined" != typeof FinalizationRegistry && (r = new FinalizationRegistry(e => {
  o.delete(e)
}))