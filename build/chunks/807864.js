/** Chunk was on web.js **/
/** chunk id: 807864, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let t = Promise.resolve(null),
    n = [],
    r = false,
    {
      onContention: i,
      onContentionResolved: o,
      onTimeout: a,
      timeoutMs: s
    } = e,
    l = function(e, l) {
      n.length > 0 ? (i(l, n), r = true) : r && (o(), r = false), n.push(l);
      let c = null == s || null == a ? null : setTimeout(() => a(l, n), s);
      return new Promise((r, i) => {
        t = t.then(e).then(r, i).then(() => n.splice(0, 1)), null != c && (t = t.then(() => clearTimeout(c)))
      })
    };
  return l.isMutexHeld = () => n.length > 0, l.getLockHolders = () => n, l
}
require.d(exports, {
  H: () => r
}), require("./539854.js")